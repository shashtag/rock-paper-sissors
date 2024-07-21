// Position.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { toast } from "react-toastify";
import { AppContext } from "../../../src/Global/AppContext";
import Position from "../../../src/Components/PositionPicker/Position";

vi.mock("react-toastify", () => ({
  toast: vi.fn(),
}));

describe("Position Component", () => {
  it("renders the position correctly", () => {
    const state = {
      positions: {},
      balance: 100,
      win: 0,
      bet: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: vi.fn() }}>
        <Position position='rock' color='white' bg='black' border='blue' />
      </AppContext.Provider>,
    );
    expect(screen.getByText("rock")).toBeInTheDocument();
  });

  it("shows a toast message if more than 2 positions are selected", () => {
    const state = {
      positions: { rock: 1, paper: 1 },
      balance: 100,
      win: 0,
      bet: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: vi.fn() }}>
        <Position position='scissors' color='white' bg='black' border='blue' />
      </AppContext.Provider>,
    );
    fireEvent.click(screen.getByText("scissors"));
    expect(toast).toHaveBeenCalledWith(
      "You can only bet on 2 positions at a time",
      {
        theme: "dark",
        type: "error",
      },
    );
  });

  it("shows a toast message if balance is insufficient", () => {
    const state = {
      positions: {},
      balance: 0,
      win: 0,
      bet: 0,
    };
    render(
      <AppContext.Provider value={{ state, dispatch: vi.fn() }}>
        <Position position='rock' color='white' bg='black' border='blue' />
      </AppContext.Provider>,
    );
    fireEvent.click(screen.getByText("rock"));
    expect(toast).toHaveBeenCalledWith("Insufficient balance", {
      theme: "dark",
      type: "error",
    });
  });

  it("dispatches BET action when a position is selected", () => {
    const state = {
      positions: {},
      balance: 1000,
      win: 0,
      bet: 0,
    };
    const dispatch = vi.fn();
    render(
      <AppContext.Provider value={{ state, dispatch }}>
        <Position position='rock' color='white' bg='black' border='blue' />
      </AppContext.Provider>,
    );

    fireEvent.click(screen.getByText("rock"));
    expect(dispatch).toHaveBeenCalledWith({ type: "BET", payload: "rock" });
  });

  it("dispatches REMOVE_BET action when a bet is removed", () => {
    const state = {
      positions: { rock: 1 },
      balance: 100,
      win: 0,
      bet: 0,
    };
    const dispatch = vi.fn();
    render(
      <AppContext.Provider value={{ state, dispatch }}>
        <Position position='rock' color='white' bg='black' border='blue' />
      </AppContext.Provider>,
    );
    fireEvent.click(screen.getByText("500"));
    expect(dispatch).toHaveBeenCalledWith({
      type: "REMOVE_BET",
      payload: "rock",
    });
  });
});
