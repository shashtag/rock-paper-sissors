import { render, screen } from "@testing-library/react";
import { AppProvider } from "../../../src/Global/AppContext";
import PositionPicker from "../../../src/Components/PositionPicker/PositionPicker";

describe("PositionPicker", () => {
  it("should render", () => {
    render(
      <AppProvider>
        <PositionPicker />
      </AppProvider>,
    );

    const heading = screen.getByText(/pick your position/i);

    expect(heading).toBeInTheDocument();
  });
});
