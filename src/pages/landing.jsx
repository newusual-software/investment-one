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
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { client } from "../services/sanity/sanityClient";
import { truncateString } from "../lib/utils/truncateString";

export default function Landing() {
  const [active, setActive] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  let navigate = useNavigate();
  const ITEMS_PER_PAGE = 8;

  const [insightData, setInsightData] = useState([] || pdfData)
  const [marketArticle, setMarketArticle] = useState([] || pdfData)
  const [insightAds, setInsightAds] = useState({})

  useEffect(() => {

    // for market insight blog

    client
    .fetch('*[_type == "marketInsightBlog"] | order(_createdAt asc)')
    .then((data) => {
      setInsightData(data)
    })
    .catch((error) =>
      console.error("Error fetching whyChooseFarm2Home data:", error)
    );

    //for marrket insight data 
    client
    .fetch('*[_type == "marketInsightAds"][0]')
    .then((data) => {
      if (data) {
        setInsightAds(data);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));

  // for market insight blog

  client
  .fetch('*[_type == "marketArticle"] | order(_createdAt asc)')
  .then((data) => {
    setMarketArticle(data)
  })
  .catch((error) =>
    console.error("Error fetching whyChooseFarm2Home data:", error)
  );

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

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Convert month name to abbreviated format
    const month = formattedDate.split(' ')[0];
    const abbreviatedMonth = month.substring(0, 3);

    // Convert day to ordinal format
    const day = formattedDate.split(' ')[1].replace(/,/g, '');
    const ordinalDay = day + (
      day === '1' || day === '21' || day === '31' ? 'st' :
      day === '2' || day === '22' ? 'nd' :
      day === '3' || day === '23' ? 'rd' : 'th'
    );

    // Construct the final formatted date
    return `${ordinalDay} ${abbreviatedMonth}, ${date.getFullYear()}`;
  };
  const formatDateed = (dateString) => {
    const date = new Date(dateString);
  
    // Extract day, month, and year
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().substring(2);
  
    // Construct the final formatted date
    return `${day}${month}${year}`;
  };

  return (
    <LandingLayout>
      <HomeBanner />
      <div className="pl-20 text-black text-xl py-20 font-fontSans font-bold">
        Market Insights
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-20 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-9">
        {insightData?.slice(startIndex, endIndex).map((data, index) => (
          <div key={startIndex + index} onClick={() => navigate(`insight-data/${data._id}`)}>
            <Card className="mt-6">
              <CardHeader className="relative h-58">
                {data?.coverImage && (
                  <img
                    src={
                      data?.coverImage.cloudinaryUrl ||
                      "https://res.cloudinary.com/phantom1245/image/upload/v1703460661/investment-one/preview_1_iu8bhh.jpg"
                    }
                    alt={`Random Image`}
                    className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                  />
                )}
              </CardHeader>
              <CardBody>
                <Typography className="mb-1 text-sm font-workSans font-semibold text-orange">
                  MARKET INSIGHT {formatDateed(data._createdAt)}
                </Typography>
                <Typography className="text-black font-workSans font-semibold text-xl">
                  {truncateString(data?.title, 36) || "The Global Economic Impacts of AI"}
                </Typography>
                {/* Replace hard-coded date with formatted date */}
                <Typography className="text-sm pt-2">
                  {formatDate(data._createdAt)}{" "}
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      <div className="w-full bg-[#212323] justify-around items-center p-20 flex ">
        <div className="gap-3 text-white w-1/2">
          <h1 className="text-5xl w-full font-workSans font-bold ">
            {insightAds?.title || "Discover what’s Happening in the Market"}
          </h1>
          <h4 className="text-lg py-4 w-[85%]">
            {insightAds?.content}
          </h4>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src={insightAds?.Adimage?.cloudinaryUrl || "https://res.cloudinary.com/phantom1245/image/upload/v1708182229/investment-one/iPhone_15_Pro_Portrait_Mockup_dkpjun.png"}
            className="w-[30%]"
            alt=""
          />
        </div>
      </div>

      <div className="my-12 px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {marketArticle.slice(startIndex, endIndex).map((data, index) => (
            <div key={startIndex + index} className="cursor-pointer" onClick={() => navigate(`/insight-article/${data._id}`)}>
              <Card className="mt-6">
                <CardHeader color="blue-gray" className="relative h-58">
                  {data?.coverImage && (
                    <img
                      src={data?.coverImage?.cloudinaryUrl}
                      alt={`Random Image`}
                      className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                    />
                  )}
                </CardHeader>
                <CardBody>
                  <Typography className="mb-1 text-lg leading-tight font-workSans font-semibold text-[#2D2A26]">
                    { data?.title || "Emergency Market Strength" }
                  </Typography>
                  <Typography className="font-workSans font-normal pt-1">
                   {data?.description}
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
            <strong className="text-gray-900">{marketArticle.length}</strong>
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            onClick={next}
            disabled={active === marketArticle.length}
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
