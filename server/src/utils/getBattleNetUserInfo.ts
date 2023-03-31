import axios from "axios";

interface GetBattleNetUserInfoResponse {
  sub: string;
  id: number;
  battletag: string;
}

const getBattleNetUserInfo = async ({
  access_token,
}: {
  access_token: string;
}) => {
  const { data } = await axios.get<GetBattleNetUserInfoResponse>(
    "https://oauth.battle.net/userinfo",
    {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    }
  );
  return { ...data, id: data.id.toString() };
};
export type GetBattleNetUserInfoType = typeof getBattleNetUserInfo;

export default getBattleNetUserInfo;
