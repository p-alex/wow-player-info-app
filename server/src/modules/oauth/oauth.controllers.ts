import { Request, Response } from "express";
import { OAuthServiceListType } from ".";
import ms from "ms";

class OAuthController {
  private oauthServiceList: OAuthServiceListType;

  constructor({
    oauthServiceList,
  }: {
    oauthServiceList: OAuthServiceListType;
  }) {
    this.oauthServiceList = oauthServiceList;
  }

  makeOAuthControllerList() {
    return Object.freeze({
      loginController: this.loginController,
      refreshTokenController: this.refreshTokenController,
      logoutController: this.logoutController,
    });
  }

  private loginController = async (
    req: Request<{}, {}, {}, { code: string }>,
    res: Response
  ) => {
    try {
      const { code } = req.query;
      const data = await this.oauthServiceList.loginService({
        authorizationCode: code,
      });
      res.cookie("wi-rt", data.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: ms(process.env.REFRESH_TOKEN_EXPIRE!),
        // domain: process.env.SERVER_DOMAIN,
      });
      return res.redirect(process.env.CLIENT_URL!);
    } catch (error: any) {
      console.log(error);
      return res.redirect(
        `${process.env.CLIENT_URL!}/login?error=${error.message}`
      );
    }
  };

  private refreshTokenController = async (req: Request, res: Response) => {
    try {
      const refreshToken = req.cookies.refresh_token;

      const data = await this.oauthServiceList.refreshTokenService({
        refreshToken,
      });

      if (data.statusCode === 200) {
        res.cookie("wi-rt", data.data?.newRefreshToken, {
          maxAge: ms(process.env.REFRESH_TOKEN_EXPIRE!),
          sameSite: "strict",
          secure: true,
          httpOnly: true,
          // domain: process.env.SERVER_DOMAIN,
        });

        return res.status(200).json({
          success: true,
          errors: [],
          data: {
            user: data.data?.user,
            newAccessToken: data.data?.newAccessToken,
          },
        });
      }

      if (data.statusCode === 403) {
        res.cookie("wi-rt", "", {
          maxAge: 0,
          sameSite: "strict",
          secure: true,
          httpOnly: true,
          // domain: process.env.SERVER_DOMAIN,
        });

        return res
          .status(data.statusCode)
          .json({ success: false, errors: data.errors, data: data.data });
      }

      throw new Error("Something went wrong...");
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: [{ message: error.message }],
        data: null,
      });
    }
  };

  logoutController = async (req: Request, res: Response) => {
    try {
      const refreshToken = req.cookies.refresh_token;
      await this.oauthServiceList.logoutService({ refreshToken });
      res.cookie("wi-rt", "", {
        httpOnly: true,
        secure: true,
        maxAge: 0,
        // domain: process.env.SERVER_DOMAIN,
      });
      return res.status(200).json({ success: true, errors: [], data: null });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: [{ message: error.message }],
        data: null,
      });
    }
  };
}

export default OAuthController;
