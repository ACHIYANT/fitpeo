import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import SellList from "./SellList";
const tempData =[
    {
        id:0,
        image:'https://i.ibb.co/vdZ1Ydp/Screenshot-2023-10-15-at-6-12-26-PM.png',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name:'Abstract 3D',
        inStock:32,
        price:45.99,
        total_sale:20,
    },
    {
        id:1,
        image:'https://i.ibb.co/JrrD1vx/Screenshot-2023-10-15-at-6-12-46-PM.png',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'Sarphens Illustration',
        inStock:32,
        price:45.99,
        total_sale:20,
    }
]
export default function ProductSell() {
  return (
    <div className="product-sell">
      <div className="title">
        <div className="product-title">Product Sell</div>
        <div className="options">
          <Search className={'search product-search'} />
          <Dropdown
            listItems={["Last 30 days", "Last 180 days", "Last 360 days"]}
            defaultValue={"Last 30 days"}
          />
        </div>
      </div>
      <div className="sell-list">
        <div className="label largeSize grey">
            <div className="product">Product Name</div>
            <div className="stock center-margin">Stock</div>
            <div className="price center-margin">Price</div>
            <div className="totalSale center-margin">Total Sales</div>
        </div>
        <hr className="hr" />
        <div className="list-items">
            {tempData.map(item=><SellList key={item.id} imgSrc={item.image} itemName={item.name} itemDesc={item.desc} stock={item.inStock} price={item.price} totalSale={item.total_sale}/>)}
        </div>

      </div>
    </div>
  );
}
