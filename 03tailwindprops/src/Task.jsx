import React, { useState } from "react";

const Task = () => {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
  };

  const Remove = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className=" text-white grid place-content-center h-screen ">
        <h1 className=" text-yellow-600 text-3xl mt-2">React</h1>
        <h2 className=" text-2xl mt-4 text-black">Counter value: {counter}</h2>

        <button
          className=" mt-4 bg-blue-400 text-black rounded-lg"
          onClick={add}
        >
          Add value {counter}
        </button>

        <button
          className=" mt-2 bg-red-400 text-black rounded-lg"
          onClick={Remove}
        >
          Remove value {counter}
        </button>
        <p className=" text-2xl mt-2 text-black">footer:{counter}</p>
      </div>
    </>
  );
};

export default Task;
