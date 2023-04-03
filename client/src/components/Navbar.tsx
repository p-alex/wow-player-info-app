import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { auth } = useAuth();
  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="flex flex-col gap-4 items-center px-4 mb-8">
        <p className="text-2xl">{auth.battleTag}</p> <LogoutBtn />
      </div>
      <Link to={"/"} className="text-blue-500">
        Character list
      </Link>
    </div>
  );
};

export default Navbar;
