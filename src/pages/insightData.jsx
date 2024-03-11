import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LandingLayout from "../layouts/landingLayout";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { client } from "../services/sanity/sanityClient";
import { pdfData } from "../data/pdf";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { truncateString } from "../lib/utils/truncateString";

const builder = imageUrlBuilder({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

function urlFor(source) {
  return builder.image(source);
}

export default function InsightData() {
  const currentPage = 1;
  const ITEMS_PER_PAGE = 8;
  const navigate = useNavigate();

  const [insightData, setInsightData] = useState(null);
  const [insightDatas, setInsightDatas] = useState([] || pdfData);
  const { id } = useParams();

  useEffect(() => {


    client
      .fetch('*[_type == "marketInsightBlog"] | order(_createdAt asc)')
      .then((data) => {
        setInsightDatas(data);
      })
      .catch((error) =>
        console.error("Error fetching whyChooseFarm2Home data:", error)
      );

    // Fetch the specific data item using the ID from the URL parameter
    client
      .fetch(`*[_type == "marketInsightBlog" && _id == $id][0]`, { id })
      .then((data) => {
        setInsightData(data);
      })
      .catch((error) => {
        console.error("Error fetching market insight blog data:", error);
      });
  }, [id]);

  if (!insightData) {
    return <div>Loading...</div>;
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  // Define the React components for rendering Portable Text
  const components = {
    types: {
      // Render images
      image: (props) => {
        // Assuming 'node' contains information about the image
        if (props.value && props.value.asset) {
          const imageUrl = urlFor(props.value.asset).url();
          return (
            <img
              src={imageUrl}
              alt={props.value.alt}
              className="w-[70%]  rounded-md mx-auto py-6"
            />
          );
        }
        return null;
      },
    },
    // Render normal text blocks
    listItem: ({ children, value }) => {
      // Determine the type of list item
      const Tag = value.listItem === "bullet" ? "ul" : "ol";
      if (Tag == "ul") {
        return (
          <ul className="list-inside list-disc">
            <li>{children}</li>
          </ul>
        );
      } else {
        return (
          <ol className="list-inside list-decimal">
            <li>{children}</li>
          </ol>
        );
      }
    },

    block: ({ children, node }) => {
      switch (node.style) {
        case "h1":
          return <h1 className="text-3xl py-3 font-bold">{children}</h1>;
        case "h2":
          return <h2>{children}</h2>;
        case "h3":
          return <h3>{children}</h3>;
        case "h4":
          return <h4>{children}</h4>;
        case "h5":
          return <h5>{children}</h5>;
        case "h6":
          return <h6>{children}</h6>;
        default:
          return <p>{children}</p>;
      }
    },
  };

  // Then pass it to the PortableText component
  return (
    <LandingLayout>
      <div className="w-full  bg-currentColor justify-around items-center p-14 flex ">
        <div className="gap-3 text-[#212323] w-1/2">
          <h1 className="text-5xl w-full font-workSans font-bold ">
            {insightData?.title || "Discover what’s Happening in the Market"}
          </h1>
          <h4 className="text-lg py-4 w-[85%]">{insightData?.description}</h4>
          <div>
            <button
              onClick={() => navigate("/login")}
              className="bg-orange w-[15rem] text-white rounded-lg py-3"
            >
              Login
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src={
              insightData?.coverImage?.cloudinaryUrl ||
              "https://res.cloudinary.com/phantom1245/image/upload/v1708258329/investment-one/cc987c405c0424bd1c571c5c69a3cabc_xvkic6.jpg"
            }
            className="w-[80%] h-[30rem] rounded-tl-3xl rounded-br-3xl"
            alt=""
          />
        </div>
      </div>
      <div className="font-workSans px-52 pt-12 pb-32 rounded-lg">
        <PortableText value={insightData.content} components={components} />
      </div>
      <div className="pl-20 text-black text-xl py-10 font-fontSans font-bold">
        Articles you may also like to read:
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-20 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-9">
        {insightDatas.slice(0, 4).map((data, index) => (
          <div
            key={startIndex + index}
            onClick={() => navigate(`/insight-data/${data._id}`)}
          >
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
                <Typography className="text-black font-workSans font-semibold text-xl">
                  {truncateString(data?.title, 20) ||
                    "The Global Economic Impacts of AI"}
                </Typography>
                
                <Typography className="text-gray-500 font-workSans font-normal text-lg">
                  {truncateString(data?.description, 30)}
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </LandingLayout>
  );
}
