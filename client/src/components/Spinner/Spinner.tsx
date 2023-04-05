import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="fixed left-0 right-0 mx-auto top-[50%] translate-y-[-50%] flex items-center justify-center w-[100px] h-[100px] p-4 bg-slate-900 border border-slate-700 rounded-md">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
