import React, { createContext, ReactNode, useReducer } from "react";
import { INIT_BALANCE } from "./Constants";

type StateType = {
  loading: boolean;
  initBalance: number;
  balance: number;
  positions: { rock?: number; paper?: number; scissors?: number };
  bet: number;
};

type payloadType = boolean;

const initialState: StateType = {
  loading: false,
  initBalance: INIT_BALANCE,
  balance: INIT_BALANCE,
  positions: {},
  bet: 0,
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
        return { ...state, loading: action.payload };
      case "BET":
        return { ...state };
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
