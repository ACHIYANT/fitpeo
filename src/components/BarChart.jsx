import React from "react";
import Bar from "./Bar";
let max = 0;
const tempData = [
  {
    id: 0,
    value: 360,
  },
  {
    id: 1,
    value: 260,
  },
  {
    id: 2,
    value: 560,
  },
  {
    id: 3,
    value: 410,
  },
  {
    id: 4,
    value: 460,
  },
  {
    id: 5,
    value: 200,
  },
  {
    id: 6,
    value: 490,
  },
  {
    id: 7,
    value: 583,
  },
  {
    id: 8,
    value: 550,
  },
  {
    id: 9,
    value: 439,
  },
  {
    id: 10,
    value: 420,
  },
  {
    id: 11,
    value: 460,
  },
];
function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber);
  return date.toLocaleString("en-US", { month: "short" });
}
function getMaxData(tempData) {
  tempData.map((i) => (max = max < i.value ? i.value : max));
  // console.log(max);
}
export default function BarChart({ divHeight }) {
  // useEffect(function(){
  //     getMaxData(tempData);
  // },[tempData]);
  getMaxData(tempData);
  function getHeight(divHeight, currValue) {
    // console.log(max);
    const perpxvalue = divHeight / max;
    const fin = currValue * perpxvalue;
    // console.log(fin);
    return fin;
  }

  return (
    <div className="bar-chart">
      {Array.from({ length: 12 }, (_, i) => (
        <Bar
          label={getMonthName(i)}
          barColor={
            tempData[i].value === max ? "rgb(107,0,243)" : "rgb(243,238,255)"
          }
          barHeight={getHeight(divHeight, tempData[i].value) - 0}
          borderRd="12px"
          lblSize={1.2}
          orgData={tempData[i].value}
          key={i}
        />
      ))}
    </div>
  );
}
