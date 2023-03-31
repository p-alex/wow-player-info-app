import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../app/store";

const RedirectIfAuth = ({ children }: { children: ReactElement<any, any> }) => {
  const auth = useSelector((state: RootState) => state.auth);

  return auth.id ? <Navigate to="/" replace={true} /> : children;
};

export default RedirectIfAuth;
