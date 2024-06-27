import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from 'react'
import WelcomeMsg from "./components/WelcomeMsg";

function App() {

  // const initialtodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2024",
  //   },
  //   {
  //     name: "Go to Collage",
  //     dueDate: "5/10/2024",
  //   },
  //   {
  //     name: "Like",
  //     dueDate: "5",
  //   },
  // ];

  const [todoItems,setTodoItems] = useState([]);
  const handleNewItem = (itemName,itemDueDate) => { 
    const final = [
      {
        name:itemName,
        dueDate: itemDueDate,
      }
      ,...todoItems
    ]
    setTodoItems(final);
   }
   const handleDelItem = (todoItemName) => { 
    const newTodoItems = todoItems.filter((item => item.name !== todoItemName));
    setTodoItems(newTodoItems);
    };

   
  return (
    <center className="todo-content">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems DelMethod ={handleDelItem} todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
