import React from "react";
import Overview from "./Overview";
import Customers from "./Customers";
export default function OverviewStats(){
    return (
        <div className="overview-stats">
            <Overview />
            <Customers />
            {/* <p>Customers</p> */}
        </div>
    );
}