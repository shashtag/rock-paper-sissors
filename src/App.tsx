import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [balance, setBalance] = useState(500);
  const [bet, setBet] = useState(0);
  const [win, setWin] = useState(0);
  return (
    <div className='text-lg bg-gradient-to-b from-[#484848] to-[#1D1D1D] h-[100vh]'>
      <Header balance={balance} bet={bet} win={win} />
    </div>
  );
}

export default App;
