import React, { useState } from "react";
export default function Bar({
  label = "label",
  barColor = "black",
  barHeight = "20",
  borderRd = "5px",
  lblSize = "1",
  lblColor = "black",
  orgData = 0,
}) {
  const barStyle = {
    height: `${barHeight-10}px`,
    backgroundColor: barColor,
    borderRadius: borderRd,
  };
  const labelStyle = {
    fontSize: `${lblSize}rem`,
    color: lblColor,
  };
  const [isHover,setIsHover] = useState(false);

  return (
    <div className="unit-bar">
      <span style={labelStyle} className="bar-label">{label}</span>
      <span className="bar" style={barStyle} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}></span>
      <span className="bar-hover" style={{display:isHover?'block':'none',top:barHeight/4}}  >{orgData}</span>
    </div>
  );
}
