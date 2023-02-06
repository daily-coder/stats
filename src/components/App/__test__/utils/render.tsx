import { render as rtlRender } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { HashRouter } from "react-router-dom";

function render(ui: ReactElement, { route = "/", ...options } = {}) {
  window.history.pushState({}, "Test page", route);

  // BrowserRouter is not supported in github pages
  function Wrapper({ children }: { children: ReactNode }) {
    return <HashRouter>{children}</HashRouter>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export default render;
