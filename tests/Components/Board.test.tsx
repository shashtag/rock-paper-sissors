import { render, screen } from "@testing-library/react";
import { AppProvider } from "../../src/Global/AppContext";
import Board from "../../src/Components/Board";

describe("Board", () => {
  it("should render", () => {
    render(
      <AppProvider>
        <Board />
      </AppProvider>,
    );

    screen.debug();

    const board = document.querySelector("#board");
    const computerChoiceHeading = screen.getByText(/COMPUTER CHOSE/i);
    const playerChoiceHeading = screen.getByText(/PLAYER CHOSE/i);

    expect(board).toBeInTheDocument();
    expect(computerChoiceHeading).toBeInTheDocument();
    expect(playerChoiceHeading).toBeInTheDocument();
  });
});
