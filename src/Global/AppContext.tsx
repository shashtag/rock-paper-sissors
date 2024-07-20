/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, useReducer } from "react";
import { INIT_BALANCE, MIN_BET, POSITIONS, ranks, winRatio } from "./Constants";
import { PositionsType } from "./Types";
import { calculateProbableWinOnBets, getWinLossDraw } from "./Utils";

type StateType = {
  balance: number;
  positions: { [key in PositionsType]?: number | undefined };
  bet: number;
  win: number;
  computerChoice: PositionsType | null;
  outcome: "win" | "loss" | "draw" | undefined;
  winPosition: PositionsType | undefined;
  winLossAmount: number | undefined;
};

type payloadType = boolean | PositionsType | null;

const initialState: StateType = {
  balance: INIT_BALANCE,
  positions: {},
  bet: 0,
  win: 0,
  computerChoice: null,
  outcome: undefined,
  winPosition: undefined,
  winLossAmount: undefined,
};

export const AppContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<{ type: string; payload: payloadType }>;
}>({ state: initialState, dispatch: () => null });

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const reducer = (
    state: StateType,
    action: { type: string; payload: payloadType },
  ) => {
    switch (action.type) {
      case "SET_LOADING":
        return { ...state, loading: action.payload as boolean };
      case "BET": {
        const positions = { ...state.positions };
        if (positions[action.payload as PositionsType] === undefined) {
          positions[action.payload as PositionsType] = 1;
        } else {
          positions[action.payload as PositionsType]! += 1;
        }

        return {
          ...state,
          positions,
          balance: state.balance - MIN_BET,
          bet: state.bet + MIN_BET,
          win: calculateProbableWinOnBets(positions),
        };
      }
      case "REMOVE_BET": {
        const positions = { ...state.positions };

        positions[action.payload as PositionsType]! -= 1;
        if (positions[action.payload as PositionsType] === 0) {
          delete positions[action.payload as PositionsType];
        }
        return {
          ...state,
          positions,
          balance: state.balance + MIN_BET,
          bet: state.bet - MIN_BET,
          win: calculateProbableWinOnBets(positions),
        };
      }
      case "SET_COMPUTER_CHOICE": {
        return {
          ...state,
          computerChoice:
            POSITIONS[Math.floor(Math.random() * POSITIONS.length + 1) - 1]
              .position,
        };
      }
      case "CALCULATE_RESULTS": {
        const resultsArray: {
          win: PositionsType[];
          loss: PositionsType[];
          draw: PositionsType[];
        } = {
          win: [],
          loss: [],
          draw: [],
        };

        for (const i in state.positions) {
          const userChoice = ranks[i as PositionsType];
          const winLossDraw = getWinLossDraw(
            userChoice,
            ranks[state.computerChoice!],
          );
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
              state.positions[resultsArray.win[0]]! *
              MIN_BET *
              winRatio[Object.keys(state.positions).length - 1],
          };
        } else if (resultsArray.loss.length > 0) {
          result = {
            outcome: "loss",
            winPosition: state.computerChoice!,
            winLossAmount: state.bet,
          };
        } else {
          result = {
            outcome: "draw",
            winPosition: resultsArray.draw[0],
            winLossAmount: state.positions[resultsArray.draw[0]]! * MIN_BET,
          };
        }

        return {
          ...state,
          outcome: result.outcome,
          winPosition: result.winPosition,
          winLossAmount: result.winLossAmount,
        };
      }
      case "RESET_GAME": {
        return {
          ...state,
          balance:
            state.outcome === "win" || state.outcome === "draw"
              ? state.balance + state.winLossAmount!
              : state.balance,
          positions: {},
          bet: 0,
          win: 0,
          computerChoice: null,
          outcome: undefined,
          winPosition: undefined,
          winLossAmount: undefined,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
