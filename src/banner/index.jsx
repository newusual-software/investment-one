import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const HomeBanner = () => {
  const navigate = useNavigate()
  return (
    <div
      className="w-full 
            relative
            overflow-hidden
            block
            z-10
            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-[#272727]
            before:to-[#222]
            before:opacity-50
            before:z-[-5]
            object-cover 
            pl-14 h-[30rem] 
            bg-cover bg-no-repeat 
            bg-center 
            bg-[url('https://res.cloudinary.com/phantom1245/image/upload/v1708141308/investment-one/Frame_232_e2xwak.png')] flex flex-col justify-center"
    >
      <div className="gap-3 text-white">
        <h1 className="text-5xl w-[70%] xl:w-[55%] font-workSans font-bold ">
          Discover what’s Happening in the Market
        </h1>
        <h4 className="text-lg py-4 w-1/2">
          Lorem ipsum dolor sit amet consectetur. Mattis venenatis ultricies
          ante ultrices ac. Eget integer enim eu aliquet. Interdum vitae et
          posuere felis faucibus adipiscing metus dictum bibendum. Hac
          adipiscing sed viverra lorem auctor sed condimentum. Ut purus ultrices
          malesuada id. Vitae dictum odio velit feugiat et cursus. Cursus
          euismod amet augue id duis tortor in enim. Facilisi enim sed iaculis
          malesuada ultrices eu auctor.
        </h4>
      </div>
      <div>
        <button onClick={() => navigate("/login")} className="bg-orange w-[15rem] text-white rounded-lg py-3">
        Login
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
