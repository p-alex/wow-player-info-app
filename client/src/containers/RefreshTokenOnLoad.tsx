import { useEffect, useState, ReactElement } from "react";
import { axiosPublic } from "../api";
import Spinner from "../components/Spinner/Spinner";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export interface DefaultResponse<Data> {
  success: boolean;
  errors: { message: string }[];
  data: Data | null;
}

const RefreshTokenOnLoad = ({
  children,
}: {
  children: ReactElement<any, any>;
}) => {
  const navigate = useNavigate();
  const { handleSetAuth, handleResetAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleRefreshToken = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosPublic.get("/oauth/refresh-token", {
        withCredentials: true,
      });

      if (!data.success || !data.data) return;

      handleSetAuth({
        id: data.data.user.id,
        battleTag: data.data.user.battleTag,
        accessToken: data.data.newAccessToken,
      });
    } catch (error) {
      console.error(error);
      handleResetAuth();
      navigate("/login");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleRefreshToken();
  }, []);

  return isLoading ? <Spinner /> : children;
};

export default RefreshTokenOnLoad;
