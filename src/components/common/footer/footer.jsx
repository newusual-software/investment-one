import { useEffect, useState } from "react";
import { client } from "../../../services/sanity/sanityClient";

export default function Footer() {
  const [footerData, setFooterData] = useState({});
  useEffect(() => {
    // Fetch data from Sanity
    client
      .fetch('*[_type == "footer"][0]')
      .then((data) => {
        setFooterData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-8 max-w-full mx-auto bg-gray-800 p-8 text-white">
      <div className="">
        <img
          className=" mx-auto"
          src={
            footerData?.logo?.cloudinaryUrl ||
            "https://res.cloudinary.com/phantom1245/image/upload/v1703172021/investment-one/image_1_d6glct.png"
          }
          alt="Investment One Logo"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-[#DD4F05] text-2xl font-medium font-workSans mb-2">
          Email Address:
        </div>
        <div className="text-base font-normal font-workSans leading-snug tracking-wide">
          {footerData?.email || "research@investment-one.com"}
        </div>
        <div className="text-[#DD4F05] text-2xl font-medium font-workSans mt-5 mb-2">
          Follow Us On:
        </div>
          <div className="flex gap-4">
          <a
            href={ "https://linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1703808061/investment-one/cib_linkedin-in_jvweyv.svg"
              alt="footer icon"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1703808000/investment-one/uil_instagram-alt_tjuuih.svg"
              alt="footer icon"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1703808006/investment-one/eva_twitter-fill_nlccvl.svg"
              alt="footer icon"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1703808251/investment-one/basil_facebook-solid_wlgcs1.svg"
              alt="footer icon"
              className="w-6 h-6"
            />
          </a>
        </div>
        
      </div>
      <div className="flex flex-col">
        <div className="text-[#DD4F05] text-2xl font-medium font-workSans mb-2">
          Office Address
        </div>
        <div className="text-base font-normal font-workSans leading-snug tracking-wide">
          {footerData?.officeAddress ||
            "37 Kofo Abayomi Street, Victoria Island, Lagos."}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-[#DD4F05] text-2xl font-medium font-workSans mb-2">
          Phone
        </div>
        {footerData?.phones?.map((mobile, index) => (
          <div key={index}>
            <div className="text-base font-normal font-workSans leading-snug tracking-wide">
              {mobile}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
