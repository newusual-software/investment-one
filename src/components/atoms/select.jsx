import { Select, Option } from "@material-tailwind/react";

export function SelectWithComponents({ selectedOption, onChange }) {
  return (
    <div className="w-32">
      <Select
        className="border-2 border-orange border-t-none shadow-none"
        value={selectedOption}
        onChange={onChange}
      >
        <Option value="GDP">GDP</Option>
        <Option value="Fiscal">Fiscal</Option>
        <Option value="Inflation">Inflation</Option>
      </Select>
    </div>
  );
}
