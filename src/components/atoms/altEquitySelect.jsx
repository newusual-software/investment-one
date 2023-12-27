import { Select, Option } from "@material-tailwind/react";

export function AltEquitiesSelect({ selectedOption, onChange }) {
  return (
    <div className="w-[15rem]">
      <Select
        className="border-2 border-orange capitalize font-workSans font-bold border-t-none shadow-none"
        value={selectedOption}
        onChange={onChange}
      >
        <Option value="company-report" className="capitalize font-workSans font-bold">company report & Outlook</Option>
        <Option value="initial-impression" className="capitalize font-workSans font-bold">Initial Impression</Option>
      </Select>
    </div>
  );
}
