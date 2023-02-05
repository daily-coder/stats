import { createContext, useEffect, useState, useContext } from "react";

interface ThemeContextType {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext should be used within ThemeProvider");
  }
  return context;
}

interface ThemeProvideProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProvideProps) {
  const [darkTheme, setDarkTheme] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
