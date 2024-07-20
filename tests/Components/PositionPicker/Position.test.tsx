import { render, screen } from "@testing-library/react";
import { AppProvider } from "../../../src/Global/AppContext";
import Position from "../../../src/Components/PositionPicker/Position";

describe("Position", () => {
  it("should render", () => {
    render(
      <AppProvider>
        <Position
          position='rock'
          color='red'
          bg='green'
          border='blue'
          key={2}
        />
      </AppProvider>,
    );

    const position = screen.getByText(/rock/i);

    expect(position).toBeInTheDocument();
  });
});
