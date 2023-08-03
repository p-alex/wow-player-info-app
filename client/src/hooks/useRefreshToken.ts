import { axiosPublic } from '../api';
import { useAuth } from '../context/AuthContext';

const useRefreshToken = () => {
  const { handleSetAuth } = useAuth();

  const handleRefreshToken = async () => {
    const { data } = await axiosPublic.get('/oauth/refresh-token', {
      withCredentials: true,
    });

    if (!data.success || !data.data) return;

    handleSetAuth({
      id: data.data.user.id,
      battleTag: data.data.user.battleTag,
      accessToken: data.data.newAccessToken,
    });

    return data.data.newAccessToken;
  };

  return handleRefreshToken;
};

export default useRefreshToken;
