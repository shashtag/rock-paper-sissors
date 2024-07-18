type HeaderProps = { balance: number; bet: number; win: number };

const Header = ({ balance, bet, win }: HeaderProps) => {
  return (
    <div className='flex bg-[#161616] justify-center'>
      <div className='px-8 py-1 text-[#FBFBFB] font-semibold'>
        <span className='text-[#D4B37F]'>Balance: </span>
        {balance}
      </div>
      <div className='px-8 py-1 text-[#FBFBFB] font-semibold'>
        <span className='text-[#D4B37F]'>Bet: </span>
        {bet}
      </div>
      <div className='px-8 py-1 text-[#FBFBFB] font-semibold'>
        <span className='text-[#D4B37F]'>Win: </span>
        {win}
      </div>
    </div>
  );
};

export default Header;
