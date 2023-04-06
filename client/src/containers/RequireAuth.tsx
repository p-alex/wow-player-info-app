import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequireAuth = ({ children }: { children: ReactElement<any, any> }) => {
  const { auth } = useAuth();

  if (!auth.id) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default RequireAuth;
