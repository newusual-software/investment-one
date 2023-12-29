import { Button } from "@material-tailwind/react";
import { FilterSelect } from "../components/atoms/filterSelect";
import DefaultLayout from "./defaultLayout";
import React, { useState } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function AltLayout({ children, title, handleLoadMore, next, prev, active }) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleDateRangeChange = (item) => {
    const newDateRange = [item.selection];

    setSelectedStartDate(newDateRange[0].startDate);
    setSelectedEndDate(newDateRange[0].endDate);
  };

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      selectedstartdate: selectedStartDate,
      selectedenddate: selectedEndDate,
    })
  );

  return (
    <DefaultLayout>
      <div className="w-[full] h-[4rem] px-5 bg-white rounded shadow flex justify-between items-center">
        <div className=" items-center gap-2 flex">
          <div className="text-center text-[#212323] text-[22px] font-medium font-workSans">
            {title == null || "" ? "Equility Price List" : title}
          </div>
          <div className="text-center text-[#7B7B7B] text-base font-normal font-workSans">
            Report
          </div>
        </div>
        <div className="flex items-start justify-start gap-2 ">
          <FilterSelect onDateRangeChange={handleDateRangeChange} />
        </div>
      </div>
      <div className="my-12">{childrenWithProps}</div>
      <div className="w-[full] h-[4rem] px-5 bg-white rounded shadow flex justify-between items-center">
        <div className="flex items-center gap-8">
          <IconButton
            size="sm"
            variant="outlined"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          <Typography color="gray" className="font-normal">
            Page <strong className="text-gray-900">{active}</strong> of{" "}
            <strong className="text-gray-900">10</strong>
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            onClick={next}
            disabled={active === 10}
          >
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="flex items-start justify-start gap-2 ">
          <Button className="bg-orange" onClick={handleLoadMore}>Load more</Button>
        </div>
      </div>
    </DefaultLayout>
  );
}
