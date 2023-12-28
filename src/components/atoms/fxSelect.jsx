import { Select, Option } from "@material-tailwind/react";

export function FxSelect({ selectedOption, onChange }) {
  return (
    <div className="w-32">
      <Select
        className="border-2 border-orange border-t-none shadow-none"
        value={selectedOption}
        onChange={onChange}
      >
        <Option value="Interbank-Rate">Interbank Rate</Option>
        <Option value="Parallel-Market-Rate">Parallel Market Rate</Option>
        <Option value="IEFX">IEFX</Option>
        <Option value="Movement-In-Reserve">Movement In Reserve</Option>
      </Select>
    </div>
  );
}
