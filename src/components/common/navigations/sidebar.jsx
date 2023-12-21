import React from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const navigate = useNavigate()

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className=" h-[calc(100vh+14rem)] w-32 min-w-full  shadow-xl flex justify-center items-start pl-24 shadow-blue-gray-900/5 bg-orange">
      <List >
        <ListItem onClick={() => navigate("/")}  className="flex text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center">
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703179623/investment-one/mdi-light_home_dvqoxd.svg" />
          </div>
          home
        </ListItem>
        <ListItem onClick={() => navigate("/morning-insight")}  className="flex text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center">
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703179552/investment-one/fluent_weather-hail-day-20-regular_v0svpg.svg" />
          </div>
          Morning Insight
        </ListItem>
        <ListItem onClick={() => navigate("/equity-price-list")}  className="flex text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center">
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703179567/investment-one/ri_file-list-3-line_wxtkfb.svg" />
          </div>
          Equity Price List
        </ListItem>
        <ListItem onClick={() => navigate("/daily-market-report")}   className="flex text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center">
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703179551/investment-one/fluent_data-area-20-regular_amykal.svg" />
          </div>
          Daily Market Report
        </ListItem>
        <ListItem onClick={() => navigate("/weekly-market-report")}   className="flex text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center">
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703179551/investment-one/fluent_data-area-20-regular_amykal.svg" />
          </div>
          Weekly Market Report
        </ListItem>
        <ListItem onClick={() => navigate("/monthly")}  className="flex text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center">
          <div>
            <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703179551/investment-one/fluent_data-area-20-regular_amykal.svg" />
          </div>
          Monthly Market Report
        </ListItem>

        <Accordion
          open={open === 1}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto relative left-11 bottom-8 h-4 w-4 transition-transform ${
                open === 1 ? "rotate-90" : ""
              }`}
            />
          }
          className="w-[8rem] outline-none relative border-none"
        >
          <ListItem
            className="p-0 outline-none border-none"
            selected={open === 1}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="flex outline-none border-none text-[13px] text-white w-[8rem] text-center flex-col justify-center items-center"            >
              <div>
                <img
                  src="https://res.cloudinary.com/phantom1245/image/upload/v1703179551/investment-one/fluent_data-bar-vertical-24-regular_axmtio.png"
                  alt="Market Data"
                />
              </div>
              
                Market Data
            
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </div>
  );
}
