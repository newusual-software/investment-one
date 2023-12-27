import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function TabsWithIcon({data,activeTabValue}) {
  const [activeTab, setActiveTab] = useState(activeTabValue);

  return (
    <Tabs value={activeTab} className="w-full shadow-lg rounded">
      <TabsHeader
        className="rounded-none border-t border-blue-gray-50 bg-transparent p-0 h-14"
        indicatorProps={{
          className:
            "bg-transparent border-t-2  border-orange shadow-none rounded-none py-6 ",
        }}
      >
        {data.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-orange bg-white" : "bg-[#E0E0E0]"}
          >
            <div className="flex flex-row gap-2">
              <div>{React.createElement(icon, { className: "w-5 h-5" })}</div>
              <div className="font-semibold font-workSans text-lg">{label}</div>
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="w-[38rem]">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
