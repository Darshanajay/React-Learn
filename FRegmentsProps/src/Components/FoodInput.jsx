import React from "react";
import css from "./FoodInput.module.css";

const FoodInput = ({handlekeydown}) => {


  return (
    <input
      type="text"
      placeholder="Enter Food item here"
      className={css["foodInput"]}
      onKeyDown={handlekeydown}
    />
  );
};

export default FoodInput;
