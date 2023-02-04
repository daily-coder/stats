import { createContext, useState, useContext } from "react";

import type { cssData } from "../../types";

interface DataContextType {
  menuExpand: boolean;
  setMenuExpand: React.Dispatch<React.SetStateAction<boolean>>;
  cssData: cssData | null;
  setCssData: React.Dispatch<React.SetStateAction<cssData | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataContext = createContext<DataContextType | null>(null);

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext should be used within DataProvider");
  }
  return context;
}

interface DataProviderProps {
  children: React.ReactNode;
}

function DataProvider({ children }: DataProviderProps) {
  // On initial page load we will show menu if window width is greater than 768px and
  // hide it otherwise.
  const [menuExpand, setMenuExpand] = useState(() => window.innerWidth > 768);
  const [cssData, setCssData] = useState<cssData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <DataContext.Provider
      value={{
        menuExpand,
        setMenuExpand,
        cssData,
        setCssData,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
