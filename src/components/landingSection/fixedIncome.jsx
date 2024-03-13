import { TabsWithIcon } from "../molecule/tab/tab";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { BondYield } from "../molecule/fixedIncome/bondYield";
import { TBills } from "../molecule/fixedIncome/tBills";
import { FixedIncomeOutlook } from "../molecule/fixedIncome/fixedIncomeOutlook";
export default function FixedIncome() {
  const data = [
    {
      label: "Bond Yield",
      value: "Bond-yield",
      icon: ChartBarIcon,
      desc: <BondYield />,
    },
    {
      label: "T-Bills",
      value: "t-bills",
      icon: ChartBarIcon,
      desc: <TBills />,
    },
    {
      label: "Outlook",
      value: "Outlook",
      icon: ListBulletIcon,
      desc: <FixedIncomeOutlook />,
    },
  ];
  return (
    <div className="my-14  w-full">
      <div className="py-4 text-neutral-800 text-[32px]  font-medium font-workSans">
      Fixed Income
      </div>
      <div className="flex gap-4 flex-row ">
        <div className=" w-[40%] ">
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1703172023/investment-one/Frame_46_1_abaqv6.png"
            alt="Fixed Income image"
          />
        </div>
        <div className="w-[60%] flex flex-col gap-10 items-start">
          <div>
            <TabsWithIcon data={data} activeTabValue={"Bond-yield"} />
          </div>
        </div>
      </div>
    </div>
  );
}
