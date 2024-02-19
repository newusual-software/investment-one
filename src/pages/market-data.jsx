import DefaultLayout from "../layouts/defaultLayout";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Input,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
 
const TABLE_HEAD = ["Symbol", "P-Price (N)", "Open (N)", "High (N)", "Low (N)", "Curr.Price (N)","Close (N)", "Change (N)", "Change (N)", "Volume", "value"];
 
export default function MarketData() {
    const [data, setData] = useState([])

    useEffect(() => {
      axios
        .get("https://restserver3.cardinalstone.com/api/getSecurityNames")
        .then((response) => {
          if (response.data) {
            console.log(response?.data);
            setData(response?.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
        })
       
    }, []);
  return (
    <DefaultLayout>
        <Card className="h-full  w-full p-0 ">
      <CardHeader floated={false} shadow={false} className="bg-orange mt-0 py-2 mx-0 rounded-t-xl rounded-b-none  text-white">
        <div className="px-9 flex flex-col py-4  rounded-none justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="white">
            Market Data
            </Typography>
          
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                className=" text-white placeholder:text-white"
              />
            </div>
        
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll h-[40rem] px-0 py-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead className="sticky top-0">
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className={`border-y border-blue-gray-100 ${index == 0 ? "text-left" : "text-right"} bg-blue-gray-100 p-4`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold text-black leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody >
            {data?.map(
              (
                item,
                index,
              ) => {
                const isLast = index === data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={item.Name} className="text-right">
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-left"
                      >
                        {item.Symbol}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {parseFloat(item.PClose).toFixed(2)}
                       
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {parseFloat(item.Open).toFixed(2)}
                    
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {parseFloat(item.High).toFixed(2)}
                       
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                         {parseFloat(item.Low).toFixed(2)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                         {parseFloat(item.Low).toFixed(2)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                         {parseFloat(item.Close).toFixed(2)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                         {parseFloat(item.Change).toFixed(2)}
                      </Typography>
                    </td>
                   
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                         {parseFloat(item.Change).toFixed(2)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                         {parseFloat(item.Volume).toFixed(2)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                         {parseFloat(item.Value).toFixed(2)}
                      </Typography>
                    </td>
                   
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
    
    </Card>
    </DefaultLayout>
  )
}
