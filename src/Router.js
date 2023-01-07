import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import Stocks from "./Pages/Stocks";
import App from "./App"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import { stocksLoader, getStockLoader} from "./Loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
        path="/" 
        element={<App/>}>

          <Route 
            path=""//Home
            element={<Home/>}/>

          <Route 
            path="/about"
            element={<About/>}/>

          <Route 
            path="stocks"
            element={<Dashboard/>}
            loader={stocksLoader}/>

          <Route 
            path="/stocks/:symbol"//singleStock
            loader={getStockLoader} 
            element={<Stocks/>}/>
            
    </Route>
    )
  );

    export default router;