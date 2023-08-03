import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface IAuth {
  id: string;
  battleTag: string;
  accessToken: string;
}

const AuthContext = createContext({
  auth: {
    id: '',
    battleTag: '',
    accessToken: '',
  },
  handleSetAuth: (auth: IAuth) => {},
  handleUpdateAccessToken: ({ accessToken }: { accessToken: string }) => {},
  handleResetAuth: () => {},
});

const AuthProvider = (props: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<IAuth>({
    id: '',
    battleTag: '',
    accessToken: '',
  });

  const handleSetAuth = (auth: IAuth) => {
    setAuth((prevState) => ({ ...prevState, ...auth }));
  };

  const handleUpdateAccessToken = ({ accessToken }: { accessToken: string }) => {
    setAuth((prevState) => ({ ...prevState, accessToken }));
  };

  const handleResetAuth = () => {
    setAuth((prevState) => ({
      ...prevState,
      id: '',
      battleTag: '',
      accessToken: '',
    }));
    navigate('/login');
  };

  return <AuthContext.Provider value={{ auth, handleSetAuth, handleUpdateAccessToken, handleResetAuth }}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
