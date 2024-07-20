import { useContext } from "react";
import { AppContext } from "../Global/AppContext";

const Results = () => {
  const { state } = useContext(AppContext);
  return (
    state.outcome && (
      <div className='grid place-items-center'>
        <div>
          <div
            className='text-5xl md:text-6xl uppercase font-semibold'
            style={{
              color:
                state.outcome === "win"
                  ? "green"
                  : state.outcome === "draw"
                  ? "gray"
                  : "red",
            }}>
            {state.outcome === "draw" ? "Draw" : state.winPosition + " Won"}
          </div>
          <div className='text-center mt-4 font-semibold text-2xl'>
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
