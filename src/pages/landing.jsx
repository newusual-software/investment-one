import Equities from "../components/landingSection/equities";
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
      </div>
    </DefaultLayout>
  );
}
