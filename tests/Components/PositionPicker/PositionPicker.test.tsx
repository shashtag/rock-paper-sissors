import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PositionPicker from "../../../src/Components/PositionPicker/PositionPicker";
import { POSITIONS } from "../../../src/Global/Constants";

describe("PositionPicker Component", () => {
  test("renders the heading", () => {
    render(<PositionPicker />);
    const headingElement = screen.getByText(/pick your position/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders all positions", () => {
    render(<PositionPicker />);
    const positionElements = screen.getAllByTestId("position-item");
    console.log(positionElements);
    expect(positionElements).toHaveLength(POSITIONS.length);
  });

  test("renders position with correct props", () => {
    render(<PositionPicker />);
    screen.debug();
    POSITIONS.forEach((item) => {
      const positionElement = screen.getByText(item.position);
      expect(positionElement).toBeInTheDocument();
      expect(positionElement.parentElement?.parentElement).toHaveStyle(
        `background-color: ${item.bg}`,
      );
      expect(positionElement.parentElement?.parentElement).toHaveStyle(
        `border: ${item.border}`,
      );
      expect(positionElement).toHaveStyle(`color: ${item.color}`);
    });
  });
});
