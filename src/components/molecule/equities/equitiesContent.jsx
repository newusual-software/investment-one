import { useState } from "react";
import FiscalChart from "../../charts/fiscalChart";
import InflationChart from "../../charts/inflationChart";

import { EquitiesSelect } from "../../atoms/equitySelect";
import NSEASIChart from "../../charts/nse-asi";

export function EquitiesContent() {
  const [selectedOption, setSelectedOption] = useState("NSE-ASI");

  const handleSelectChange = (newOption) => {
    setSelectedOption(newOption);
    // Reset the visibility when the option changes
  };

  const renderSelectedComponent = () => {
    const optionLowerCase = selectedOption ? selectedOption.toLowerCase() : "";


      // Render the corresponding chart component based on the selected option
      switch (optionLowerCase) {
        case "nse-asi":
          return <NSEASIChart />;
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
      <div className="w-full justify-between items-center flex">
        <div>
          {/* Pass the onChange prop to SelectWithComponents */}
          <EquitiesSelect
            selectedOption={selectedOption}
            onChange={handleSelectChange}
          />
        </div>
        
      </div>
      <div className="mt-8">
       <hr /> 
      </div>
      
      <div className="">{renderSelectedComponent()}</div>
    </div>
  );
}
