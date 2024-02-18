/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { pdfData } from "../data/pdf";
import LandingLayout from "../layouts/landingLayout";
import axios from "axios";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

export default function InsightData() {
    const [imageUrls, setImageUrls] = useState([]);
    const currentPage = 1
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
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  
  return (
    <LandingLayout>
      <div className="w-full bg-currentColor justify-around items-center p-14 flex ">
        <div className="gap-3 text-[#212323] w-1/2">
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
          <div>
            <button className="bg-orange w-[15rem] text-white rounded-lg py-3">
              Login
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1708258329/investment-one/cc987c405c0424bd1c571c5c69a3cabc_xvkic6.jpg"
            className="w-[80%] h-[30rem] rounded-tl-3xl rounded-br-3xl"
            alt=""
          />
        </div>
      </div>
      <div className=" px-52 pt-12 pb-32 rounded-lg">
        <h1 className="font-workSans text-xl py-3 font-semibold text-[#000]">
          Lorem ipsum dolor
        </h1>
        <div className="font-workSans text-[#2D2A26]">
          it amet consectetur. In pretium consectetur pellentesque eget pretium
          bibendum diam mattis mauris. Urna consectetur ipsum est sit aliquam
          pellentesque in a condimentum. Et velit tempor laoreet sollicitudin
          laoreet vel mauris. At morbi mi erat ultrices erat imperdiet semper.
          Tellus purus magna amet pharetra lacus. Senectus enim pharetra sit
          eleifend elementum quam sed venenatis. Vestibulum odio diam dolor id
          vulputate. Sed sed nunc aliquam malesuada turpis adipiscing ut morbi.
          Mattis sodales adipiscing ornare tristique elit felis vulputate. Ut
          volutpat pharetra nisi tristique. Adipiscing varius platea fringilla
          purus nisi sem donec quisque. Tristique sed dictum quis tincidunt
          pellentesque eu suspendisse. Augue nunc amet lorem orci hendrerit.
          Consequat amet sapien mattis tristique dolor fermentum turpis. Vel
          semper eu sed quis gravida. Convallis volutpat est in ac. Morbi risus
          pellentesque urna diam tellus pharetra in tristique.
        </div>
        <h1 className="font-workSans text-xl py-3 font-semibold text-[#000]">
          Risus erat nunc amet amet.
        </h1>
        <div className="font-workSans text-[#2D2A26]">
          Sed ac commodo diam ultricies adipiscing nam turpis eget. Pellentesque
          massa in et velit blandit nibh netus. Senectus arcu eget purus
          pharetra ac pulvinar. Diam nunc vitae sed tristique. Tristique nunc
          gravida donec nunc amet euismod. Diam tristique sed ut aliquet in.
          Accumsan netus sed facilisi maecenas. Maecenas quis mauris turpis et
          odio. Lacus turpis tortor porttitor mauris eget cras malesuada tortor.
          Adipiscing dictum purus enim donec euismod vitae nec. Egestas feugiat
          enim tincidunt euismod in massa. Eu vestibulum aliquam egestas ac
          ullamcorper tristique. Suspendisse risus suscipit tempus nulla
        </div>
        <h1 className="font-workSans text-xl py-3 font-semibold text-[#000]">
          Felis dui velit sed ipsum
        </h1>
        <div className="font-workSans text-[#2D2A26]">
          risus suspendisse massa cursus dignissim. Id et laoreet id non montes
          egestas blandit magna. Rhoncus tellus mi lacus interdum ultrices vitae
          diam diam non. Sit massa sit condimentum risus quam tortor. Ac
          elementum vulputate aliquam egestas. Dui faucibus suspendisse quisque
          est venenatis vel semper. Turpis malesuada in pharetra commodo in at a
          semper. Gravida sagittis nulla nunc erat curabitur sed aliquam
          blandit. Augue est urna accumsan mauris vel ullamcorper ornare morbi.
          Pretium ipsum rhoncus velit mollis arcu diam enim at nisl. Tortor eget
          faucibus lobortis nibh. Pharetra porttitor sit convallis hendrerit
          blandit maecenas donec at velit. Est ipsum feugiat non bibendum
          pharetra volutpat ac. Malesuada metus sed donec volutpat odio placerat
          pellentesque. Vel commodo magna nulla et nisl mattis proin viverra
          suspendisse. Posuere tellus tortor orci pellentesque id feugiat sed
          suspendisse. Bibendum nisl egestas vivamus iaculis eget turpis
          pellentesque. Ut cursus phasellus sit diam congue mi maecenas. Nunc
          nec urna ultrices mauris aenean. Lobortis condimentum elementum
          blandit laoreet odio eget adipiscing risus ut. Faucibus netus vitae
          vestibulum feugiat lectus duis semper libero dolor. Mauris ac lorem
        </div>
      </div>
      <div className="pl-20 text-black text-xl py-10 font-fontSans font-bold">
      Articles you may also like to read:
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-20 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-9">
        {pdfData.slice(0,4).map((data, index) => (
          <div key={startIndex + index}>
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
                <Typography className="mb-1 text-sm font-workSans font-semibold text-black">
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
    </LandingLayout>
  );
}
