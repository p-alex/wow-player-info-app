import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useRegion } from "../context/RegionContext";
import RegionInput from "../components/RegionInput";

const Layout = () => {
  const { region } = useRegion();
  return (
    <div className="max-w-[2400px] mx-auto">
      <Navbar />
      <RegionInput />

      <div>{region && <Outlet />}</div>
    </div>
  );
};

export default Layout;
