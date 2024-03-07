import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../services/sanity/sanityClient";
const HomeBanner = () => {
  const [bannerData, setBannerData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from Sanity
    client
      .fetch('*[_type == "homeBanner"][0]')
      .then((data) => {
        setBannerData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!bannerData) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data
  }
  return (
    <div
      className={`w-full relative overflow-hidden block z-10 before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-[#272727] before:to-[#222] before:opacity-50 before:z-[-5] object-cover pl-14 h-[30rem] bg-cover bg-no-repeat bg-center bg-[url('https://res.cloudinary.com/phantom1245/image/upload/v1708141308/investment-one/Frame_232_e2xwak.png')] flex flex-col justify-center`}
    >
      <div className="gap-3 text-white">
        <h1 className="text-5xl w-[70%] xl:w-[55%] font-workSans font-bold">
          {bannerData.title}
        </h1>
        <h4 className="text-lg py-4 w-1/2">{bannerData.description}</h4>
      </div>
      <div>
        <button
          onClick={() => navigate("/login")}
          className={`bg-${bannerData.buttonColor || "orange"} w-[15rem] text-white rounded-lg py-3`}
        >
          {bannerData.buttonText}
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
