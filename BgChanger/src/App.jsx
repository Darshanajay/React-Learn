import { useReducer, useState, useRef } from "react";

function App() {
  const color = useRef("");

  const changeredcolor = () => {
    color.current.style.backgroundColor = "red";
  };
  const changebluecolor = () => {
    color.current.style.backgroundColor = "blue";
  };
  const changegreencolor = () => {
    color.current.style.backgroundColor = "green";
  };
  const changegraycolor = () => {
    color.current.style.backgroundColor = "gray";
  };
  const changeyellowcolor = () => {
    color.current.style.backgroundColor = "yellow";
  };
  const changepinkcolor = () => {
    color.current.style.backgroundColor = "pink";
  };
  const changepurplecolor = () => {
    color.current.style.backgroundColor = "purple";
  };
  const changewhitecolor = () => {
    color.current.style.backgroundColor = "white";
  };
  const changeblackcolor = () => {
    color.current.style.backgroundColor = "black";
  };

  return (
    <>
      <div className=" h-screen w-screen " ref={color}>
        <div className=" flex place-content-center bg-lime-300 rounded-full">
          <button
            onClick={changeredcolor}
            className=" text-lg bg-red-500 text-white h-11 w-20 rounded-3xl mx-1"
          >
            Red
          </button>
          <button
            onClick={changebluecolor}
            className=" text-lg bg-blue-500 text-white h-11 w-20 rounded-3xl mx-1"
          >
            Blue
          </button>
          <button
            onClick={changegreencolor}
            className=" text-lg bg-green-500 text-white h-11 w-20 rounded-3xl mx-1"
          >
            Green
          </button>
          <button
            onClick={changegraycolor}
            className=" text-lg bg-gray-500 text-white h-11 w-20 rounded-3xl mx-1"
          >
            Gray
          </button>
          <button
            onClick={changeyellowcolor}
            className=" text-lg bg-yellow-500 text-white h-11 w-20 rounded-3xl mx-1"
          >
            Yellow
          </button>
          <button
            onClick={changepinkcolor}
            className=" text-lg bg-pink-500 text-white h-11 w-20 rounded-3xl mx-1"
          >
            Pink
          </button>
          <button
            onClick={changepurplecolor}
            className=" text-lg bg-purple-500 text-white h-11 w-20 rounded-3xl mx-1"
          >
            Purple
          </button>
          <button
            onClick={changewhitecolor}
            className=" text-lg bg-white text-black h-11 w-20 rounded-3xl mx-1"
          >
            White
          </button>
          <button
            onClick={changeblackcolor}
            className=" text-lg bg-black text-white h-11 w-20 rounded-3xl mx-1"
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
