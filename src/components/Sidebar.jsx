import React from "react";
import NavList from "./NavList";
import LoginUser from "./LoginUser";

export default function Sidebar({isClick,handleClick}){
    return (
        <div className={isClick?'absolute-sidebar sidebar':'sidebar'}>
            {isClick&&<i style={{fontSize:'2rem', float:'right', marginRight:'2px'}} className="cross" onClick={()=>handleClick(!isClick)}>ⅹ</i>}
            <div className="icon">
                <img height="30" width="30" src="/benzene.png" alt="Benzene" />
                <span>Dashboard</span>
            </div>
            <NavList/>
            <div className="loginUser">
                <LoginUser title={'Evano'} designation={'Project Manager'}/>
            </div>
        </div>
    );
}