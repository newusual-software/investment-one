import {
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
  ListItemSuffix,
} from "@material-tailwind/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Sidebar() {
  const [marketDataOpen, setMarketDataOpen] = useState(false);
  const [macroOpen, setMacroOpen] = useState(false);
  const [fiscalOpen, setFiscalOpen] = useState(false);
  const [equityOpen, setEquityOpen] = useState(false);
  const [fixedIncomeOpen, setFixedIncomeOpen] = useState(false);
  const navigate = useNavigate();

  const handleMarketDataToggle = () => {
    setMarketDataOpen((prevState) => !prevState);
    setMacroOpen(false);
    setFiscalOpen(false);
    setEquityOpen(false);
    setFixedIncomeOpen(false);
  };

  const handleMacroToggle = () => {
    setMacroOpen((prevState) => !prevState);
    setFiscalOpen(false);
    setEquityOpen(false);
    setFixedIncomeOpen(false);
  };

  const handleFiscalToggle = () => {
    setFiscalOpen((prevState) => !prevState);
    setMacroOpen(false);
    setEquityOpen(false);
    setFixedIncomeOpen(false);
  };
  const handleEquityToggle = () => {
    setEquityOpen((prevState) => !prevState);
    setMacroOpen(false);
    setFiscalOpen(false);
    setFixedIncomeOpen(false);
  };
  const handleFixedIncomeToggle = () => {
    setFixedIncomeOpen((prevState) => !prevState);
    setEquityOpen(false);
    setMacroOpen(false);
    setFiscalOpen(false);
  };

  return (
    <div className="z-[999] sticky top-0 left-0 h-max w-32 min-w-[4rem] shadow-xl flex justify-center items-start pl-24 shadow-blue-gray-900/5 bg-orange">
      <List className="static">
        <ListItem
          onClick={() => navigate("/research-portal")}
          className="flex text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center"
        >
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703179623/investment-one/mdi-light_home_dvqoxd.svg" />
          </div>
          home
        </ListItem>
        <ListItem
          onClick={() => navigate("/insight")}
          className="flex text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center"
        >
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703179552/investment-one/fluent_weather-hail-day-20-regular_v0svpg.svg" />
          </div>
          Morning Insight
        </ListItem>
        <ListItem
          onClick={() => navigate("/equity-price-list")}
          className="flex text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center"
        >
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703179567/investment-one/ri_file-list-3-line_wxtkfb.svg" />
          </div>
          Equity Price List
        </ListItem>
        <Accordion
          open={marketDataOpen}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto relative left-11 bottom-8 h-4 w-4 transition-transform ${
                marketDataOpen ? "-rotate-90" : ""
              }`}
            />
          }
          className="w-[8rem] outline-none relative border-none"
        >
          <ListItem
            className="p-0 outline-none border-none"
            selected={marketDataOpen}
          >
            <AccordionHeader
              onClick={handleMarketDataToggle}
              className="flex outline-none border-none text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center"
            >
              <div>
                <img
                  src="https://res.cloudinary.com/phantom1245/image/upload/v1703179551/investment-one/fluent_data-bar-vertical-24-regular_axmtio.png"
                  alt="Market Data"
                />
              </div>
              Market Data
            </AccordionHeader>
          </ListItem>
          <AccordionBody
            className={`py-4 rounded-xl shadow-2xl font-workSans absolute bg-white left-32 w-[13rem] -top-14 ${
              !marketDataOpen && "hidden"
            }`}
          >
            <List className="">
              <Accordion
                open={macroOpen}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto relative left-11 bottom-8 h-4 w-4 transition-transform ${
                      macroOpen ? "-rotate-90" : ""
                    }`}
                  />
                }
                className="w-[8rem] outline-none relative border-none"
              >
                <ListItem
                  className="w-48"
                  selected={macroOpen}
                  onClick={handleMacroToggle}
                >
                  Macro
                  <ListItemSuffix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemSuffix>
                </ListItem>
                <AccordionBody
                  className={`py-4 rounded-xl shadow-2xl font-workSans absolute bg-white left-52 w-[15rem] -top-14 ${
                    !macroOpen && "hidden"
                  }`}
                >
                  <List className="p-0">
                    <ListItem onClick={() => navigate("/macro/gdp")}>
                      GDP
                    </ListItem>
                    <ListItem onClick={() => navigate("/macro/inflation")}>
                      Inflation
                    </ListItem>
                    <ListItem
                      onClick={() => navigate("/macro/monetary-policy")}
                    >
                      Monetary Policy
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={fiscalOpen}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto relative left-9 bottom-8 h-4 w-4 transition-transform ${
                      fiscalOpen ? "-rotate-90" : ""
                    }`}
                  />
                }
                className=" outline-none relative border-none"
              >
                <ListItem
                  selected={fiscalOpen}
                  onClick={handleFiscalToggle}
                  className="w-48"
                >
                  fiscal
                  <ListItemSuffix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemSuffix>
                </ListItem>
                <AccordionBody
                  className={`py-4 rounded-xl shadow-2xl font-workSans absolute bg-white left-52 w-[15rem] -top-14 ${
                    !fiscalOpen && "hidden"
                  }`}
                >
                  <List className="p-0">
                    <ListItem onClick={() => navigate("/fiscal/budget")}>
                      Budget
                    </ListItem>
                    <ListItem
                      onClick={() => navigate("/fiscal/capital-importation")}
                    >
                      Capital Importation
                    </ListItem>
                    <ListItem onClick={() => navigate("/fiscal/fdi-inflows")}>
                      FDI Inflows
                    </ListItem>
                    <ListItem onClick={() => navigate("/fiscal/tax")}>
                      Tax
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={equityOpen}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto relative left-9 bottom-8 h-4 w-4 transition-transform ${
                      equityOpen ? "-rotate-90" : ""
                    }`}
                  />
                }
                className=" outline-none relative border-none"
              >
                <ListItem
                  selected={equityOpen}
                  onClick={handleEquityToggle}
                  className="w-48"
                >
                  Equities
                  <ListItemSuffix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemSuffix>
                </ListItem>
                <AccordionBody
                  className={`py-2 rounded-xl shadow-2xl font-workSans absolute bg-white left-52 w-[15rem] -top-14 ${
                    !equityOpen && "hidden"
                  }`}
                >
                  <List className="p-0">
                    <ListItem
                      className="py-2"
                      onClick={() => navigate("/equity/sector-reports")}
                    >
                      sector reports
                    </ListItem>
                    <ListItem
                      className="py-2"
                      onClick={() => navigate("/equity/⁠company-reports")}
                    >
                      ⁠company reports
                    </ListItem>
                    <ListItem
                      className="py-2"
                      onClick={() => navigate("/equity/corporate-actions")}
                    >
                      corporate actions
                    </ListItem>
                    <ListItem
                      className="py-2"
                      onClick={() => navigate("/equity/results")}
                    >
                      results
                    </ListItem>
                    <ListItem
                      className="py-2"
                      onClick={() => navigate("/equity/present-company-prices")}
                    >
                      present company prices (from infoware API)
                    </ListItem>
                    <ListItem
                      className="py-2"
                      onClick={() => navigate("/equity/asi-graphs")}
                    >
                      ASI graph
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={fixedIncomeOpen}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto relative left-9 bottom-8 h-4 w-4 transition-transform ${
                      fixedIncomeOpen ? "-rotate-90" : ""
                    }`}
                  />
                }
                className=" outline-none relative border-none"
              >
                <ListItem
                  selected={fixedIncomeOpen}
                  onClick={handleFixedIncomeToggle}
                  className="w-48"
                >
                  Fixed Income
                  <ListItemSuffix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemSuffix>
                </ListItem>
                <AccordionBody
                  className={`py-4 rounded-xl shadow-2xl font-workSans absolute bg-white left-52 w-[15rem] -top-14 ${
                    !fixedIncomeOpen && "hidden"
                  }`}
                >
                  <List className="p-0">
                    <ListItem
                      onClick={() => navigate("/fixed-income/t-bill-graph")}
                    >
                      T bills graph
                    </ListItem>
                    <ListItem
                      onClick={() => navigate("/fixed-income/bonds-graph")}
                    >
                      bonds graph
                    </ListItem>
                    <ListItem
                      onClick={() => navigate("/fixed-income/fdi-inflows")}
                    >
                      ⁠auction results
                    </ListItem>
                    <ListItem onClick={() => navigate("/fixed-income/tax")}>
                      reports
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem
          onClick={() => navigate("/daily-market-report")}
          className="flex text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center"
        >
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703179551/investment-one/fluent_data-area-20-regular_amykal.svg" />
          </div>
          Daily Market Report
        </ListItem>
        <ListItem
          onClick={() => navigate("/weekly-market-report")}
          className="flex text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center"
        >
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703179551/investment-one/fluent_data-area-20-regular_amykal.svg" />
          </div>
          Weekly Market Report
        </ListItem>
        <ListItem
          onClick={() => navigate("/monthly")}
          className="flex text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center"
        >
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703179551/investment-one/fluent_data-area-20-regular_amykal.svg" />
          </div>
          Monthly Market Report
        </ListItem>
      </List>
    </div>
  );
}
