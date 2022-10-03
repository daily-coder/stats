import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Error from "./Error";
import Loading from "./Loading";

function WithLoading(WrappedComponent) {
  return function EnhancedComponent() {
    const { error, loading, cssData } = useContext(DataContext);

    return (
      <>
        {loading ? (
          <div className="flex h-full items-center justify-center text-lg">
            <Loading />
          </div>
        ) : error || cssData == null ? (
          <div className="flex h-full items-center justify-center text-lg">
            <Error />
          </div>
        ) : (
          <WrappedComponent />
        )}
      </>
    );
  };
}

export default WithLoading;
