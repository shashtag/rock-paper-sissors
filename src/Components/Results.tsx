import { useContext } from "react";
import { AppContext } from "../Global/AppContext";

// The Results component displays the outcome of a game based on the state from AppContext
const Results = () => {
  const { state } = useContext(AppContext);
  return (
    // Conditionally rendering the component only if state.outcome exists else render Board.tsx
    state.outcome && (
      <div className='grid place-items-center'>
        <div>
          <div
            className='text-5xl md:text-6xl uppercase font-semibold'
            style={{
              // Setting the text color based on the outcome of the game
              color:
                state.outcome === "win"
                  ? "green"
                  : state.outcome === "draw"
                  ? "gray"
                  : "red",
            }}>
            {/* Displaying the outcome text */}
            {state.outcome === "draw" ? "Draw" : state.winPosition + " Won"}
          </div>
          <div className='text-center mt-4 font-semibold text-2xl'>
            {/* Displaying the win/loss amount based on the outcome */}
            {state.outcome === "draw" || state.outcome === "win" ? (
              <>
                <span className='text-[#D4B37F]'>You win : </span>
                <span className='text-white'>{state.winLossAmount}</span>
              </>
            ) : (
              <>
                <span className='text-[#D4B37F]'>You lose : </span>{" "}
                <span className='text-white'>{state.winLossAmount}</span>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Results;
