import Position from "./Position";
import { POSITIONS } from "../../Global/Constants";

const PositionPicker = () => {
  return (
    <div className='flex items-center flex-col'>
      <div className='uppercase font-semibold text-[#D4B37F]'>
        pick your position
      </div>
      <div className='flex mt-8'>
        {POSITIONS.map((item) => (
          <Position
            position={item.position}
            bg={item.bg}
            border={item.border}
            color={item.color}
            key={item.position}
          />
        ))}
      </div>
    </div>
  );
};

export default PositionPicker;
