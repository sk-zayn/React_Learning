import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };

  const reset = () => {
    setNum(0);
  };

  return (
    <div  style={{
          background: dark ? "black" : "white",
          color: dark ? "white" : "black",
          minHeight: "100vh",
          minwidth: "100vw",
          padding: "30px",
        }}
        className="flex flex-col p-10 gap-10  text-center font-bold text-3xl">
      <div className="bg-gray-300 p-8 w-120">{num}</div>
      <div className="flex gap-15">
        <button
          onClick={() => increment()}
          className="bg-blue-600 px-10 py-3 text-white rounded-full"
        >
          +
        </button>
        <button
          onClick={() => decrement()}
          className="bg-blue-600 px-10 py-3 text-white rounded-full"
        >
          -
        </button>
        <button
          onClick={() => reset()}
          className="bg-blue-600 px-10 py-3 text-white rounded-full"
        >
          Reset
        </button>
      </div>

        <button className="bg-blue-500 w-50 rounded-full" onClick={() => setDark(!dark)}>Change Theme</button>

    </div>
  );
};

export default Counter;
