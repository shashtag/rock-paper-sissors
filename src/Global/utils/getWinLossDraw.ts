import { POSITIONS } from "../Constants";

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
