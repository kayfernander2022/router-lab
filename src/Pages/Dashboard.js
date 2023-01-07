
import { Link, useLoaderData } from "react-router-dom";


const Dashboard = (props) =>{

const {stockData} = useLoaderData();

return(<div className="stocks">
  <h1>Dashboard Page</h1>
{stockData.map((stock)=>{
  const {name, symbol, lastPrice, change} =stock;

  return(
    //what shows up in url
    <Link to={`${symbol}`}>
      <h4>{name} / {symbol}</h4>
    
    </Link>
  )
})}

  </div>
)
}

export default Dashboard