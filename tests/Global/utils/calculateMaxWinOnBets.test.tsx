import { calculateMaxWinOnBets } from "../../../src/Global/utils/calculateMaxWinOnBets";

describe("calculateMaxWinOnBets", () => {
  it("should return 0 if no positions are provided", () => {
    const result = calculateMaxWinOnBets({});
    expect(result).toBe(0);
  });

  it("should calculate the max win for a single position", () => {
    const result = calculateMaxWinOnBets({ rock: 2 });
    expect(result).toBe(14000); // 2 * 500 * 14
  });

  it("should calculate the max win for multiple positions", () => {
    const result = calculateMaxWinOnBets({ rock: 2, paper: 3 });
    console.log(result);
    expect(result).toBe(4500); // 3 * 500 * 3
  });
});
