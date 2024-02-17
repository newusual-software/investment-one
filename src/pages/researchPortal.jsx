import Equities from "../components/landingSection/equities";
import FixedIncome from "../components/landingSection/fixedIncome";
import ForeignExchange from "../components/landingSection/foreignExchange";
import MacroEconomics from "../components/landingSection/macroEconomics";
import DefaultLayout from "../layouts/defaultLayout";

export default function ResearchPortal() {
  return (
    <DefaultLayout>
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
    </DefaultLayout>
  );
}
