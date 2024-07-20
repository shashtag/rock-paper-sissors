import { render, screen } from "@testing-library/react";
import { AppProvider } from "../../src/Global/AppContext";
import Results from "../../src/Components/Results";

describe("Results", () => {
  it("should not render", () => {
    render(
      <AppProvider>
        <Results />
      </AppProvider>,
    );

    screen.debug();
    const you = screen.queryByText(/You/i);

    expect(you).not.toBeInTheDocument();
  });
});
