import { render, screen } from "@testing-library/react";
import Header from "../../src/Components/Header";
import { AppContext } from "../../src/Global/AppContext";

describe("Header", () => {
  beforeEach(() => {
    const state = { balance: 100, bet: 50, win: 200, positions: {} };
    render(
      <AppContext.Provider value={{ state, dispatch: () => {} }}>
        <Header />
      </AppContext.Provider>,
    );
  });
  it("renders the balance correctly", () => {
    expect(screen.getByText(/Balance :/)).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });

  it("renders the bet correctly", () => {
    expect(screen.getByText(/Bet :/)).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
  });

  it("renders the win correctly", () => {
    expect(screen.getByText(/Win :/)).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();
  });
});
