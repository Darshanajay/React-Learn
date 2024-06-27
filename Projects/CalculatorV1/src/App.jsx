import css from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const onButClick = (buttonText) => {
   if (buttonText === 'C') {
    setVal("");
   } else if (buttonText === '='){
    const result = eval(calVal);
    setVal(result);
   }else{
    const newDispValue = calVal + buttonText;
    setVal(newDispValue);
   }
  };

  const [calVal, setVal] = useState("");

  return (
    <div className={css["calculator"]}>
      <Display displayVal={calVal}></Display>
      <ButtonContainer onButClick={onButClick}></ButtonContainer>
    </div>
  );
}

export default App;
