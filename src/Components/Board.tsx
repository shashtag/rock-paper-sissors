import { useContext } from "react";
import { AppContext } from "../Global/AppContext";
import { motion } from "framer-motion";

const Board = () => {
  const { state } = useContext(AppContext);
  return (
    !state.outcome && (
      <div className='grid grid-cols-[80fr_1fr_80fr] justify-center  pt-24 uppercase font-bold text-[#D4B37F]'>
        <div className='flex items-center flex-col'>
          <div className=''>Computer Chose</div>
          {state.computerChoice && (
            <motion.div
              className='text-5xl mt-16 text-white'
              animate={{ y: 0 }}
              transition={{ duration: 0.1 }}
              exit={{ y: 50 }}
              initial={{ y: 50 }}>
              {state.computerChoice}
            </motion.div>
          )}
        </div>
        <div className='flex justify-center'>
          <div className=''>VS</div>
        </div>
        <div className='flex items-center flex-col'>
          <div className=''>Player Chose</div>
          <div className='text-5xl mt-16 text-white flex'>
            {Object.keys(state.positions).map((key, i) => (
              <motion.div
                animate={{ y: 0 }}
                transition={{ duration: 0.1 }}
                initial={{ y: 50 }}
                exit={{ y: 50 }}
                key={key}>
                {key}
                {i == Object.keys(state.positions).length - 1 ? null : (
                  <span>&nbsp; & &nbsp;</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Board;
