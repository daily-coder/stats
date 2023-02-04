import { useDataContext } from "../DataProvider";

import Error from "./Error";
import Loading from "./Loading";

function WithLoading(WrappedComponent: () => JSX.Element) {
  return function EnhancedComponent() {
    const { error, loading, cssData } = useDataContext();

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
