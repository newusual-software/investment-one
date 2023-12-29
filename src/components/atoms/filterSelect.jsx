import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays, format } from "date-fns";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function FilterSelect({onDateRangeChange }) {
  const [isDateRangePickerVisible, setDateRangePickerVisibility] =
    useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [selectedButtonText, setSelectedButtonText] =
    useState("Filter by Date");

  const toggleDateRangePicker = () => {
    setDateRangePickerVisibility(!isDateRangePickerVisible);
  };

  const handleDateRangeChange = (item) => {
    const newDateRange = [item.selection];
    setDateRange(newDateRange);

    // Format the start and end dates and set the button text
    const formattedStartDate = format(newDateRange[0].startDate, "MM/dd/yyyy");
    const formattedEndDate = format(newDateRange[0].endDate, "MM/dd/yyyy");
    setSelectedButtonText(`${formattedStartDate} - ${formattedEndDate}`);
    onDateRangeChange(item);
    toggleDateRangePicker(); // Close the picker after selecting a range
  };

  return (
    <div className="relative block">
      <button
        type="button"
        className="w-full flex items-center px-4 py-2 gap-3 text-sm font-medium text-gray-700 rounded-md border-orange border-2 "
        id="options-menu"
        onClick={toggleDateRangePicker}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>
        </div>
        <div>{selectedButtonText}</div>
        <div>{<ChevronDownIcon className="w-[1.5rem]" />}</div>
      </button>

      {isDateRangePickerVisible && (
        <div className="absolute -right-0 mt-2 rounded-md shadow-lg bg-orange ring-1 ring-black ring-opacity-5">
          <DateRangePicker
            onChange={handleDateRangeChange}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={dateRange}
            direction="horizontal"
            preventSnapRefocus={true}
            calendarFocus="backwards"
            style={{ width: "200px" }}
          />
        </div>
      )}
    </div>
  );
}
