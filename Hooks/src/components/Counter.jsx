import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };

  const reset = ()=>{
  setNum(0)
  }

  return (
    <div className="flex flex-col p-10 gap-10 w-90 text-center font-bold text-3xl">
      <div className="bg-gray-300 p-8 ">{num}</div>
      <div className="flex gap-15">
        <button
          onClick={() => increment()}
          className="bg-blue-600 px-10 py-3 text-white rounded-full"
        >
          +
        </button>
        <button onClick={()=> decrement()} className="bg-blue-600 px-10 py-3 text-white rounded-full">
          -
        </button>
        <button onClick={() => reset()} className="bg-blue-600 px-10 py-3 text-white rounded-full" >
        Reset
      </button>
      </div>
    </div>
  );
};

export default Counter;
