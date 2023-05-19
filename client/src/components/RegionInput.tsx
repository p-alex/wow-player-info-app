import { useRef, useEffect } from "react";
import { useRegion } from "../context/RegionContext";
import { useNavigate } from "react-router-dom";
const RegionInput = () => {
  const navigate = useNavigate();
  const { region, handleSetRegion } = useRegion();
  const count = useRef<number>(0);
  useEffect(() => {
    if (count.current > 0) {
      navigate("/");
    }
    return () => {
      count.current++;
    };
  }, [region]);

  return (
    <div className="flex gap-8 items-center justify-center">
      <div
        className={`flex flex-col gap-1 ${
          !region ? "animate-pulse active:animate-none " : ""
        }`}
      >
        <label htmlFor="region">Region</label>
        <select
          className="bg-slate-900 border border-slate-700 p-2 cursor-pointer rounded-md"
          value={region}
          onChange={handleSetRegion}
          id={"region"}
        >
          <option value={""}>Choose a region</option>
          <option value={"eu"}>Europe</option>
          <option value={"us"}>North America</option>
          <option value={"kr"}>Korea</option>
          <option value={"tw"}>Taiwan</option>
          <option value={"cn"}>China</option>
        </select>
      </div>
    </div>
  );
};

export default RegionInput;
