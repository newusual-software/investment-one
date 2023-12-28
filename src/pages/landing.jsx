import Equities from "../components/landingSection/equities";
import FixedIncome from "../components/landingSection/fixedIncome";
import ForeignExchange from "../components/landingSection/foreignExchange";
import MacroEconomics from "../components/landingSection/macroEconomics";
import StockRecomendation from "../components/news/stockRecomendation";
import DefaultLayout from "../layouts/defaultLayout";

export default function Landing() {
  return (
    <DefaultLayout>
      <StockRecomendation />
      <div className="px-10">
        <div>
          <MacroEconomics />
        </div>
        <div>
          <Equities />
        </div>
        <div>
          <FixedIncome/>
        </div>
        <div>
          <ForeignExchange/>
        </div>
      </div>
    </DefaultLayout>
  );
}
