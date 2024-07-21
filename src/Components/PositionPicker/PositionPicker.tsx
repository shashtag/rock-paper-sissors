import Position from "./Position";
import { POSITIONS } from "../../Global/Constants";

// PositionPicker component to allow users to pick their positions
const PositionPicker = () => {
  return (
    <div className='flex items-center flex-col'>
      <div className='uppercase font-semibold text-[#D4B37F]'>
        pick your position
      </div>
      <div className='flex mt-4 md:mt-8 flex-col md:flex-row gap-4 md:gap-12 mb-6 md:mb-0 '>
        {/* Map through the POSITIONS array and render a Position component for each item */}
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
