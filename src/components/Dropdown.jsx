import React, { useState } from "react";

export default function Dropdown({listItems,defaultValue}) {
  const [ isActive, setIsActive ] = useState(false);
  const [selected,setSelected] = useState(defaultValue)
  function handleActive(){
    setIsActive(!isActive);
  }
  function handleSelected(e){
    setSelected(e.target.textContent);
    setIsActive(!isActive);
  }
  return (
    <div className="drop-down">
      <div className="dropdown-btn" onClick={handleActive}>
        {selected}
        <span>
          <i className={isActive?'fa fa-caret-up':"fa fa-caret-down"}></i>
        </span>
      </div>
      <ul
        className="dropdown-content"
        style={{ display: isActive ? "block" : "none" }}
      >
      {listItems.map((item=><li className="item" onClick={handleSelected} key={item}>{item}</li>))}
      </ul>
    </div>
  );
}
