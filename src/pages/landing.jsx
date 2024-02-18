import HomeBanner from "../banner";
import LandingLayout from "../layouts/landingLayout";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { pdfData } from "../data/pdf";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [active, setActive] = useState(1);
  const [imageUrls, setImageUrls] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let navigate = useNavigate();
  const ITEMS_PER_PAGE = 8;


  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random`,
          {
            params: {
              query: "finance",
              count: pdfData.length, // Fetch a random image for each item in pdfData
              client_id: "Ei5L_WMwdu5qTDzm6UuWKChYUzdpGfpPMABrDr5zU4c",
              orientation: "landscape",
            },
          }
        );

        const randomImages = response.data.map((image) => image.urls.regular);
        setImageUrls(randomImages);
      } catch (error) {
        setImageUrls(
          "https://res.cloudinary.com/phantom1245/image/upload/v1703460661/investment-one/preview_1_iu8bhh.jpg"
        );

        console.error("Error fetching random images:", error);
      }
    };

    fetchRandomImages();
  }, []);

  const next = () => {
    if (active === Math.ceil(pdfData.length / ITEMS_PER_PAGE)) return;
    setActive(active + 1);
    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    setCurrentPage(currentPage - 1);
  };

  const handleLoadMore = () => {
    if (active === Math.ceil(pdfData.length / ITEMS_PER_PAGE)) return;
    setActive(active + 1);
    setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  return (
    <LandingLayout>
      <HomeBanner />
      <div className="pl-20 text-black text-xl py-20 font-fontSans font-bold">
        Market Insights
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-20 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-9">
        {pdfData.slice(startIndex, endIndex).map((data, index) => (
          <div key={startIndex + index} onClick={() => navigate(`insight-data/${index}`)}>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-58">
                {imageUrls[startIndex + index] && (
                  <img
                    src={
                      imageUrls[startIndex + index] ||
                      "https://res.cloudinary.com/phantom1245/image/upload/v1703460661/investment-one/preview_1_iu8bhh.jpg"
                    }
                    alt={`Random Image`}
                    className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                  />
                )}
              </CardHeader>
              <CardBody>
                <Typography className="mb-1 text-sm font-workSans font-semibold text-orange">
                  MORNING INSIGHT {data.date}
                </Typography>
                <Typography className="text-black font-workSans font-semibold text-xl">
                  The Global Economic Impacts of AI
                </Typography>
                <Typography className="text-sm pt-2">
                  28th January,2024{" "}
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      <div className="w-full bg-[#212323] justify-around items-center p-20 flex ">
        <div className="gap-3 text-white w-1/2">
          <h1 className="text-5xl w-full font-workSans font-bold ">
            Discover what’s Happening in the Market
          </h1>
          <h4 className="text-lg py-4 w-[85%]">
            Lorem ipsum dolor sit amet consectetur. Mattis venenatis ultricies
            ante ultrices ac. Eget integer enim eu aliquet. Interdum vitae et
            posuere felis faucibus adipiscing metus dictum bibendum. Hac
            adipiscing sed viverra lorem auctor sed condimentum. Ut purus
            ultrices malesuada id. Vitae dictum odio velit feugiat et cursus.
            Cursus euismod amet augue id duis tortor in enim. Facilisi enim sed
            iaculis malesuada ultrices eu auctor.
          </h4>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1708182229/investment-one/iPhone_15_Pro_Portrait_Mockup_dkpjun.png"
            className="w-[30%]"
            alt=""
          />
        </div>
      </div>
      <div className="my-12 px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {pdfData.slice(startIndex, endIndex).map((data, index) => (
            <div key={startIndex + index} >
              <Card className="mt-6">
                <CardHeader color="blue-gray" className="relative h-58">
                  {imageUrls[startIndex + index] && (
                    <img
                      src={imageUrls[startIndex + index]}
                      alt={`Random Image`}
                      className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                    />
                  )}
                </CardHeader>
                <CardBody>
                  <Typography className="mb-1 text-lg leading-tight font-workSans font-semibold text-[#2D2A26]">
                    Emergency Market Strength
                  </Typography>
                  <Typography className="font-workSans font-normal pt-1">
                    As the sun casts its first rays on the markets, let&apos;s
                    seize the day with a quick snapshot of fiscal possibilities.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90%] mx-auto py-10 px-10 h-[4rem] bg-white rounded shadow flex justify-between items-center">
        <div className="flex items-center gap-8">
          <IconButton
            size="sm"
            variant="outlined"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          <Typography color="gray" className="font-normal">
            Page <strong className="text-gray-900">{active}</strong> of{" "}
            <strong className="text-gray-900">10</strong>
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            onClick={next}
            disabled={active === 10}
          >
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="flex items-start justify-start gap-2 ">
          <Button className="bg-orange" onClick={handleLoadMore}>
            Load more
          </Button>
        </div>
      </div>
    </LandingLayout>
  );
}
