import { MIN_BET } from "./Constants";
import { PositionsType } from "./Types";

export const calculateProbableWinOnBets = (
  positions: { [key in PositionsType]?: number | undefined },
  bets: number,
) =>
  Object.keys(positions).length == 1
    ? bets * 14
    : Object.values(positions).reduce(
        (acc, curr) => (acc > curr ? acc : curr),
        0,
      ) *
      MIN_BET *
      3;
