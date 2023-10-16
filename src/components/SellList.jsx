import React from "react";
export default function SellList({imgSrc,itemName,itemDesc,stock,price,totalSale})
{
    return (
        <div className="item-sellList">
            <div className="image">
                <img src={imgSrc} alt="First" height={'44px'} width={'73px'}/>
            </div>
            <div className="itemDetails">
                <span className="item-name">{itemName}</span>
                <span className="item-desc">{itemDesc}</span>
            </div>
            <div className="stock largeSize center-margin">{stock} in stock</div>
            <div className="price dark center-margin">$ {price}</div>
            <div className="totalSale largeSize center-margin">{totalSale}</div>
        </div>
    );
}