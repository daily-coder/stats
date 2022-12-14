import Menubtn from "./Menubtn";
import Searchbar from "./SearchBar/Searchbar";
import ToggleThemeBtn from "./ToggleThemeBtn";

function Header() {
  return (
    <header className="flex h-24 items-center border-b border-slate-900/50 bg-white px-4 dark:border-slate-100/50 dark:bg-slate-900">
      <Menubtn />
      <Searchbar />
      <ToggleThemeBtn />
    </header>
  );
}

export default Header;
