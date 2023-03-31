import { useDispatch } from "react-redux";
import { axiosPublic } from "../api";
import { setUser } from "../app/features/auth";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const handleRefreshToken = async () => {
    const { data } = await axiosPublic.get("/oauth/refresh-token", {
      withCredentials: true,
    });

    if (!data.success || !data.data) return;

    dispatch(
      setUser({
        id: data.data.user.id,
        battleTag: data.data.user.battleTag,
        accessToken: data.data.newAccessToken,
      })
    );

    return data.data.newAccessToken;
  };

  return handleRefreshToken;
};

export default useRefreshToken;
