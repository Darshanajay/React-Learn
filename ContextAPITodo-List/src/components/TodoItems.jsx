import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext);
  

  return (
    <>
      <div className="item-cont">
        {todoItems.map((item) => (
          <TodoItem
            todoDate={item.dueDate}
            key={item.name}
            todoName={item.name}
            // DelMethod={deleteItem}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
