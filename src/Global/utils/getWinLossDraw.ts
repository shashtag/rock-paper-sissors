import { POSITIONS } from "../Constants";

export const getWinLossDraw = (userChoice: number, computerChoice: number) => {
  if (userChoice === computerChoice) {
    return "draw";
  } else if (
    (userChoice === 1 && computerChoice === POSITIONS.length) ||
    userChoice === computerChoice + 1
  ) {
    return "win";
  } else {
    return "loss";
  }
};
