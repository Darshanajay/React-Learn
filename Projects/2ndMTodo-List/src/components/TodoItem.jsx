import css from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";

const TodoItem = ({todoDate,todoName, DelMethod}) => {
  return (
    <div className={`row ${css["dgrow"]}`}>
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger dgbutton" onClick={()=> {DelMethod(todoName)}} >
        <MdDelete />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
