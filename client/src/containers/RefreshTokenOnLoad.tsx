import { useEffect, useState, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { axiosPublic } from "../api";

import { setUser } from "../app/features/auth";
import Spinner from "../components/Spinner/Spinner";

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
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleRefreshToken = async () => {
    try {
      setIsLoading(true);
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
    } catch (error) {
      console.error(error);
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
