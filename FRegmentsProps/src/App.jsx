import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

const App = () => {
  
  //let foodItems = [];
  // let textStateArr = useState("Food Item Entered By User")
  // let textShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  
  let [foodItems,setFoodItems] = useState([]);
  
  const onKeyDown = (e) =>{
    if (e.key === 'Enter'){
      let newFoodItem = e.target.value;
      e.target.value = "";
      let newItems = [...foodItems,newFoodItem]
      setFoodItems(newItems);
      console.log(`Food value entered is ${newFoodItem}`)
    }
  }
  return (
    <>
    <Container>
      <h1 className="foodHeading">Healthy Food</h1>
      <ErrorMsg names={foodItems}></ErrorMsg>
      <FoodInput handlekeydown= { onKeyDown}></FoodInput>
      <FoodItems names={foodItems}></FoodItems>
    </Container>
    {/* <Container>
      <p>Above is the list of Healthy Foods that are good for your health and well being.</p>
    </Container> */}
    </>
  );
};

export default App;
