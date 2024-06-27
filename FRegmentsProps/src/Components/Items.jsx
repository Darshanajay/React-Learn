import React from "react";
import styles from "./Item.module.css";
import FoodItems from "./FoodItems";

const Items = ({ pname ,bought,handleBuyButton}) => {


  return (
    <>
      <li className={`${styles["dg-items"]} list-group-item ${bought && "active"}`}>
        <span className={styles["dg-span"]}>{pname.toUpperCase()}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleBuyButton}
          
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Items;
