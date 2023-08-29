import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [allStocks, setAllStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("Tech")

  useEffect(()=> {
    fetch("http://localhost:3001/stocks")
    .then((r)=> r.json())
    .then((stocksData)=> setAllStocks(stocksData))
  }, [])

    function addToPortfolio(portfolioStock){
      const stockInPortfolio = portfolioStocks.find(
        (newStock)=> newStock.id === portfolioStock.id 
      )
      if (!stockInPortfolio){
    setPortfolioStocks([...portfolioStocks, portfolioStock])
      }
  }

  const sortedStocks = [...allStocks].sort(function(a, b) {
    if (sortBy === "Alphabetically"){
    return a.name.localeCompare(b.name);
    }
    else {
      return parseFloat(a.price) - parseFloat(b.price);
    }
 });
 console.log(sortedStocks)
 const newAllStocks = [...sortedStocks].filter((stock)=> stock.type === filterBy)

 

 const sortedPortStocks = [...portfolioStocks].sort(function(a, b) {
  if (sortBy === "Alphabetically"){
  return a.name.localeCompare(b.name);
  }
  else {
    return parseFloat(a.price) - parseFloat(b.price);
  }
});

const newPortStocks = [...sortedPortStocks].filter((stock)=> stock.type === filterBy)

  


  

  
  return (
    <div>
      <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} setSortBy={setSortBy} sortBy={sortBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer allStocks={newAllStocks} onAddToPort={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer setPortfolioStocks={setPortfolioStocks} portfolioStocks={newPortStocks}  />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
