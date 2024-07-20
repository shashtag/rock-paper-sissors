import React, { useContext } from "react";
import { AppContext } from "../Global/AppContext";

const Board = () => {
  const { state } = useContext(AppContext);
  return (
    <div className='grid grid-cols-[80fr_1fr_80fr] justify-center  pt-24 uppercase font-bold text-[#D4B37F]'>
      <div className='flex items-center flex-col'>
        <div className=''>Computer Chose</div>
        <div className='text-5xl mt-16 text-white'>{state.computerChoice}</div>
      </div>
      <div className='flex justify-center'>
        <div className=''>VS</div>
      </div>
      <div className='flex items-center flex-col'>
        <div className=''>Player Chose</div>
        <div className='text-5xl mt-16 text-white flex'>
          {Object.keys(state.positions).map((key, i) => (
            <div key={key}>
              {key}
              {i == Object.keys(state.positions).length - 1 ? null : (
                <span>&nbsp; & &nbsp;</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
