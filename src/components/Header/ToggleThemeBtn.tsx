import { useThemeContext } from "../ThemeProvider";

function ToggleThemeBtn() {
  const { darkTheme, setDarkTheme } = useThemeContext();

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <button
      className="ml-2 cursor-pointer p-2 text-2xl hover:text-blue-700 dark:text-white dark:hover:text-blue-700"
      aria-label="toggle theme button"
      onClick={toggleTheme}
    >
      <i className={`${darkTheme ? "bi-moon-stars" : "bi-sun"} bi`}></i>
    </button>
  );
}

export default ToggleThemeBtn;
