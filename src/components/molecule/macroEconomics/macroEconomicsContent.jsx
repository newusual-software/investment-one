import { SelectDefault } from "../../atoms/select";
import MacroEconomicsGpdChart from "../../charts/macroEconomicsGpdChart";

export function MacroEconomicsContent() {
  return (
    <div className="w-full">
      <div className="w-full justify-between gap-96 items-center flex">
        <div>
          <SelectDefault />
        </div>
        <div>
          <button className="px-5 py-2.5 bg-orange rounded-[10px] justify-center items-center gap-2 flex">
            <div className="text-center text-white text-base font-normal font-workSans leading-snug tracking-wide">
              View All
            </div>
          </button>
        </div>
      </div>
      <MacroEconomicsGpdChart />
    </div>
  );
}
