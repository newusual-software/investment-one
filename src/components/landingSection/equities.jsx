import { TabsWithIcon } from "../molecule/tab/tab";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { EquitiesContent } from "../molecule/equities/equitiesContent";
import { EquitiesOutlook } from "../molecule/equities/equityOutlook";
import { useEffect, useState } from "react";
import { client } from "../../services/sanity/sanityClient";
export default function Equities() {
  const [graphData, setGraphData] = useState({});

  const data = [
    {
      label: "Equities",
      value: "Equities",
      icon: ChartBarIcon,
      desc: <EquitiesContent />,
    },
    {
      label: "Outlook",
      value: "Outlook",
      icon: ListBulletIcon,
      desc: <EquitiesOutlook />,
    },
  ];
  useEffect(() => {
    // Define the query to fetch the chart data
    const query = `*[_type == "nseAsiChart"]{
        title,
        "imageUrl": coverImage.asset->url
      }
    `;

    // Execute the query
    client.fetch(query)
      .then(data => {
        // Set the fetched data to the state
        setGraphData(data[0]);
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <div className="my-14  w-full">
      <div className="py-4 text-neutral-800 text-[32px]  font-medium font-workSans">
        {graphData?.title || "Equities"}
      </div>
      <div className="flex gap-4 flex-row ">
        <div className=" w-[40%] ">
          <img
            src={graphData?.imageUrl || "https://res.cloudinary.com/phantom1245/image/upload/v1703172024/investment-one/Frame_46_miz12y.png"}
            alt="equities image"
          />
        </div>
        <div className="w-[60%] flex flex-col gap-10 items-start">
          <div>
            <TabsWithIcon data={data} activeTabValue={"Equities"} />
          </div>
        </div>
      </div>
    </div>
  );
}
