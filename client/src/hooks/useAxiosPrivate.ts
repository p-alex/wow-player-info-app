import useRefreshToken from './useRefreshToken';
import { useEffect } from 'react';
import { AxiosError } from 'axios';
import { axiosPrivate } from '../api';
import { useAuth } from '../context/AuthContext';

const useAxiosPrivate = () => {
  const { auth } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const prevRequest = error?.config;
        // @ts-ignore
        if (error!.response!.status === 403 && !prevRequest?.sent) {
          // @ts-ignore
          prevRequest.sent = true;
          const accessToken = await refresh();
          prevRequest!.headers['Authorization'] = `Bearer ${accessToken}`;
          return axiosPrivate(prevRequest!);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [auth]);

  return axiosPrivate;
};

export default useAxiosPrivate;
