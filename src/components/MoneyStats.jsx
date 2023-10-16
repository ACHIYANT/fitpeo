import React from "react";
import Card from "./Card";
const tempData = [
  {
    id: 0,
    title: "Earning",
    total: 198,
    fluc: 37.8,
    src:'./earning.png',
  },
  {
    id: 1,
    title: "Orders",
    total: 2.4,
    fluc: -2,
    src:'./orders.png',
  },
  {
    id: 2,
    title: "Balance",
    total: 2.4,
    fluc: -2,
    src:'./balance.png',
  },
  {
    id: 3,
    title: "Total Sales",
    total: 89,
    fluc: 11,
    src:'./tsales.png',
    cycle:'week',
  },
];
export default function MoneyStats() {
  return (
    <div className="money-stats">
      {tempData.map((data) => {
        return (
          <Card
            title={data.title}
            total={data.total}
            fluc={data.fluc}
            src={data.src}
            cycle={data.cycle}
            key={data.id}
          />
        );
      })}
    </div>
  );
}
