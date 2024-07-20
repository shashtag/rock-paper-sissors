import { MIN_BET, winRatio } from "../Constants";
import { PositionsType } from "../Types";

export const calculateMaxWinOnBets = (positions: {
  [key in PositionsType]?: number | undefined;
}) =>
  Object.values(positions).reduce((acc, curr) => (acc > curr ? acc : curr), 0) *
    MIN_BET *
    winRatio[Object.keys(positions).length - 1] || 0;
