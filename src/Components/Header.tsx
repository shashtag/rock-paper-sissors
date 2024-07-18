import { useContext } from "react";
import { AppContext } from "../Global/AppContext";

const Header = () => {
  const { state } = useContext(AppContext);
  return (
    <div className='flex bg-[#161616] justify-center'>
      <div className='px-8 py-1 text-[#FBFBFB] font-semibold'>
        <span className='text-[#D4B37F]'>Balance: </span>
        {state.balance}
      </div>
      <div className='px-8 py-1 text-[#FBFBFB] font-semibold'>
        <span className='text-[#D4B37F]'>Bet: </span>
        {state.bet}
      </div>
      <div className='px-8 py-1 text-[#FBFBFB] font-semibold'>
        <span className='text-[#D4B37F]'>Win: </span>
        {state.win}
      </div>
    </div>
  );
};

export default Header;
