import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HashRouter } from "react-router-dom";

import App from "../App";

function render(ui, { route = "/", ...options } = {}) {
  window.history.pushState({}, "Test page", route);

  // BrowserRouter is not supported in github pages
  function Wrapper({ children }) {
    return <HashRouter>{children}</HashRouter>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

test("navigate to overview page on clicking get started button", async () => {
  render(<App />);

  await userEvent.click(screen.getByRole("link", { name: /get started/i }));

  await waitForElementToBeRemoved(screen.getByLabelText(/loading/i));

  expect(
    screen.getByRole("heading", { name: /file size/i })
  ).toBeInTheDocument();
});
