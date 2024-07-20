import { MIN_BET, ranks, winRatio } from "../Constants";
import { PositionsType } from "../Types";
import { getWinLossDraw } from "./getWinLossDraw";

export const calculateResults = (
  positions: { [key in PositionsType]?: number | undefined },
  computerChoice: PositionsType,
  bet: number,
) => {
  const resultsArray: {
    win: PositionsType[];
    loss: PositionsType[];
    draw: PositionsType[];
  } = {
    win: [],
    loss: [],
    draw: [],
  };

  for (const i in positions) {
    const userChoice = ranks[i as PositionsType];
    const winLossDraw = getWinLossDraw(userChoice, ranks[computerChoice!]);
    resultsArray[winLossDraw].push(i as PositionsType);
  }

  let result: {
    outcome: "win" | "loss" | "draw";
    winPosition: PositionsType;
    winLossAmount: number;
  };

  if (resultsArray.win.length > 0) {
    result = {
      outcome: "win",
      winPosition: resultsArray.win[0],
      winLossAmount:
        positions[resultsArray.win[0]]! *
        MIN_BET *
        winRatio[Object.keys(positions).length - 1],
    };
  } else if (resultsArray.loss.length > 0) {
    result = {
      outcome: "loss",
      winPosition: computerChoice!,
      winLossAmount: bet,
    };
  } else {
    result = {
      outcome: "draw",
      winPosition: resultsArray.draw[0],
      winLossAmount: positions[resultsArray.draw[0]]! * MIN_BET,
    };
  }
  return result;
};
