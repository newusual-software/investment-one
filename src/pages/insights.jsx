import { useEffect, useState } from 'react';
import axios from 'axios';
import AltLayout from "../layouts/altLayout";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
export default function Insights() {
  // You can receive the selectedStartDate and selectedEndDate as props here
  const [active, setActive] = useState(1);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/random`, {
          params: {
            query: "finance",
            count: 1, // Number of images to retrieve
            client_id: 'Ei5L_WMwdu5qTDzm6UuWKChYUzdpGfpPMABrDr5zU4c',
            w: 800,
            h:600
          },
        });

        const randomImage = response.data[0];
        setImageUrl(randomImage.urls.regular);
      } catch (error) {
        console.error('Error fetching random image:', error);
      }
    };

    fetchRandomImage();
  }, []);

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  const handleLoadMore = () => {
    alert("working");
  };

  //   const YourComponent = ({ selectedstartdate, selectedenddate }) => {
  //     // Your component logic using selectedStartDate and selectedEndDate
  //     return (
  //       <div>
  //         <p>
  //           Start Date:{" "}
  //           {selectedstartdate !== null ? (
  //             selectedstartdate.toString()
  //           ) : (
  //             <span>test</span>
  //           )}
  //         </p>
  //         <p>
  //           Start Date:{" "}
  //           {selectedenddate !== null ? (
  //             selectedenddate.toString()
  //           ) : (
  //             <span>test</span>
  //           )}
  //         </p>
  //       </div>
  //     );
  //   };

  return (
    <AltLayout
      title="Morning Insight"
      next={next}
      prev={prev}
      active={active}
      handleLoadMore={handleLoadMore}
    >
      {/* Pass your custom component with the received props */}
      {/* <YourComponent /> */}
      <div className="grid grid-cols-4">
        <div>
          <Card className="mt-6 w-80">
            <CardHeader color="blue-gray" className="relative h-58">
            {imageUrl && <img src={imageUrl} alt={`Random Image`} className=" h-1/2 object-cover"/>}
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="mb-3 text-|orange">
                MORNING INSIGHT 270623
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-end">
 
        <Typography className="font-normal">January 10</Typography>
      </CardFooter>
          </Card>
        </div>
      </div>
    </AltLayout>
  );
}
