import Position from "./Position";

const PositionPicker = () => {
  return (
    <div className='flex items-center flex-col'>
      <div className='uppercase font-semibold text-[#D4B37F]'>
        pick your position
      </div>
      <div className='flex mt-8'>
        {[
          {
            position: "rock",
            bg: "#211F4F",
            color: "#267DE5",
            border: "#2E4D97",
          },
          {
            position: "paper",
            bg: "#1A381D",
            color: "#16C359",
            border: "#187E3A",
          },
          {
            position: "scissors",
            bg: "#50091E",
            color: "#E31542",
            border: "#9A0E30",
          },
        ].map((item) => (
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
