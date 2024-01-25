import "./App.css";
import TodoItem2 from "./components/TodoItem2";
import TodoItem1 from "./components/TodoItem1";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div class="container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
