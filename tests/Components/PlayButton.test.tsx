import { render, screen } from "@testing-library/react";
import { AppProvider } from "../../src/Global/AppContext";
import PlayButton from "../../src/Components/PlayButton";

describe("Play Button", () => {
  it("should render", () => {
    render(
      <AppProvider>
        <PlayButton />
      </AppProvider>,
    );

    const playButton = screen.queryByRole("button");
    const play = screen.queryByText(/Play/i);

    expect(playButton).toBeInTheDocument();
    expect(play).toBeInTheDocument();
  });
});
