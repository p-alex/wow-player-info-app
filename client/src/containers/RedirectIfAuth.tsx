import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RedirectIfAuth = ({ children }: { children: ReactElement<any, any> }) => {
  const { auth } = useAuth();

  return auth.id ? <Navigate to="/" replace={true} /> : children;
};

export default RedirectIfAuth;
