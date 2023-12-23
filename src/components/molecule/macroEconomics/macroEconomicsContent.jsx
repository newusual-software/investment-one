import  { useState } from "react";
import { SelectWithComponents } from "../../atoms/select";
import MacroEconomicsGpdChart from "../../charts/macroEconomicsGpdChart";
import FiscalChart from "../../charts/fiscalChart";
import InflationChart from "../../charts/inflationChart";

export function MacroEconomicsContent() {
  const [selectedOption, setSelectedOption] = useState("GDP");

  const handleSelectChange = (newOption) => {
    setSelectedOption(newOption);
  };

  const renderSelectedComponent = () => {
    const optionLowerCase = selectedOption ? selectedOption.toLowerCase() : '';

    switch (optionLowerCase) {
      case "gdp":
        return <MacroEconomicsGpdChart />;
      case "fiscal":
        return <FiscalChart />;
      case "inflation":
        return <InflationChart />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="w-full justify-between gap-96 items-center flex">
        <div>
          {/* Pass the onChange prop to SelectWithComponents */}
          <SelectWithComponents
            selectedOption={selectedOption}
            onChange={handleSelectChange}
          />
        </div>
        <div>
          <button className="w-[8rem] py-2.5 bg-orange rounded-[10px] justify-center items-center gap-2 flex">
            <div className="text-center text-white text-base font-normal font-workSans leading-snug tracking-wide">
              View Reports
            </div>
          </button>
        </div>
      </div>
      <div className="mt-4">
        {renderSelectedComponent()}
      </div>
    </div>
  );
}
