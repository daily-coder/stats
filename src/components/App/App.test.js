import "./matchMedia.js";

import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  // warning: to avoid leaking history into other tests reset it after each test.
  afterEach(() => {
    window.history.pushState(null, document.title, "/");
  });

  function moveToOverviewPage() {
    const startBtn = screen.getByRole("link", { name: "Get Started" });
    fireEvent.click(startBtn);
  }

  describe("Stats", () => {
    // on clicking get started, app will render default stats data.
    it("should render default stats data after click get started button", async () => {
      render(<App />);
      moveToOverviewPage();

      const fileSizeHeading = await screen.findByRole("heading", {
        name: "File Size",
      });
      expect(fileSizeHeading).toBeInTheDocument();
    });

    it("should render default stats data after clicking get started button", async () => {
      render(<App />);
      moveToOverviewPage();

      const searchBtn = screen.getByLabelText("search button");
      fireEvent.click(searchBtn);

      const fileSizeHeading = await screen.findByRole("heading", {
        name: "File Size",
      });
      expect(fileSizeHeading).toBeInTheDocument();
    });

    it("should render loading animation after pressing enter key", async () => {
      render(<App />);
      moveToOverviewPage();

      /**
       * when user first visits overview page after clicking get started button,
       * loadingdiv is already present because app loads default stats.
       * we need to check after stats cards are rendered.
       *
       * startBtn -> loadingDiv(defaultStats) -> no loadingDiv(await stats card) -> check
       */

      await screen.findByRole("heading", { name: "File Size" });

      const inputSearchElt = screen.getByPlaceholderText("type URL");
      fireEvent.keyDown(inputSearchElt, {
        key: "Enter",
        keyCode: 13,
      });

      const loadingDiv = screen.getByTestId("loading-circle");
      expect(loadingDiv).toBeInTheDocument();
    });

    it("should render loading animation after clicking search button", async () => {
      render(<App />);
      moveToOverviewPage();

      // wait until stat cards are rendered
      await screen.findByRole("heading", { name: "File Size" });

      const inputSearchElt = screen.getByPlaceholderText("type URL");
      const searchBtn = screen.getByLabelText("search button");
      fireEvent.change(inputSearchElt, { target: { value: "github.com" } });
      fireEvent.click(searchBtn);

      const loadingDiv = screen.getByTestId("loading-circle");
      expect(loadingDiv).toBeInTheDocument();
    });

    it("should NOT render loading animation if search value is empty", async () => {
      render(<App />);
      moveToOverviewPage();

      await screen.findByRole("heading", { name: "File Size" });

      const inputSearchElt = screen.getByPlaceholderText("type URL");
      const searchBtn = screen.getByLabelText("search button");
      fireEvent.change(inputSearchElt, { target: { value: "" } });
      fireEvent.click(searchBtn);

      const errorMessage = screen.getByRole("heading", {
        name: "There was an Error.",
      });
      expect(errorMessage).toBeInTheDocument();
    });

    it("should render error message if search value is invalid url", async () => {
      render(<App />);
      moveToOverviewPage();

      await screen.findByRole("heading", { name: "File Size" });

      const inputSearchElt = screen.getByPlaceholderText("type URL");
      const searchBtn = screen.getByLabelText("search button");
      fireEvent.change(inputSearchElt, { target: { value: "abcdefgh" } }); // invalid url
      fireEvent.click(searchBtn);

      const errorMessage = await screen.findByRole("heading", {
        name: "There was an Error.",
      });
      expect(errorMessage).toBeInTheDocument();
    });

    it("should render new stats data after clicking start button", async () => {
      render(<App />);
      moveToOverviewPage();

      await screen.findByRole("heading", { name: "File Size" });

      const inputSearchElt = screen.getByPlaceholderText("type URL");
      const searchBtn = screen.getByLabelText("search button");
      fireEvent.change(inputSearchElt, {
        target: { value: "mockwebsite.com" },
      });
      fireEvent.click(searchBtn);

      // default website file size => 36kb, new website file size => 3kb
      const fileSizeDescription = await screen.findByText("3KB");
      expect(fileSizeDescription).toBeInTheDocument();
    });
  });

  describe("Menu", () => {
    it("should toggle sidebar on clicking menu button", () => {
      render(<App />);
      moveToOverviewPage();

      const menuBtn = screen.getByLabelText("menu button");
      const sideBar = screen.getByTestId("side-bar");
      const isWidthZero = sideBar.classList.contains("w-0");

      // test for both opening and closing menu
      fireEvent.click(menuBtn);
      expect(isWidthZero === sideBar.classList.contains("w-0")).toBe(false);

      fireEvent.click(menuBtn);
      expect(isWidthZero === sideBar.classList.contains("w-0")).toBe(true);
    });
  });

  describe("Dark Mode", () => {
    it("should toggle dark mode on clicking toggle theme button", () => {
      render(<App />);
      moveToOverviewPage();

      const toggleThemeBtn = screen.getByLabelText("toggle theme button");
      const hasClassDark = document.documentElement.classList.contains("dark");

      fireEvent.click(toggleThemeBtn);
      expect(
        hasClassDark === document.documentElement.classList.contains("dark")
      ).toBe(false);

      fireEvent.click(toggleThemeBtn);
      expect(
        hasClassDark === document.documentElement.classList.contains("dark")
      ).toBe(true);
    });
  });
});
