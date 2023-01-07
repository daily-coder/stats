import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import DataProvider from "../../context/DataContext";

import SearchBar from "./Searchbar";

function MockSearchBar() {
  return (
    <DataProvider>
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    </DataProvider>
  );
}

describe("SearchBar", () => {
  it("should render search input element", () => {
    render(<MockSearchBar />);
    const inputSearchElt = screen.getByPlaceholderText("type URL");
    expect(inputSearchElt).toBeInTheDocument();
  });

  it("should render search button", () => {
    render(<MockSearchBar />);
    const searchBtn = screen.getByLabelText("search button");
    expect(searchBtn).toBeInTheDocument();
  });
});
