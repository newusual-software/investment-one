import { useState } from "react";
import { EquitiesSelect } from "../../atoms/equitySelect";
import NSEASIChart from "../../charts/nse-asi";
import { AgroOutlook } from "../outlooks/agroOutlook";
import { AltEquitiesSelect } from "../../atoms/altEquitySelect";
import { Banking } from "../outlooks/banking";
import { InitialImpression } from "../outlooks/initialImpression";
export function EquitiesContent() {
  const [selectedOption, setSelectedOption] = useState("NSE-ASI");
  const [altSelectedOption, setAltSelectedOption] = useState("company-report");

  const handleSelectChange = (newOption) => {
    setSelectedOption(newOption);
  };
  
  const handleAltSelectChange = (newOption) => {
    setAltSelectedOption(newOption);
  };

  const optionLowerCase = selectedOption ? selectedOption.toLowerCase() : "";

  const renderSelectedComponent = () => {
    switch (optionLowerCase) {
      case "nse-asi":
        return <NSEASIChart />;
      case "agro":
        return <AgroOutlook />;
      
      default:
        // Check altSelectedOption for rendering components
        switch (altSelectedOption) {
          case "company-report":
            return <Banking />;
          case "initial-impression":
            return <InitialImpression/>;
          // Add more cases for other altSelectedOption values
          default:
            return null;
        }
    }
  };

  return (
    <div className="w-full h-[23rem]">
      <div>
        {(optionLowerCase === "agro" || optionLowerCase === "nse-asi") && (
          <EquitiesSelect
            selectedOption={selectedOption}
            onChange={handleSelectChange}
          />
        )}
        {!(optionLowerCase === "agro" || optionLowerCase === "nse-asi") && (
          <div className="flex gap-24 my-4">
            <EquitiesSelect
              selectedOption={selectedOption}
              onChange={handleSelectChange}
            />
            <AltEquitiesSelect
              selectedOption={altSelectedOption}
              onChange={handleAltSelectChange}
            />
          </div>
        )}
      </div>
      <div className="mt-8">
        <hr />
      </div>
      <div className="">{renderSelectedComponent()}</div>
    </div>
  );
}
