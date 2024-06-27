import React from "react";
import css from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButClick }) => {
  // const call = () => {
  //   onButClick(buttonName)
  //  }
  const nums = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={css["buttons-container"]}>
        {nums.map((item) => (
          <button key={item} className={css["button"]} onClick={() => 
            onButClick(item)}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
