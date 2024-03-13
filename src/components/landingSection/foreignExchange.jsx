import { TabsWithIcon } from "../molecule/tab/tab";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { FxContent } from "../molecule/foreignExchange/fxContent";
import { ForeignExchangeOutlook } from "../molecule/foreignExchange/foreignExchangeOutlook";
export default function ForeignExchange() {
  const data = [
    {
      label: "Foreign Exchange",
      value: "foreignExchange",
      icon: ChartBarIcon,
      desc: <FxContent />,
    },
    {
      label: "Outlook",
      value: "Outlook",
      icon: ListBulletIcon,
      desc: <ForeignExchangeOutlook />,
    },
  ];
  return (
    <div className="my-14  w-full">
      <div className="py-4 text-neutral-800 text-[32px]  font-medium font-workSans">
        Foreign Exchange
      </div>
      <div className="flex gap-4 flex-row ">
        <div className=" w-[40%] ">
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1703172027/investment-one/Frame_46_2_xyylrp.png"
            alt="equities image"
          />
        </div>
        <div className="w-[60%] flex flex-col gap-10 items-start">
          <div>
            <TabsWithIcon data={data} activeTabValue={"foreignExchange"} />
          </div>
        </div>
      </div>
    </div>
  );
}
