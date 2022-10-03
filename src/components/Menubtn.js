import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Menubtn() {
  const { menuExpand, setMenuExpand } = useContext(DataContext);

  function toggleMenu() {
    setMenuExpand((prevMenuExpand) => !prevMenuExpand);
  }

  return (
    <button
      className="group mr-2 rounded-md p-2"
      aria-label="menu button"
      onClick={toggleMenu}
    >
      <div
        className={`${
          menuExpand ? "translate-y-2 rotate-45" : ""
        } my-1 h-1 w-6 bg-black transition-all group-hover:bg-blue-700 dark:bg-white`}
      ></div>
      <div
        className={`${
          menuExpand ? "opacity-0" : ""
        } my-1 h-1 w-6 bg-black transition-all group-hover:bg-blue-700 dark:bg-white`}
      ></div>
      <div
        className={`${
          menuExpand ? "-translate-y-2 -rotate-45" : ""
        } my-1 h-1 w-6 bg-black transition-all group-hover:bg-blue-700 dark:bg-white`}
      ></div>
    </button>
  );
}

export default Menubtn;
