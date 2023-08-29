import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks, setPortfolioStocks}) {

 

  const displayedPortfolioStocks = portfolioStocks.map((pStock)=> {
    return <Stock OnSellStock={sellFromPortfolio} key={pStock.id} stock={pStock} />
  })

  function sellFromPortfolio(portfolioStock){
    const stocksNotSold = portfolioStocks.filter((removeStock)=> {
      return removeStock.id !== portfolioStock.id
    })
     setPortfolioStocks(stocksNotSold)
  }

  

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        displayedPortfolioStocks//render your portfolio stocks here
      }
    </div>
  );
}

export default PortfolioContainer;
