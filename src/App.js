import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx"

export default function App() {
  const [isClick,setIsClick] = useState(false)
  function handleClick(){
    setIsClick(!isClick);
  }
  return (
    <div className="app">
      <Sidebar isClick={isClick} handleClick={handleClick} />
      <Main>
        <i class="fas fa-bars hide-sideBar" onClick={handleClick}></i>
      </Main>
    </div>
  );
}
