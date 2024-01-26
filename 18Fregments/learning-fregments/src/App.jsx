import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  let fooditems = ["Mudde", "Rotti", "Chikken", "Dose", "Idle", "Mlik","Ghee"];
  return (
    <React.Fragment>
      <div>
        <h1>Healthy Food</h1>
      </div>
      <ul className="list-group">
        {fooditems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
