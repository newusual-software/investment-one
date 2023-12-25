import { useState } from "react";
import { SelectWithComponents } from "../../atoms/select";
import MacroEconomicsGpdChart from "../../charts/macroEconomicsGpdChart";
import FiscalChart from "../../charts/fiscalChart";
import InflationChart from "../../charts/inflationChart";
import GdpReport from "../../reports/gdpReport";
import FiscalReport from "../../reports/fiscalReport";
import InflationReport from "../../reports/inflationReport";

export function MacroEconomicsContent() {
  const [selectedOption, setSelectedOption] = useState("GDP");
  const [isReportVisible, setIsReportVisible] = useState(false);

  const handleSelectChange = (newOption) => {
    setSelectedOption(newOption);
    // Reset the visibility when the option changes
    setIsReportVisible(false);
  };

  const handleViewReportClick = () => {
    // Toggle the visibility of the selected component
    setIsReportVisible((prev) => !prev);
  };

  const renderSelectedComponent = () => {
    const optionLowerCase = selectedOption ? selectedOption.toLowerCase() : "";

    if (isReportVisible) {
      switch (optionLowerCase) {
        case "gdp":
          return <GdpReport />;
        case "fiscal":
          return <FiscalReport/>;
        case "inflation":
          return <InflationReport />;
        default:
          return null;
      }
    } else {
      // Render the corresponding chart component based on the selected option
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
          <button
            onClick={handleViewReportClick}
            className="w-[8.5rem] outline-none border-none py-2.5 bg-orange rounded-[10px] justify-center items-center gap-2 flex"
          >
            <div className="text-center text-white text-base font-normal font-workSans leading-snug tracking-wide">
              View Reports
            </div>
          </button>
        </div>
      </div>
      <div className="mt-8">
       <hr /> 
      </div>
      
      <div className="">{renderSelectedComponent()}</div>
    </div>
  );
}
