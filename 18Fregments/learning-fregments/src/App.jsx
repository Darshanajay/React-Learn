import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Fooditems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  //let fooditems = []
  let fooditems = ["Mudde", "Rotti", "Chikken", "Dose", "Idle", "Mlik", "Ghee","butter"];
  return (
    <React.Fragment>
      <h1 className="foodhead">Healthy Food</h1>  
      <ErrorMsg items = {fooditems}></ErrorMsg>
      <Fooditems items = {fooditems}></Fooditems>
    </React.Fragment>
  );
}

export default App;
