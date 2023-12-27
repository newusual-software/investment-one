import { Select, Option } from "@material-tailwind/react";

export function EquitiesSelect({ selectedOption, onChange }) {
  return (
    <div className="w-32">
      <Select
        className="border-2 border-orange border-t-none shadow-none"
        value={selectedOption}
        onChange={onChange}
      >
        <Option value="NSE-ASI">NSE ASI</Option>
        <Option value="Agro">Agro & Agro Allied</Option>
        <Option value="Banking">Banking</Option>
        <Option value="Breweries">Breweries</Option>
        <Option value="Consumer-Goods">Consumer Goods</Option>
        <Option value="Industrial">Industrial</Option>
        <Option value="oil-&-gas">Oil & Gas</Option>
      </Select>
    </div>
  );
}
