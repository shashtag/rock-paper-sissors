import { MIN_BET, POSITIONS, winRatio } from "./Constants";
import { PositionsType } from "./Types";

export const calculateProbableWinOnBets = (
  positions: { [key in PositionsType]?: number | undefined },
  bets: number,
) =>
  Object.keys(positions).length == 1
    ? bets * winRatio.one
    : Object.values(positions).reduce(
        (acc, curr) => (acc > curr ? acc : curr),
        0,
      ) *
      MIN_BET *
      winRatio.two;

export const getWinLossDraw = (userChoice: number, computerChoice: number) => {
  if (userChoice === computerChoice) {
    return "draw";
  } else if (
    userChoice > computerChoice ||
    (userChoice === 1 && computerChoice === POSITIONS.length)
  ) {
    return "win";
  } else {
    return "loss";
  }
};
