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
  const navigate = useNavigate();

  const handleMarketDataToggle = () => {
    setMarketDataOpen((prevState) => !prevState);
  };

  return (
    <div className=" sticky top-0 left-0 h-max w-32 min-w-[4rem]  shadow-xl flex justify-center items-start pl-24 shadow-blue-gray-900/5 bg-orange">
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
            className={`py-4 z-[999] rounded-xl shadow-2xl font-workSans absolute bg-white  left-32 w-[15rem] -top-14 ${
              !marketDataOpen && "hidden"
            }`}
          >
            <List className="p-0">
              <ListItem onClick={() => navigate("/market-data")}>
                Macro
                <ListItemSuffix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                Fisca
                <ListItemSuffix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                Equities
                <ListItemSuffix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                Fixed Income
                <ListItemSuffix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                FX
                <ListItemSuffix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemSuffix>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </div>
  );
}
