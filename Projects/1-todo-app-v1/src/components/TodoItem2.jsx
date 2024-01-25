function TodoItem2() {
  let todoname = "Go to College";
  let tododate = "9/11/2024";
  return (
    <div class="row drow">
      <div class="col-6">{todoname}</div>
      <div class="col-4">{tododate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger dbutton">
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem2;
