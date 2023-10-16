import React from "react";
import { PieChart } from "react-minimal-pie-chart";
const tempData = [
  {
    key: 0,
    value: 20,
    color: "rgb(255,0,145)",
  },
  {
    key: 1,
    value: 45,
    color: "#164597",
  },
  {
    key: 2,
    value: 35,
    color: "rgb(242,238,253)",
  },
];
export default function Customers() {
  const getSegmentStyle = (segment, idx) => {
    return {
      strokeWidth: segment === 0 ? "13px" : segment === 1 ? "10px" : "6px",
      stroke: segment === 1 ? "url(#g85)" : "",
    };
  };
  return (
    <div className="customers">
    <div className="details-cust">
      <div className="heading">Customers</div>
      <div className="sub-heading">Customers that buy products</div>
    </div>
      <div className="pi-chart">
        <div className="piChart-insideText">
            <span>{tempData.map((i) => i.value).reduce((acc, curr) => acc + curr, 0)-tempData[tempData.length-1].value}%</span>
          Total new
          <br /> Customers
        </div>
        <PieChart
          labelPosition={50}
          startAngle={270}
          lineWidth={100}
          totalValue={100}
          radius={50}
          segmentsStyle={getSegmentStyle}
          data={tempData}
        >
          <defs>
            <linearGradient
              id="g85"
              gradientUnits="userSpaceOnUse"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop stopColor="#B763F2" offset="0" />
              <stop stopColor="#A951F2" offset="0.5" />
              {/* <stop stop-color="#9A3DF2" offset="0.75" /> */}
              {/* <stop stop-color="#8826F2" offset="0.875" /> */}
              <stop stopColor="#5a10ad" offset="1" />
            </linearGradient>
          </defs>
        </PieChart>
      </div>
    </div>
  );
}
