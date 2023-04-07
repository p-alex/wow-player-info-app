import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import RegionInput from "./RegionInput";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import LogoutBtn from "./LogoutBtn";

const Navbar = () => {
  const { auth } = useAuth();
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  return (
    <nav className="w-full flex flex-col justify-between p-4">
      <div className="w-full relative flex justify-between items-center gap-4 mb-4">
        <RegionInput />
        <div className="flex flex-col items-end">
          <p className="flex">{auth.battleTag} </p>
          <LogoutBtn />
        </div>
      </div>
      <ul className="flex gap-4 border border-slate-700 bg-slate-900 rounded-md">
        <li>
          <Link to={"/"} className="block hover:underline py-2 px-4">
            Character list
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
