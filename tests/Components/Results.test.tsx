// Results.test.js
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AppContext } from "../../src/Global/AppContext";
import Results from "../../src/Components/Results";
import { PositionsType } from "../../src/Global/Types";

describe("Results Component", () => {
  it("renders the win outcome correctly", () => {
    const state = {
      positions: {},
      outcome: "win" as "win" | "loss" | "draw" | undefined,
      winPosition: "rock" as PositionsType,
      winLossAmount: 100,
      win: 0,
      bet: 0,
      balance: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: () => {} }}>
        <Results />
      </AppContext.Provider>,
    );
    expect(screen.getByText("rock Won")).toBeInTheDocument();
    expect(screen.getByText("You win :")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });

  it("renders the draw outcome correctly", () => {
    const state = {
      positions: {},
      outcome: "draw" as "win" | "loss" | "draw" | undefined,
      winLossAmount: 0,
      win: 0,
      bet: 0,
      balance: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: () => {} }}>
        <Results />
      </AppContext.Provider>,
    );
    expect(screen.getByText("Draw")).toBeInTheDocument();
    expect(screen.getByText("You win :")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("renders the loss outcome correctly", () => {
    const state = {
      positions: {},
      outcome: "loss" as "win" | "loss" | "draw" | undefined,
      winPosition: "rock" as PositionsType,
      winLossAmount: 50,
      win: 0,
      bet: 0,
      balance: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: () => {} }}>
        <Results />
      </AppContext.Provider>,
    );
    expect(screen.getByText("rock Won")).toBeInTheDocument();
    expect(screen.getByText("You lose :")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
  });

  it("does not render anything when outcome is false", () => {
    const state = {
      positions: {},
      winLossAmount: 0,
      win: 0,
      bet: 0,
      balance: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: () => {} }}>
        <Results />
      </AppContext.Provider>,
    );
    expect(screen.queryByText("You win :")).not.toBeInTheDocument();
    expect(screen.queryByText("You lose :")).not.toBeInTheDocument();
  });
});
