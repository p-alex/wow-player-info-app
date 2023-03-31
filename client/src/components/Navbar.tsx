import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LogoutBtn from "./LogoutBtn";

const Navbar = () => {
  const { auth } = useAuth();
  return (
    <div className="fixed top-0 left-0 w-full max-w-[2400px] right-0 mx-auto h-[80px] flex justify-between items-center bg-black overflow-hidden z-2">
      <Link
        to={"/"}
        className="h-[80px] bg-slate-800 p-4 flex items-center justify-center text-2xl"
      >
        WoW Inspect
      </Link>
      <div className="flex gap-4 items-center px-4">
        <p>{auth.battleTag}</p> <LogoutBtn />
      </div>
    </div>
  );
};

export default Navbar;
