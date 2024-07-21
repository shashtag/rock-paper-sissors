import { describe, it, expect } from "vitest";
import { getWinLossDraw } from "../../../src/Global/utils/getWinLossDraw";

describe("getWinLossDraw", () => {
  it('should return "draw" if userChoice and computerChoice are the same', () => {
    const result = getWinLossDraw(1, 1);
    expect(result).toBe("draw");
  });

  it('should return "win" if userChoice is rock and computerChoice is scissors', () => {
    const result = getWinLossDraw(1, 3);
    expect(result).toBe("win");
  });

  it('should return "win" if userChoice is paper and computerChoice is rock', () => {
    const result = getWinLossDraw(2, 1);
    expect(result).toBe("win");
  });

  it('should return "win" if userChoice is scissors and computerChoice is paper', () => {
    const result = getWinLossDraw(3, 2);
    expect(result).toBe("win");
  });

  it('should return "loss" if userChoice is rock and computerChoice is paper', () => {
    const result = getWinLossDraw(1, 2);
    expect(result).toBe("loss");
  });

  it('should return "loss" if userChoice is paper and computerChoice is scissors', () => {
    const result = getWinLossDraw(2, 3);
    expect(result).toBe("loss");
  });

  it('should return "loss" if userChoice is scissors and computerChoice is rock', () => {
    const result = getWinLossDraw(3, 1);
    expect(result).toBe("loss");
  });
});
