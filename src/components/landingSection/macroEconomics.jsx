import { TabsWithIcon } from "../molecule/tab/tab";

export default function MacroEconomics() {
  return (
    <div className="flex my-10 gap-4 flex-row w-full">
      <div className="w-[60%] flex flex-col gap-10 items-start">
        <div className="text-center text-neutral-800 text-[32px] font-medium font-workSans">
          Macro-Economics 
        </div>
        <div >
          <TabsWithIcon />
        </div>
      </div>
      <div className=" w-[40%] justify-between gap-8 items-start flex">
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
        <button className="px-5 py-2.5 bg-orange rounded-[10px] justify-center items-center gap-2 flex">
          <div className="text-center text-white text-base font-normal font-workSans leading-snug tracking-wide">
            View All
          </div>
        </button>
      </div>
    </div>
  );
}
