
const LandingHeaderInfo = () => {

  return (
    <div className="bg-mainGreen text-white captalize w-full h-[90px] flex justify-between px-[3rem] items-center">
      <div>
        <a href="/">
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1703172021/investment-one/image_1_d6glct.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="font-workSans font-bold text-[40px] text-[#000] "> RESEARCH </div>
      <div>
        <a href="https://www.investment-one.com/" target="_blank" rel="noopener noreferrer">
        <button className="w-[10rem] h-[2.7rem] bg-transparent border-2 border-orange rounded-md flex items-center justify-center gap-2">
          <span className="text-orange text-sm font-normal font-workSans leading-snug tracking-wide">
          Login
          </span>
        </button>
        </a>
      </div>
    </div>
  );
};

export default LandingHeaderInfo;
