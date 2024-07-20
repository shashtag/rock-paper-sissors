import { render, screen } from "@testing-library/react";
import Header from "../../src/Components/Header";
import { AppProvider } from "../../src/Global/AppContext";

describe("Header", () => {
  it("should render", () => {
    render(
      <AppProvider>
        <Header />
      </AppProvider>,
    );

    const balance = screen.getByText(/Balance :/i);
    const bet = screen.getByText(/Bet :/i);
    const win = screen.getByText(/Win :/i);

    expect(balance).toBeInTheDocument();
    expect(bet).toBeInTheDocument();
    expect(win).toBeInTheDocument();
  });
});
