import AnalystView from "../molecule/macroEconomics/analystView";
import { MacroEconomicsContent } from "../molecule/macroEconomics/macroEconomicsContent";
import { TabsWithIcon } from "../molecule/tab/tab";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import Outlook from "../molecule/macroEconomics/outlook";
export default function MacroEconomics() {
  const data = [
    {
      label: "Macro-Economics",
      value: "MacroEconomics",
      icon: ChartBarIcon,
      desc: <MacroEconomicsContent />,
    },
    {
      label: "Outlook",
      value: "Outlook",
      icon: ListBulletIcon,
      desc: <Outlook />,
    },
  ];
  return (
    <div className="flex my-10 gap-4 flex-row w-full">
      <div className="w-[60%] flex flex-col gap-10 items-start">
        <div className="text-center text-neutral-800 text-[32px] font-medium font-workSans">
          Macro-Economics
        </div>
        <div>
          <TabsWithIcon data={data} activeTabValue={"MacroEconomics"}/>
        </div>
      </div>
      <div className=" w-[40%] ">
        <div className=" justify-between gap-8 my-2 items-start flex">
          <div className="grow shrink basis-0 justify-start items-center gap-1 flex">
            <div>
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1703202730/investment-one/openmoji_wifi_ixewgq.png"
                alt="wifi"
              />
            </div>
            <div className="text-center text-neutral-800 text-[22px] font-medium font-workSans">
              Analyst View
            </div>
          </div>
          <button className="px-5 border-none outline-non py-2.5 bg-orange rounded-[10px] justify-center items-center gap-2 flex">
            <div className="text-center text-white text-base font-normal font-workSans leading-snug tracking-wide">
              View All
            </div>
          </button>
          <br />
        </div>
        <AnalystView />
      </div>
    </div>
  );
}
