import { useEffect, useState } from "react";
import { truncateString } from "../../../lib/utils/truncateString";
import { client } from "../../../services/sanity/sanityClient";

const dataa = [
  {
    newsImage: "",
    newsTitle: "title analyst news one",
    newsDes: "Lorem ipsum dolor sit ",
  },
  {
    newsImage: "",
    newsTitle: "title analyst news one",
    newsDes: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sitt",
  },
  {
    newsImage: "",
    newsTitle: "title analyst news one",
    newsDes:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sitt sit amet consectetur Lorem ipsum dolor sitt sit amet consectetur Lorem ipsum dolor sitt sit amet consectetur Lorem ipsum dolor sittsit amet consectetur Lorem ipsum dolor sitt",
  },
  {
    newsImage: "",
    newsTitle: "title analyst news one",
    newsDes: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sitt",
  },
];

export default function AnalystView() {
  const [data, setData] = useState([] || dataa)
  useEffect(() => {
    // Define the query to fetch the chart data
    const query = `*[_type == "analystView"][]
      {
        title,
        description,
        content,
        "imageUrl": coverImage.asset->url
      }
  `;

    // Execute the query
    client.fetch(query)
      .then(data => {
        // Set the fetched data to the state
        setData(data)
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <div
      className="mt-8 max-h-[450px] overflow-y-auto
    [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-gray-100
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    dark:[&::-webkit-scrollbar-track]:bg-slate-700
    dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
    >
      {data.map((data, index) => (
        <div
          key={index}
          className="w-[408px] h-[127px] bg-white flex-col justify-start items-start gap-2 inline-flex"
        >
          <div className="w-[392px] justify-start items-start gap-[11px] inline-flex">
            <img
              className="w-[100px] h-[100px] relative rounded-[10px]"
              src={data.imageUrl}
            />
            <div className="grow shrink basis-0 flex-col justify-center items-end inline-flex">
              <div className="self-stretch h-[79px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-neutral-800 text-xl font-medium font-workSans">
                  {data.title}
                </div>
                <div className="self-stretch text-zinc-600 text-sm font-normal font-workSans tracking-tight">
                  {data.description.length > 90
                    ? truncateString(data.description, 92)
                    : data.description}
                </div>
              </div>
              <button className=" bg-orange w-[6.6rem] h-[2.3rem] rounded-[10px] justify-center items-center inline-flex text-white text-sm font-medium font-workSans">
                Read Article
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
