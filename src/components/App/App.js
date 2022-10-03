import { HashRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "../../pages/SharedLayout";
import Home from "../../pages/Home";
import Overview from "../../pages/Overview";
import Color from "../../pages/Color";
import BgColor from "../../pages/BgColor";
import NotFound from "../../pages/NotFound";
import DataProvider from "../../context/DataContext";
import ThemeProvider from "../../context/ThemeContext";
import Category from "../../pages/Category";

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
