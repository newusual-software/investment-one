import { useEffect, useState } from "react";
import { Button, Dialog } from "@material-tailwind/react";
import { client } from "../../../services/sanity/sanityClient";

export function FixedIncomeOutlook() {
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfData, setPdfData] = useState([]);

  useEffect(() => {
    // Define the query to fetch the chart data
    const query = `*[_type == "fixedIncomeOutlook"]{
      pdfs[]{
        title,
        "fileUrl": file.asset->url,
        "imageUrl": image.asset->url
      }
    }`;

    // Execute the query
    client.fetch(query)
      .then(data => {
        // Set the fetched data to the state
        setPdfData(data[0]?.pdfs || []);
      })
      .catch(error => console.error(error));
  }, []);
  
  const handleOpen = (pdf) => {
    setSelectedPdf(pdf);
    setOpen(true);
  };

  return (
    <div>
      <ul className="flex my-4 flex-col px-4 max-h-[400px] overflow-y-auto">
        {pdfData.map((pdf, index) => (
          <li key={index} className="flex py-5 justify-between items-center">
            <div className="flex gap-3">
              <div>
                {/* Render the image from Sanity.io */}
                <img src={pdf.imageUrl} alt={`${pdf.title} Image`} className="w-[5.5rem] h-[5.5rem] rounded-md"/>
              </div>
              <div>
                <h2 className="font-bold font-workSans text-xl text-black">{pdf.title}</h2>
              </div>
            </div>
            <div>
              <Button onClick={() => handleOpen(pdf)} className="bg-orange">
                Preview
              </Button>
            </div>
          </li>
        ))}
      </ul>
      {selectedPdf && (
        <Dialog open={open} handler={() => setOpen(false)} size="xl">
          <div className="flex mx-auto justify-center items-center h-full">
            {/* Render the PDF file from Sanity.io */}
            <iframe src={selectedPdf.fileUrl} title={selectedPdf.title} width="100%" height="600px" />
          </div>
        </Dialog>
      )}
    </div>
  );
}
