import React  from "react";
import Search from "./Search";
export default function SearchBar({children}){
    return(
        <div className="searchbar">
            {children}
            <span>Hello Shahrukh 👋,</span>
            <Search className={'search'} />
        </div>
    );
}