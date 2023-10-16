import React from "react";
export default function Card({ src, title, total, fluc,cycle='month' }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card-details">
        <p className="card-title">{title}</p>
        <p className="card-total">{`$${total}K`}</p>
        <p className='card-fluc'>
          <span className={`cardin-fluc ${fluc < 0 ? 'loss' : 'profit'}`}>
            {fluc < 0 ? <span>&darr; {fluc*-1}% </span> : <span>&uarr; {fluc}% </span>}
          </span>
          this {cycle}
        </p>
      </div>
    </div>
  );
}
