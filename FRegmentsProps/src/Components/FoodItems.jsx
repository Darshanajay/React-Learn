import React from "react";
import Items from "./Items";
import { useState } from "react";

const FoodItems = (props) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, e) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <div>
      <ul className="list-group">
        {props.names.map((item) => (
          <Items
            key={item}
            pname={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(e) => onBuyButton(item, e)}
          ></Items>
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
