import { useState } from "react";
import { FxSelect } from "../../atoms/fxSelect";
import InterBankChart from "../../charts/interBankRate";
import ParallelMarketRateChart from "../../charts/parallelMarketRate";
import IEFXChart from "../../charts/iefx";
import MovementInReserveChart from "../../charts/movementInReserve";

export function FxContent() {
  const [selectedOption, setSelectedOption] = useState("Interbank-Rate");

  const handleSelectChange = (newOption) => {
    setSelectedOption(newOption);
  };
 
  const optionLowerCase = selectedOption ? selectedOption.toLowerCase() : "";

  const renderSelectedComponent = () => {
    switch (optionLowerCase) {
      case "interbank-rate":
        return <InterBankChart />;
      case "parallel-market-rate":
        return <ParallelMarketRateChart />; 
      case "iefx":
        return <IEFXChart />;       
      case "movement-in-reserve":
        return <MovementInReserveChart />;
        
      default:
        return null
        
    }
  };

  return (
    <div className="w-full h-[23rem]">
      <div>
          <FxSelect
            selectedOption={selectedOption}
            onChange={handleSelectChange}
          />
      </div>
      <div className="mt-8">
        <hr />
      </div>
      <div className="">{renderSelectedComponent()}</div>
    </div>
  );
}
