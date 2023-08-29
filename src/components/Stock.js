import React from "react";

function Stock({stock, onAddToPort, OnSellStock}) {

  function handleAddToPortfolioClick(){
      onAddToPort(stock)
  }

  function handleSellFromPortfolio(){
    OnSellStock(stock)
  }



  return (
    <div onClick={handleAddToPortfolioClick} >
      <div className="card" onClick={handleSellFromPortfolio}>
        <div  className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
