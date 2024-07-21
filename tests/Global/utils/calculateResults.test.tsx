import { calculateResults } from "../../../src/Global/utils/calculateResults";

describe("calculateResults", () => {
  it("should return a win outcome", () => {
    const result = calculateResults({ rock: 2 }, "scissors", 500);
    expect(result).toEqual({
      outcome: "win",
      winPosition: "rock",
      winLossAmount: 14000, // 2 * 500 * 14
    });
  });

  it("should return a loss outcome", () => {
    const result = calculateResults({ rock: 2 }, "paper", 500);
    expect(result).toEqual({
      outcome: "loss",
      winPosition: "paper",
      winLossAmount: 500,
    });
  });

  it("should return a draw outcome", () => {
    const result = calculateResults({ rock: 2 }, "rock", 500);
    expect(result).toEqual({
      outcome: "draw",
      winPosition: "rock",
      winLossAmount: 1000, // 2 * 500
    });
  });

  it("should handle multiple positions with a win outcome", () => {
    const result = calculateResults({ rock: 2, paper: 3 }, "scissors", 500);
    expect(result).toEqual({
      outcome: "win",
      winPosition: "rock",
      winLossAmount: 3000, // 2 * 500 * 3
    });
  });
});
