import { useContext } from "react";
import { AppContext } from "../Global/AppContext";
import { motion } from "framer-motion";

const Board = () => {
  const { state } = useContext(AppContext);
  return (
    !state.outcome && (
      <div className='md:grid grid-cols-[80fr_1fr_80fr] justify-center pt-8 md:pt-24 uppercase font-bold text-[#D4B37F]'>
        <div className='flex items-center flex-col'>
          <div className=''>Computer Chose</div>
          {state.computerChoice ? (
            <motion.div
              className='text-3xl md:text-5xl mt-4 md:mt-16 text-white mb-8 md:mb-0 '
              animate={{ y: 0 }}
              transition={{ duration: 0.1 }}
              exit={{ y: 50 }}
              initial={{ y: 50 }}>
              {state.computerChoice}
            </motion.div>
          ) : (
            <div className='h-9 md:h-auto mt-4 mb-6' />
          )}
        </div>
        <div className='flex justify-center mb-6 md:mb-0'>
          <div className=''>VS</div>
        </div>
        <div className='flex items-center flex-col'>
          <div className=''>Player Chose</div>
          <div className='text-3xl md:text-5xl mt-4 md:mt-16 text-white mb-6 md:mb-0 h-9 md:h-auto flex'>
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
