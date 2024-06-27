import React from "react";
import css from "./Display.module.css";

const Display = ({ displayVal }) => {
  return (
    <>
      <input
        type="text"
        className={css["display"]}
        value={displayVal}
        readOnly
      />
    </>
  );
};

export default Display;
