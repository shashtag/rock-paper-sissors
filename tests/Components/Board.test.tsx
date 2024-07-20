import { render, screen } from "@testing-library/react";
import { AppContext } from "../../src/Global/AppContext";
import Board from "../../src/Components/Board";
import { PositionsType } from "../../src/Global/Types";

describe("Board", () => {
  it("renders the computer choice correctly", () => {
    const state = {
      computerChoice: "rock" as PositionsType,
      positions: {},
      winLossAmount: 0,
      win: 0,
      bet: 0,
      balance: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: () => {} }}>
        <Board />
      </AppContext.Provider>,
    );
    expect(screen.getByText(/Computer Chose/)).toBeInTheDocument();
    expect(screen.getByText("rock")).toBeInTheDocument();
  });

  it("renders the player choices correctly", () => {
    const state = {
      computerChoice: undefined,
      positions: { rock: 1, paper: 2 },
      win: 0,
      bet: 0,
      balance: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: () => {} }}>
        <Board />
      </AppContext.Provider>,
    );
    expect(screen.getByText(/Player Chose/)).toBeInTheDocument();
    expect(screen.getByText("rock")).toBeInTheDocument();
    expect(screen.getByText("paper")).toBeInTheDocument();
  });

  it("does not render the board when outcome is true", () => {
    const state = {
      outcome: "win" as "win" | "loss" | "draw" | undefined,
      computerChoice: "rock" as PositionsType,
      positions: { rock: 1 },
      win: 0,
      bet: 0,
      balance: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: () => {} }}>
        <Board />
      </AppContext.Provider>,
    );
    expect(screen.queryByText(/Computer Chose/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Player Chose/)).not.toBeInTheDocument();
  });

  it("renders VS text correctly", () => {
    const state = {
      computerChoice: "rock" as PositionsType,
      positions: { rock: 8 },
      win: 0,
      bet: 0,
      balance: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: () => {} }}>
        <Board />
      </AppContext.Provider>,
    );
    expect(screen.getByText("VS")).toBeInTheDocument();
  });
});
