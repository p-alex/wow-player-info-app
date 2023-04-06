import { useRegion } from "../context/RegionContext";

const RegionLocale = () => {
  const { region, handleSetRegion } = useRegion();

  return (
    <div className="flex gap-8 w-full items-center justify-center flex-wrap">
      <div
        className={`flex flex-col gap-2 ${
          !region ? "animate-pulse active:animate-none " : ""
        }`}
      >
        <label htmlFor="region">Region</label>
        <select
          className="bg-slate-900 border border-slate-700 p-2 cursor-pointer"
          value={region}
          onChange={handleSetRegion}
          id={"region"}
        >
          <option value={""}>Choose your region</option>
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

export default RegionLocale;
