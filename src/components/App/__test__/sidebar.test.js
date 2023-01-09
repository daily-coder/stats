import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

import render from "./utils/render";

test("toggle side bar on clicking menu button", async () => {
  render(<App />, { route: "#/category/overview" });

  const menuButton = screen.getByRole("button", { name: /menu button/i });
  const sideBar = screen.getByRole("navigation");
  const widthZeroClass = "w-0";

  // by default sidebar is open(i.e width is not zero)
  expect(sideBar).not.toHaveClass(widthZeroClass);
  await userEvent.click(menuButton);
  expect(sideBar).toHaveClass(widthZeroClass);
  await userEvent.click(menuButton);
  expect(sideBar).not.toHaveClass(widthZeroClass);
});
