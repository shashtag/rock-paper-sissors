import { useContext } from "react";
import { AppContext } from "../Global/AppContext";

// Header component to display the balance, bet, and win information
const Header = () => {
  const { state } = useContext(AppContext);
  return (
    <div className='flex bg-[#161616] justify-center gap-8 md:gap-16'>
      <div className=' py-1 text-[#FBFBFB] font-semibold'>
        <span className='text-[#D4B37F]'>Balance : </span>
        {state.balance}
      </div>
      <div className=' py-1 text-[#FBFBFB] font-semibold'>
        <span className='text-[#D4B37F]'>Bet : </span>
        {state.bet}
      </div>
      <div className=' py-1 text-[#FBFBFB] font-semibold'>
        <span className='text-[#D4B37F]'>Win : </span>
        {state.win}
      </div>
    </div>
  );
};

export default Header;
