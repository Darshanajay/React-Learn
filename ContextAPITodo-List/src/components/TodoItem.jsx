import { useContext } from "react";
import css from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({todoDate,todoName}) => {
  const {deleteItem} = useContext(TodoItemsContext);
  return (
    <div className={`row ${css["dgrow"]}`}>
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger dgbutton" onClick={()=> {deleteItem(todoName)}} >
        <MdDelete />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
