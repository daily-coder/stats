import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

import render from "./utils/render";

test("toggle dark mode on clicking theme button", async () => {
  render(<App />, { route: "#/category/overview" });

  const menuButton = screen.getByRole("button", {
    name: /toggle theme button/i,
  });
  const html = document.documentElement;
  const darkModeClass = "dark";

  expect(html).not.toHaveClass(darkModeClass);
  await userEvent.click(menuButton);
  expect(html).toHaveClass(darkModeClass);
  await userEvent.click(menuButton);
  expect(html).not.toHaveClass(darkModeClass);
});
