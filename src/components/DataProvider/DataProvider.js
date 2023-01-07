import { createContext, useState, useContext } from "react";

const DataContext = createContext(null);

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext should be used within DataProvider");
  }
  return context;
}

function DataProvider({ children }) {
  // On initial page load we will show menu if window width is greater than 768px and
  // hide it otherwise.
  const [menuExpand, setMenuExpand] = useState(() => window.innerWidth > 768);
  const [cssData, setCssData] = useState(null);
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
