import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Item1 from "./components/Item1";
import Item2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-content">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="item-cont">
      <Item1></Item1>
      <Item2></Item2>
      </div>
    </center>
  );
}

export default App;
