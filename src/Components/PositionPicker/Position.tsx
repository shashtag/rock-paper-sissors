type PositionProps = {
  position: string;
  color: string;
  bg: string;
  border: string;
};

const Position = ({ position, color, bg, border }: PositionProps) => {
  return (
    <div
      className='mx-12 h-40 w-52 grid place-items-center capitalize border-[3px] rounded-lg cursor-pointer'
      style={{ borderColor: border, backgroundColor: bg }}>
      <div>
        <div className='h-[4.25rem] w-[4.25rem]  mx-auto mb-3'>
          <div className='rounded-full h-full w-full border-4 border-[#225EFF] bg-white grid place-items-center font-semibold'>
            500
          </div>
        </div>
        <div
          className='uppercase font-semibold text-2xl'
          style={{ color: color }}>
          {position}
        </div>
      </div>
    </div>
  );
};

export default Position;
