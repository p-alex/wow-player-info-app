import axios from "axios";
import base64encode from "./base64encode";

interface BattleNetAccessTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  sub: string;
}

const getBattleNetAccessToken = async ({
  authorizationCode,
}: {
  authorizationCode: string;
}) => {
  const url = `https://eu.battle.net/oauth/token?grant_type=authorization_code&redirect_uri=${process.env.BATTLENET_REDIRECT_URI}&code=${authorizationCode}`;

  const basicCredentials = base64encode(
    process.env.BATTLENET_CLIENT_ID + ":" + process.env.BATTLENET_CLIENT_SECRET
  );

  const { data } = await axios.post<BattleNetAccessTokenResponse>(
    url,
    {},
    {
      headers: {
        Authorization: `Basic ${basicCredentials}`,
      },
    }
  );

  return data.access_token;
};

export type GetBattleNetAccessTokenType = typeof getBattleNetAccessToken;

export default getBattleNetAccessToken;
