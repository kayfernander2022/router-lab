import { useLoaderData } from "react-router-dom";


const Stocks = (props) =>{
  const { stock }  = useLoaderData();

  
  return (
    <div>
      <h1>{stock.name} / {stock.symbol}</h1>
      <h3> 
        <span>Price:</span>{stock.lastPrice} / <span>Change:</span>{stock.change} 
        </h3>
        <h3>
        <span>High:</span>{stock.high} / <span>Low:</span>{stock.low}
        </h3>
        <h3>
        <span>Open:</span>{stock.open}
        </h3>
      
    </div>
  );

}

export default Stocks
