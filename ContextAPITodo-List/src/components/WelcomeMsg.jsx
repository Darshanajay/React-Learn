import React, { useContext } from "react";
import css from "./WelcomeMsg.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMsg = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return todoItems.length === 0 && <p className={css["msg"]}>Enjoy Your Day</p>;
};

export default WelcomeMsg;
