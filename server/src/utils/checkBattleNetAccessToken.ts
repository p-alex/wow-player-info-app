import axios from "axios";

interface CheckBattleNetAccessToken {
  exp: 1679852134;
}

const checkBattleNetAccessToken = async ({
  accessToken,
}: {
  accessToken: string;
}) => {
  const result = await axios.post<CheckBattleNetAccessToken>(
    "https://eu.battle.net/oauth/check_token?token=" + accessToken
  );
  console.log(result.data);
  const expiryDate = result.data.exp;
  return Date.now() < expiryDate;
};

export default checkBattleNetAccessToken;
