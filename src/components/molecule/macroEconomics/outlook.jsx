import { useState } from "react";
import GdpReportfile from "../../../assets/pdfs/Report.pdf";
import test2 from "../../../assets/pdfs/test-2.pdf";
import { Button, Dialog } from "@material-tailwind/react";

const pdfData = {
  pdfs: [
    {
      title: "Outlook Report 2023",
      image_link:
        "https://res.cloudinary.com/phantom1245/image/upload/v1703445036/investment-one/preview_rjwl0l.jpg",
      file_link: GdpReportfile,
    },
    {
      title: "Q4 2023 and FY GDP report",
      image_link: "https://example.com/sample_pdf2_image.jpg",
      file_link: test2,
    },
    {
      title: "Sample PDF 3",
      image_link: "https://example.com/sample_pdf3_image.jpg",
      file_link: "https://example.com/sample_pdf3.pdf",
    },
    {
      title: "Q4 2023 and FY GDP report",
      image_link: "https://example.com/sample_pdf2_image.jpg",
      file_link: test2,
    },
    {
      title: "Sample PDF 3",
      image_link: "https://example.com/sample_pdf3_image.jpg",
      file_link: "https://example.com/sample_pdf3.pdf",
    },
  ],
};

export function Outlook() {
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleOpen = (pdf) => {
    setSelectedPdf(pdf);
    setOpen(true);
  };

  return (
    <div>
      <ul className="flex my-4 flex-col px-4 max-h-[400px] overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-slate-700
  dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
        {pdfData.pdfs.map((pdf, index) => (
          <li key={index} className="flex py-5 justify-between  items-center">
            <div className="flex gap-3">
              <div>
                <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703460661/investment-one/preview_1_iu8bhh.jpg" alt={`${pdf.title} Image`} className="w-[5.5rem] h-[5.5rem] rounded-md"/>
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
            <iframe src={selectedPdf.file_link} title={selectedPdf.title} width="100%" height="600px" />
          </div>
        </Dialog>
      )}
    </div>
  );
}
