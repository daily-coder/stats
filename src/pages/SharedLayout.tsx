import { Outlet } from "react-router-dom";

import { useDataContext } from "../components/DataProvider";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";

function SharedLayout() {
  const { loading, error } = useDataContext();

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex h-full overflow-hidden">
        <Sidebar />
        <main className="h-full flex-grow overflow-y-auto overflow-x-hidden p-6">
          {/* we don't need grid-layout when error message and loading animation is displayed*/}
          <section
            className={`${
              loading || error
                ? "h-full"
                : "grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-6"
            }`}
          >
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  );
}

export default SharedLayout;
