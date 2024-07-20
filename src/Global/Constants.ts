import { PositionsType } from "./Types";

export const INIT_BALANCE = 5000;
export const MIN_BET = 500;
export const MAX_POSITIONS = 2;
export const POSITIONS = [
  {
    position: "rock" as PositionsType,
    bg: "#211F4F",
    color: "#267DE5",
    border: "#2E4D97",
  },
  {
    position: "paper" as PositionsType,
    bg: "#1A381D",
    color: "#16C359",
    border: "#187E3A",
  },
  {
    position: "scissors" as PositionsType,
    bg: "#50091E",
    color: "#E31542",
    border: "#9A0E30",
  },
];

export enum ranks {
  rock = 1,
  paper = 2,
  scissors = 3,
}

export const enum winRatio {
  one = 14,
  two = 3,
}
