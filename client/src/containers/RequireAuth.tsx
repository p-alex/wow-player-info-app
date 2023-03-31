import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: ReactElement<any, any> }) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.accessToken) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default RequireAuth;
