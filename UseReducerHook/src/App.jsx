import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState, useReducer } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo-items-store";


const reducer = (currTodoItems, action) => {
  let final = currTodoItems;
  if (action.type === "NEW-ITEM") {
    final = [
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
      ...currTodoItems,
    ];
  return final;
  } else if (action.type === "DELETE-ITEM") {
    final = currTodoItems.filter((item) => item.name !== action.payload.itemName);
    return final;
  }
  
};

function App() {
  // const [todoItems, setTodoItems] = useState([]);
  // const addNewItem = (itemName, itemDueDate) => {
  //   const final = [
  //     {
  //       name: itemName,
  //       dueDate: itemDueDate,
  //     },
  //     ...todoItems,
  //   ];
  //   setTodoItems(final);
  // };
  // const deleteItem = (todoItemName) => {
  //   const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
  //   setTodoItems(newTodoItems);
  // };
  const [todoItems, dispatch] = useReducer(reducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW-ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatch(newItemAction);
  };
  const deleteItem = (todoItemName) => { 
    const newTodoItems = {
      type:"DELETE-ITEM",
      payload:{
        itemName: todoItemName,
      }
    };
    dispatch(newTodoItems);
   };

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
        <AddTodo></AddTodo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
