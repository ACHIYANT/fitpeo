import React, { useState, useRef, useLayoutEffect } from "react";
import Dropdown from "./Dropdown";
import BarChart from "./BarChart";
export default function Overview(){
    const [height,setHeight] = useState(0);
    const ref = useRef(null);
    useLayoutEffect(() => {
        setHeight(ref.current.offsetHeight);
        // console.log(ref.current.offsetHeight);
      }, []);
    return (
        <div className="overview">
            <div className="upper">
                <div className="left">
                    <p className="heading">Overview</p>
                    <p className="sub-heading">Monthly Earning</p>
                </div>
                <div className="right">
                    <Dropdown listItems={['Monthly','Quaterly','Yearly']} defaultValue={'Quaterly'} />
                </div>
            </div>
            <div ref={ref} className="down">
                <BarChart divHeight={height} />
            </div>
        </div>
    );
}