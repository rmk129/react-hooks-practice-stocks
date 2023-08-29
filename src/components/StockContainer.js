import React from "react";
import Stock from "./Stock";

function StockContainer({allStocks, onAddToPort}) {
  const displayedStocks = allStocks.map((stock)=> {
    return <Stock onAddToPort={onAddToPort} key={stock.id} stock={stock}/>
  })


  return (
    <div>
      <h2>Stocks</h2>
      {displayedStocks/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
