import { useState } from "react";
import Input from "./components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
import "./App.css";

function App() {
  return (
    <>
      <h1 className=" text-3xl bg-orange-500 ">Currency App With Me</h1>
      <Input></Input>
      <useCurrencyInfo></useCurrencyInfo>
    </>
  );
}

export default App;
