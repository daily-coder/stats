import { HashRouter, Route, Routes } from "react-router-dom";

import BgColor from "../../pages/BgColor";
import Category from "../../pages/Category";
import Color from "../../pages/Color";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Overview from "../../pages/Overview";
import SharedLayout from "../../pages/SharedLayout";
import DataProvider from "../DataProvider";
import ThemeProvider from "../ThemeProvider";

function App() {
  return (
    <div>
      <DataProvider>
        <ThemeProvider>
          {/* github pages doesn't work with BrowserRouter */}
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<SharedLayout />}>
                {/**
                 * overview, color and bg-color pages internal logic is different from other
                 * categories that's why we don't render them using useParams hook
                 */}
                <Route path="overview" element={<Overview />} />
                <Route path="color" element={<Color />} />
                <Route path="bg-color" element={<BgColor />} />
                <Route path=":id" element={<Category />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </ThemeProvider>
      </DataProvider>
    </div>
  );
}

export default App;
