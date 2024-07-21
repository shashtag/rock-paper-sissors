import { useContext } from "react";
import { AppContext } from "../Global/AppContext";
import { toast } from "react-toastify";

// PlayButton component to handle the game actions
const PlayButton = () => {
  const { dispatch, state } = useContext(AppContext);
  return (
    <div className='grid justify-center '>
      <button
        onClick={() => {
          // Check if at least one position is selected
          if (Object.keys(state.positions).length < 1) {
            toast("You must bet on at least 1 position", {
              theme: "dark",
              type: "error",
            });
            return;
          }
          // If the computer has not made a choice, set the computer's choice
          if (!state.computerChoice)
            dispatch({ type: "SET_COMPUTER_CHOICE", payload: null });
          // If there is no outcome, calculate the results
          else if (!state.outcome)
            dispatch({ type: "CALCULATE_RESULTS", payload: null });
          // Otherwise, reset the game
          else dispatch({ type: "RESET_GAME", payload: null });
        }}
        className='border-4 block h-max w-52 rounded-full p-4 text-[#D4B37F] text-3xl bg-[#070707] border-[#D4B37F]'>
        {!state.computerChoice ? "Play" : "Continue"}
      </button>
    </div>
  );
};

export default PlayButton;
