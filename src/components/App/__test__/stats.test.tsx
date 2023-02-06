import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

import render from "./utils/render";

test("navigate to overview page on clicking get started button", async () => {
  render(<App />);

  await userEvent.click(screen.getByRole("link", { name: /get started/i }));
  await waitForElementToBeRemoved(screen.getByLabelText(/loading/i));

  expect(
    screen.getByRole("heading", { name: /file size/i })
  ).toBeInTheDocument();
});

test("render new stats data on clicking search button", async () => {
  render(<App />, { route: "#/category/overview" });

  const searchBar = screen.getByRole("searchbox");

  await userEvent.clear(searchBar);
  await userEvent.type(searchBar, "github.com");
  await userEvent.click(screen.getByRole("button", { name: /search button/i }));
  await waitForElementToBeRemoved(screen.getByLabelText(/loading/i));

  expect(
    screen.getByRole("heading", { name: /file size/i })
  ).toBeInTheDocument();
});

test("display error message if url is empty", async () => {
  render(<App />, { route: "#/category/overview" });

  await userEvent.clear(screen.getByRole("searchbox"));
  await userEvent.click(screen.getByRole("button", { name: /search button/i }));

  // loading animation is not triggered if search value is empty and search button
  // is clicked. Instead error message is immediately displayed.

  // error message is big as it also provides some suggestions for user
  // check snapshot to know more about message.

  expect(screen.getByRole("alert")).toMatchSnapshot();
});

test("display error message if url is invalid", async () => {
  render(<App />, { route: "#/category/overview" });

  const searchBar = screen.getByRole("searchbox");

  await userEvent.clear(searchBar);
  await userEvent.type(searchBar, "abcdefgh");
  await userEvent.click(screen.getByRole("button", { name: /search button/i }));
  await waitForElementToBeRemoved(screen.getByLabelText(/loading/i));

  expect(screen.getByRole("alert")).toMatchSnapshot();
});

test("render new stats on pressing enter key", async () => {
  render(<App />, { route: "#/category/overview" });

  const searchBar = screen.getByRole("searchbox");

  await userEvent.clear(searchBar);
  await userEvent.type(searchBar, "github.com");
  await userEvent.keyboard("{Enter}");
  await waitForElementToBeRemoved(screen.getByLabelText(/loading/i));

  expect(
    screen.getByRole("heading", { name: /file size/i })
  ).toBeInTheDocument();
});
