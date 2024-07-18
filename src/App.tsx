import { useState } from "react";
import Header from "./Components/Header";
import PositionPicker from "./Components/PositionPicker/PositionPicker";

function App() {
  const [balance, setBalance] = useState(5000);
  const [bet, setBet] = useState(0);
  const [win, setWin] = useState(0);
  return (
    <div className='text-lg bg-gradient-to-b from-[#484848] to-[#1D1D1D] h-[100vh]'>
      <Header balance={balance} bet={bet} win={win} />

      <div className='grid grid-rows-[3fr_2fr_1fr] h-[calc(100vh-36px)]'>
        <div>sss</div>
        <PositionPicker />
        <div className='grid justify-center '>
          <button className='border-2 block h-max w-52 rounded-full p-4 text-[#D4B37F] text-3xl bg-[#070707] border-[#D4B37F]'>
            Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
