import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return {
    isAuth: auth.accessToken !== "",
    auth,
  };
};

export default useAuth;
