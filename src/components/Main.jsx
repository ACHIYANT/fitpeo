import React from "react";
import SearchBar from "./SearchBar";
import MoneyStats from "./MoneyStats";
import OverviewStats from "./OverviewStats";
import ProductSell from "./ProductSell";
export default function Main({children}){
    return (
        <div className="main">
            <SearchBar children={children}/>
            <MoneyStats />
            <OverviewStats/>
            <ProductSell />
        </div>
    );
}