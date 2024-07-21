import { useContext } from "react";
import { AppContext } from "../../Global/AppContext";
import { MIN_BET } from "../../Global/Constants";
import { PositionsType } from "../../Global/Types";
import { toast } from "react-toastify";

type PositionProps = {
  position: PositionsType;
  color: string;
  bg: string;
  border: string;
};

type Positions = {
  [key in PositionsType]: number | undefined;
};

// Position Component to display the mapped position and the bet amount
const Position = ({ position, color, bg, border }: PositionProps) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div
      data-testid='position-item'
      onClick={() => {
        if (state.positions[position as PositionsType] === undefined) {
          if (Object.keys(state.positions).length >= 2) {
            toast("You can only bet on 2 positions at a time", {
              theme: "dark",
              type: "error",
            });
            return;
          }
        }
        if (state.balance < MIN_BET) {
          toast("Insufficient balance", { theme: "dark", type: "error" });
          return;
        }
        // Only allow to change the BET action if the computer has not made a choice
        !state.computerChoice && dispatch({ type: "BET", payload: position });
      }}
      className=' p-2 md:p-0 md:h-40 w-52 grid place-items-center capitalize border-[3px] rounded-lg '
      style={{
        borderColor: border,
        backgroundColor: bg,
        cursor: !state.computerChoice ? "pointer" : undefined,
      }}>
      <div>
        <div className='h-9 md:h-[4.25rem] w-[4.25rem]  mx-auto mb-3'>
          {state.positions[position as keyof Positions] ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
                // Only allow to change the BET action if the computer has not made a choice
                !state.computerChoice &&
                  dispatch({ type: "REMOVE_BET", payload: position });
              }}
              className='rounded-full h-full w-full border-4 border-[#225EFF] bg-white grid place-items-center font-semibold'>
              {state.positions[position as keyof Positions]! * MIN_BET}
            </div>
          ) : null}
        </div>
        <div
          className='uppercase font-semibold text-xl md:text-2xl'
          style={{ color: color }}>
          {position}
        </div>
      </div>
    </div>
  );
};

export default Position;
