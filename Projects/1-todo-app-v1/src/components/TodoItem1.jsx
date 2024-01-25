function TodoItem1() {
  let todoname = "Buy Milk";
  let tododate = "7/10/2024";
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
export default TodoItem1;
