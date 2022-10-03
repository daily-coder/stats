import { screen, render } from "@testing-library/react";
import ColorCard from "./ColorCard";

describe("ColorCard", () => {
  it("should apply style color with props color value", () => {
    render(<ColorCard color={"#d3d3d3"} />);
    const sampleTextHeading = screen.getByRole("heading", { name: "Aa" });
    expect(sampleTextHeading).toHaveStyle("color: #d3d3d3");
  });
});
