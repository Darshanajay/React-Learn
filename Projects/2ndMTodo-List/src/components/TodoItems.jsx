import React from "react";
import TodoItem from "./TodoItem";


const TodoItems = ({ todoItems ,DelMethod }) => {
  return (
    <>
      <div className="item-cont">
        {todoItems.map((item) => (
          <TodoItem todoDate={item.dueDate} key={item.name} todoName={item.name} DelMethod={DelMethod}></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
