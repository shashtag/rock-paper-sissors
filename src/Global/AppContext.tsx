import React, { createContext, ReactNode, useReducer } from "react";
import { INIT_BALANCE, MIN_BET } from "./Constants";
import { PositionsType } from "./Types";
import { calculateProbableWinOnBets } from "./Utils";

type StateType = {
  loading: boolean;
  initBalance: number;
  balance: number;
  positions: { [key in PositionsType]?: number | undefined };
  bet: number;
  win: number;
};

type payloadType = boolean | PositionsType;

const initialState: StateType = {
  loading: false,
  initBalance: INIT_BALANCE,
  balance: INIT_BALANCE,
  positions: {},
  bet: 0,
  win: 0,
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
          win: calculateProbableWinOnBets(positions, state.bet + MIN_BET),
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
          win: calculateProbableWinOnBets(positions, state.bet - MIN_BET),
        };
      }
      case "RESOLVE":
        return { ...state };
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
