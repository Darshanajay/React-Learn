import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    const final = [
      {
        name: itemName,
        dueDate: itemDueDate,
      },
      ...todoItems,
    ];
    setTodoItems(final);
  };
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  // const defaultTodoItems = [
  //   {
  //     name: "Buy Ghee",
  //     dueDate: "Today",
  //   },
  // ];

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-content">
        <AppName></AppName>
        <AddTodo ></AddTodo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItems ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
