import Item from "./item";
function Fooditems({ items }) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} ite={item}></Item>
      ))}
    </ul>
  );
}
export default Fooditems;
