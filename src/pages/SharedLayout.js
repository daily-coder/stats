import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function SharedLayout() {
  const { loading, error } = useContext(DataContext);

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
