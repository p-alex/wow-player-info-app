import ms from "ms";
import { OAuthDbListType } from ".";
import { FastHashType } from "../../utils/fastHash";
import { GetBattleNetAccessTokenType } from "../../utils/getBattleNetAccessToken";
import { GetBattleNetUserInfoType } from "../../utils/getBattleNetUserInfo";
import { SignJwtType, VerifyJwtType } from "../../utils/jwt";

class OAuthService {
  private oauthDbList: OAuthDbListType;
  private signJwt: SignJwtType;
  private verifyJwt: VerifyJwtType;
  private fastHash: FastHashType;
  private getBattleNetAccessToken: GetBattleNetAccessTokenType;
  private getBattleNetUserInfo: GetBattleNetUserInfoType;

  constructor({
    oauthDbList,
    signJwt,
    verifyJwt,
    fastHash,
    getBattleNetAccessToken,
    getBattleNetUserInfo,
  }: {
    oauthDbList: OAuthDbListType;
    signJwt: SignJwtType;
    verifyJwt: VerifyJwtType;
    fastHash: FastHashType;
    getBattleNetAccessToken: GetBattleNetAccessTokenType;
    getBattleNetUserInfo: GetBattleNetUserInfoType;
  }) {
    this.oauthDbList = oauthDbList;
    this.signJwt = signJwt;
    this.verifyJwt = verifyJwt;
    this.fastHash = fastHash;
    this.getBattleNetAccessToken = getBattleNetAccessToken;
    this.getBattleNetUserInfo = getBattleNetUserInfo;
  }

  makeOAuthServiceList() {
    return Object.freeze({
      loginService: this.loginService,
      refreshTokenService: this.refreshTokenService,
      logoutService: this.logoutService,
    });
  }

  private loginService = async ({
    authorizationCode,
  }: {
    authorizationCode: string;
  }) => {
    const bn_access_token = await this.getBattleNetAccessToken({
      authorizationCode,
    });

    const userInfo = await this.getBattleNetUserInfo({
      access_token: bn_access_token,
    });

    const user = await this.oauthDbList.findUserById({ id: userInfo.id });

    if (!user) {
      await this.oauthDbList.createUser({
        id: userInfo.id,
        battleTag: userInfo.battletag,
      });
    }

    const refreshToken = this.signJwt({
      payload: { id: userInfo.id },
      secret: process.env.REFRESH_TOKEN_SECRET!,
      options: {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRE!,
      },
    });

    const hashedRefreshToken = this.fastHash(refreshToken);

    await this.oauthDbList.createSession({
      user_id: userInfo.id,
      hashedRefreshToken,
      bn_access_token,
      expiry_date: Date.now() + ms(process.env.REFRESH_TOKEN_EXPIRE!),
    });

    return {
      user: {
        id: userInfo.id,
        battleTag: userInfo.battletag,
      },
      refreshToken,
    };
  };

  private refreshTokenService = async ({
    refreshToken,
  }: {
    refreshToken: string;
  }) => {
    let tokenPayload: { id: string };

    try {
      tokenPayload = this.verifyJwt<{ id: string }>({
        token: refreshToken,
        secret: process.env.REFRESH_TOKEN_SECRET!,
      });
    } catch (error: any) {
      await this.oauthDbList.deleteExpiredSessions();
      return {
        statusCode: 403,
        errors: [{ message: error.message }],
        data: null,
      };
    }

    const user = await this.oauthDbList.findUserById({ id: tokenPayload!.id });

    if (!user) {
      return {
        statusCode: 403,
        errors: [{ message: "No user found" }],
        data: null,
      };
    }

    const newRefreshToken = await this.signJwt({
      payload: { id: user.id },
      secret: process.env.REFRESH_TOKEN_SECRET!,
      options: { expiresIn: process.env.REFRESH_TOKEN_EXPIRE },
    });

    const newAccessToken = await this.signJwt({
      payload: { id: user.id },
      secret: process.env.ACCESS_TOKEN_SECRET!,
      options: { expiresIn: process.env.ACCESS_TOKEN_EXPIRE },
    });

    await this.oauthDbList.updateSession({
      oldHashedRefreshToken: this.fastHash(refreshToken),
      newHashedRefreshToken: this.fastHash(newRefreshToken),
    });

    return {
      statusCode: 200,
      errors: [],
      data: {
        user: {
          id: user.id,
          battleTag: user.battleTag,
        },
        newAccessToken,
        newRefreshToken,
      },
    };
  };

  private logoutService = async ({
    refreshToken,
  }: {
    refreshToken: string;
  }) => {
    const hashedRefreshToken = this.fastHash(refreshToken);

    await this.oauthDbList.deleteSession({ hashedRefreshToken });

    return { success: true };
  };
}

export default OAuthService;
