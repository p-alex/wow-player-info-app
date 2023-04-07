import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useRegion } from "../context/RegionContext";

const Layout = () => {
  const { region } = useRegion();
  return (
    <div className="max-w-[1100px] mx-auto">
      <Navbar />
      <div>{region && <Outlet />}</div>
    </div>
  );
};

export default Layout;
