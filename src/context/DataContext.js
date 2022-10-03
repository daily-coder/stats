import { createContext, useState } from "react";

export const DataContext = createContext(null);

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
