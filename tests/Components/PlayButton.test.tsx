// PlayButton.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { toast } from "react-toastify";
import { AppContext } from "../../src/Global/AppContext";
import PlayButton from "../../src/Components/PlayButton";
import { PositionsType } from "../../src/Global/Types";

vi.mock("react-toastify", () => ({
  toast: vi.fn(),
}));

describe("PlayButton Component", () => {
  it("renders the Play button when computerChoice is not set", () => {
    const state = {
      positions: {},
      winLossAmount: 0,
      win: 0,
      bet: 0,
      balance: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: vi.fn() }}>
        <PlayButton />
      </AppContext.Provider>,
    );
    expect(screen.getByText("Play")).toBeInTheDocument();
  });

  it("renders the Continue button when computerChoice is set", () => {
    const state = {
      positions: {},
      computerChoice: "rock" as PositionsType,
      win: 0,
      bet: 0,
      balance: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: vi.fn() }}>
        <PlayButton />
      </AppContext.Provider>,
    );
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });

  it("shows a toast message if no positions are selected", () => {
    const state = { positions: {}, win: 0, bet: 0, balance: 0 };
    render(
      <AppContext.Provider value={{ state, dispatch: vi.fn() }}>
        <PlayButton />
      </AppContext.Provider>,
    );
    fireEvent.click(screen.getByText("Play"));
    expect(toast).toHaveBeenCalledWith("You must bet on at least 1 position", {
      theme: "dark",
      type: "error",
    });
  });

  it("dispatches SET_COMPUTER_CHOICE if computerChoice is not set", () => {
    const state = {
      positions: { rock: 4 },
      win: 0,
      bet: 0,
      balance: 0,
    };
    const dispatch = vi.fn();
    render(
      <AppContext.Provider value={{ state, dispatch }}>
        <PlayButton />
      </AppContext.Provider>,
    );
    fireEvent.click(screen.getByText("Play"));
    expect(dispatch).toHaveBeenCalledWith({
      type: "SET_COMPUTER_CHOICE",
      payload: null,
    });
  });

  it("dispatches CALCULATE_RESULTS if computerChoice is set and outcome is false", () => {
    const state = {
      positions: { rock: 3 },
      computerChoice: "rock" as PositionsType,
      win: 0,
      bet: 0,
      balance: 0,
    };
    const dispatch = vi.fn();
    render(
      <AppContext.Provider value={{ state, dispatch }}>
        <PlayButton />
      </AppContext.Provider>,
    );
    fireEvent.click(screen.getByText("Continue"));
    expect(dispatch).toHaveBeenCalledWith({
      type: "CALCULATE_RESULTS",
      payload: null,
    });
  });

  it("dispatches RESET_GAME if outcome is true", () => {
    const state = {
      positions: { rock: 3 },
      computerChoice: "rock" as PositionsType,
      outcome: "win" as "win" | "loss" | "draw" | undefined,
      win: 0,
      bet: 0,
      balance: 0,
    };
    const dispatch = vi.fn();
    render(
      <AppContext.Provider value={{ state, dispatch }}>
        <PlayButton />
      </AppContext.Provider>,
    );
    fireEvent.click(screen.getByText("Continue"));
    expect(dispatch).toHaveBeenCalledWith({
      type: "RESET_GAME",
      payload: null,
    });
  });
});
