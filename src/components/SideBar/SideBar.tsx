import { useDataContext } from "../DataProvider";

import SideBarLink from "./SideBarLink";

function SideBar() {
  const { menuExpand, setMenuExpand } = useDataContext();

  function hideMenu() {
    if (window.innerWidth > 768) return;
    setMenuExpand(false);
  }

  const navList = [
    "Overview",
    "Layout",
    "Position",
    "Spacing",
    "Typography",
    "Border",
    "Color",
    "Bg-color",
  ];
  const listElements = navList.map((navItem) => {
    return (
      <li key={navItem}>
        <SideBarLink
          to={`/category/${navItem.toLowerCase()}`}
          linkText={navItem}
          hideMenu={hideMenu}
        />
      </li>
    );
  });

  return (
    <nav
      className={`${
        menuExpand ? "w-60 border-r" : "w-0"
      } fixed left-0 z-10 h-full w-60 overflow-y-auto border-slate-900/50 bg-blue-700 text-white transition-all dark:border-slate-100/50 dark:bg-slate-900 md:static`}
      data-testid="side-bar"
    >
      <ul className="w-full py-10 text-lg font-semibold">{listElements}</ul>
    </nav>
  );
}

export default SideBar;
