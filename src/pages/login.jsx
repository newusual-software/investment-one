import { useState } from "react";
import LandingLayout from "../layouts/landingLayout";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [remember, setRemember] = useState(true);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <LandingLayout>
      <div className="flex flex-row justify-center items-center  pt-10">
        <div className="w-1/2 h-[32rem] ml-20 py-2 z-[999] bg-white rounded-lg ">
          <form className=" rounded-lg p-5">
            <h2 className="text-2xl font-semibold text-[#212323] text-left font-workSans mb-4">
              Sign in to view Market reports
            </h2>
            <div className=" gap-4 md:gap-5 pt-1">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="text-[#000] font-workSans font-semibold"
                >
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border-2 mt-2 rounded-lg outline-none border-[#7B7B7B] border-opacity-50 mb-3"
                />
              </div>
            </div>
            <div className=" gap-4 md:gap-5 pt-1">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="text-[#000] font-workSans font-semibold"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Password"
                  className="w-full p-2 border-2 mt-2 rounded-lg outline-none border-[#7B7B7B] border-opacity-50 mb-3"
                />
              </div>
              <div className="flex  flex-wrap gap-3 justify-between items-center py-5">
                <div className="flex justify-center items-center gap-2">
                  <div>
                    <input
                      type="checkbox"
                      value={remember}
                      onChange={(e) => setRemember(e.target.value)}
                    />
                  </div>
                  <div className="font-dmSan text-[#141414] font-400 text-md">
                    remember me
                  </div>
                </div>
                <div>
                  <Link
                    className=" hover:decoration-none font-dmSan text-[#F38704] font-500 text-md"
                    to="/forgotten-password"
                  >
                    Forgotten Password?
                  </Link>
                </div>
              </div>
              <button onClick={() => navigate('/research-portal')} className="w-full h-[2.7rem] bg-orange rounded-md flex items-center justify-center gap-2">
                <span className="text-white text-lg font-normal font-workSans leading-snug tracking-wide">
                  Login
                </span>
              </button>
              <div className="relative flex w-[90%] mx-auto flex-row py-5 ">
                <div className=" w-1/2 inline-flex items-center text-xs align-middle">
                  <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                </div>

                <div className=" px-3">
                  <span className="w-[10rem] h-7 flex justify-center items-center font-medium text-gray-800 rounded-full">
                    Or continue with
                  </span>
                </div>

                <div className=" w-1/2 inline-flex items-center text-xs align-middle">
                  <div className=" w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                </div>
              </div>
              <div className="flex justify-between w-full gap-3">
                
                <div className="w-1/2">
                  <Button
                    size="md"
                    variant="outlined"
                    fullWidth
                    color="blue-gray"
                    className="flex items-center justify-center gap-3 border-2 border-orange"
                  >
                    <img
                      src="https://docs.material-tailwind.com/icons/google.svg"
                      alt="metamask"
                      className="h-4 w-4"
                    />
                    Continue with Google
                  </Button>
                </div>
                <div className="w-1/2">
                  <Button
                    size="md"
                    variant="outlined"
                    fullWidth
                    color="blue-gray"
                    className="flex items-center justify-center gap-3 border-2 border-orange"
                  >
                    <img
                      src="https://res.cloudinary.com/phantom1245/image/upload/v1708305328/investment-one/Vector_fjjguj.png"
                      alt="metamask"
                      className="h-4 w-2 "
                    />
                    Continue with Google
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-1/2  relative right-20">
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1708301779/investment-one/Frame_263_ncdhn1.png"
            alt=""
            className="h-[35rem]"
          />
        </div>
      </div>
    </LandingLayout>
  );
}
