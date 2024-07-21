import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AppContext, AppProvider } from "../../src/Global/AppContext";

describe("AppProvider", () => {
  it("should provide initial state", () => {
    render(
      <AppProvider>
        <AppContext.Consumer>
          {({ state }) => (
            <div>
              <span>Balance: {state.balance}</span>
              <span>Bet: {state.bet}</span>
              <span>Win: {state.win}</span>
            </div>
          )}
        </AppContext.Consumer>
      </AppProvider>,
    );

    expect(screen.getByText(/Balance: 5000/)).toBeInTheDocument();
    expect(screen.getByText(/Bet: 0/)).toBeInTheDocument();
    expect(screen.getByText(/Win: 0/)).toBeInTheDocument();
  });

  it("should handle BET action", () => {
    render(
      <AppProvider>
        <AppContext.Consumer>
          {({ state, dispatch }) => (
            <div>
              <button
                onClick={() => dispatch({ type: "BET", payload: "rock" })}>
                Bet on Rock
              </button>
              <span>Balance: {state.balance}</span>
              <span>Bet: {state.bet}</span>
              <span>Win: {state.win}</span>
            </div>
          )}
        </AppContext.Consumer>
      </AppProvider>,
    );

    fireEvent.click(screen.getByText("Bet on Rock"));

    expect(screen.getByText(/Balance: 4500/)).toBeInTheDocument();
    expect(screen.getByText(/Bet: 500/)).toBeInTheDocument();
    expect(screen.getByText(/Win: 7000/)).toBeInTheDocument(); // 1 * 500 * 14
  });

  it("should handle REMOVE_BET action", () => {
    render(
      <AppProvider>
        <AppContext.Consumer>
          {({ state, dispatch }) => (
            <div>
              <button
                onClick={() => dispatch({ type: "BET", payload: "rock" })}>
                Bet on Rock
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_BET", payload: "rock" })
                }>
                Remove Bet on Rock
              </button>
              <span>Balance: {state.balance}</span>
              <span>Bet: {state.bet}</span>
              <span>Win: {state.win}</span>
            </div>
          )}
        </AppContext.Consumer>
      </AppProvider>,
    );

    fireEvent.click(screen.getByText("Bet on Rock"));
    fireEvent.click(screen.getByText("Remove Bet on Rock"));

    expect(screen.getByText(/Balance: 5000/)).toBeInTheDocument();
    expect(screen.getByText(/Bet: 0/)).toBeInTheDocument();
    expect(screen.getByText(/Win: 0/)).toBeInTheDocument();
  });

  it("should handle SET_COMPUTER_CHOICE action", () => {
    render(
      <AppProvider>
        <AppContext.Consumer>
          {({ state, dispatch }) => (
            <div>
              <button
                onClick={() =>
                  dispatch({ type: "SET_COMPUTER_CHOICE", payload: null })
                }>
                Set Computer Choice
              </button>
              <span>Computer Choice: {state.computerChoice}</span>
            </div>
          )}
        </AppContext.Consumer>
      </AppProvider>,
    );

    fireEvent.click(screen.getByText("Set Computer Choice"));

    expect(screen.getByText(/Computer Choice:/)).not.toBeEmptyDOMElement();
  });

  it("should handle CALCULATE_RESULTS action", () => {
    render(
      <AppProvider>
        <AppContext.Consumer>
          {({ state, dispatch }) => (
            <div>
              <button
                onClick={() => dispatch({ type: "BET", payload: "rock" })}>
                Bet on Rock
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "SET_COMPUTER_CHOICE", payload: null })
                }>
                Set Computer Choice
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "CALCULATE_RESULTS", payload: null })
                }>
                Calculate Results
              </button>
              <span>Outcome: {state.outcome}</span>
              <span>Win Position: {state.winPosition}</span>
              <span>Win/Loss Amount: {state.winLossAmount}</span>
            </div>
          )}
        </AppContext.Consumer>
      </AppProvider>,
    );

    fireEvent.click(screen.getByText("Bet on Rock"));
    fireEvent.click(screen.getByText("Set Computer Choice"));
    fireEvent.click(screen.getByText("Calculate Results"));

    expect(screen.getByText(/Outcome:/)).not.toBeEmptyDOMElement();
    expect(screen.getByText(/Win Position:/)).not.toBeEmptyDOMElement();
    expect(screen.getByText(/Win\/Loss Amount:/)).not.toBeEmptyDOMElement();
  });

  it("should handle RESET_GAME action", () => {
    render(
      <AppProvider>
        <AppContext.Consumer>
          {({ state, dispatch }) => (
            <div>
              <button
                onClick={() => dispatch({ type: "RESET_GAME", payload: null })}>
                Reset Game
              </button>
              <span>Balance: {state.balance}</span>
              <span>Bet: {state.bet}</span>
              <span>Win: {state.win}</span>
            </div>
          )}
        </AppContext.Consumer>
      </AppProvider>,
    );

    screen.debug();

    fireEvent.click(screen.getByText("Reset Game"));

    expect(screen.getByText(/Balance: 5000/)).toBeInTheDocument();
    expect(screen.getByText(/Bet: 0/)).toBeInTheDocument();
    expect(screen.getByText(/Win: 0/)).toBeInTheDocument();
  });
});
