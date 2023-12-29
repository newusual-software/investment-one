import { useEffect, useState } from 'react';
import axios from 'axios';
import AltLayout from "../layouts/altLayout";
import { Dialog } from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { pdfData } from '../data/pdf';


export default function MonthlyReport() {
  const [active, setActive] = useState(1);
  const [imageUrls, setImageUrls] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 8;


  const handleOpen = (pdf) => {
    setSelectedPdf(pdf);
    setOpen(true);
  };

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/random`, {
          params: {
            query: "finance",
            count: pdfData.length, // Fetch a random image for each item in pdfData
            client_id: 'Ei5L_WMwdu5qTDzm6UuWKChYUzdpGfpPMABrDr5zU4c',
            orientation: "landscape"
          },
        });

        const randomImages = response.data.map((image) => image.urls.regular);
        setImageUrls(randomImages);
      } catch (error) {
        console.error('Error fetching random images:', error);
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
    <AltLayout
      title="Monthly Market "
      next={next}
      prev={prev}
      active={active}
      handleLoadMore={handleLoadMore}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {pdfData.slice(startIndex, endIndex).map((data, index) => (
          <div key={startIndex + index} onClick={() => handleOpen(data)}>
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
                <Typography className="mb-1 text-md font-workSans font-semibold text-orange">
                Monthly Market Report {data.date}
                </Typography>
                <Typography>
                  As the sun casts its first rays on the markets, let&apos;s
                  seize the day with a quick snapshot of fiscal possibilities.
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      {selectedPdf && (
        <Dialog open={open} handler={() => setOpen(false)} size="xl">
          <div className="flex mx-auto justify-center items-center h-full">
            <iframe
              src={selectedPdf.file_link}
              title={selectedPdf.title}
              width="100%"
              height="600px"
            />
          </div>
        </Dialog>
      )}
    </AltLayout>
  );
}
