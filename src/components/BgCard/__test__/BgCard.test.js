import { screen, render } from "@testing-library/react";

import BgCard from "../BgCard";

describe("BgCard", () => {
  it("should apply style background-color with props bgColor value", () => {
    render(<BgCard bgColor={"#d3d3d3"} />);
    const bgColorDiv = screen.getByTestId("bg-card");
    expect(bgColorDiv).toHaveStyle("background-color: #d3d3d3");
  });
});
