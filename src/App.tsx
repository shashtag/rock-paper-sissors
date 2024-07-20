import Header from "./Components/Header";
import PositionPicker from "./Components/PositionPicker/PositionPicker";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Board from "./Components/Board";
import PlayButton from "./Components/PlayButton";
import Results from "./Components/Results";

function App() {
  return (
    <>
      <div className='text-lg h-[100vh]'>
        <Header />
        <div className='grid grid-rows-[3fr_2fr_1fr] h-[calc(100vh-36px)]'>
          <Board />
          <Results />
          <PositionPicker />
          <PlayButton />
        </div>
      </div>
      <ToastContainer position='bottom-right' />
    </>
  );
}

export default App;
