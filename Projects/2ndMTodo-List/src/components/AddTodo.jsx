import css from "./AddTodo.module.css";
import { useState } from "react";
import { useRef } from "react";
import { MdAddchart } from "react-icons/md";

let AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setTodoDate(e.target.value);
  };
  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <form onSubmit={handleAddButtonClicked} className={`row ${css["dgrow"]}`}>
      <div className="col-6">
        <input
          type="text"
          className={css["inpu"]}
          placeholder="Enter Todo Here"
          onChange={handleNameChange}
          value={todoName}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          className={css["inpu"]}
          onChange={handleDateChange}
          value={todoDate}
        />
      </div>
      <div className="col-2">
        <button
          type="submit"
          
          className={`btn btn-success ${css["dgbutton"]}`}
          // onClick={handleAddButtonClicked}
          // "btn btn-success dgbutton"
        >
          <MdAddchart />
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
{
  /* <div className={`row ${css["dgrow"]}`}></div> */
}
