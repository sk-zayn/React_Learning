import React, { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Submitted");
          console.log({title});
          console.log({setTitle});
        }}
      >
        <input
          type="text"
          placeholder="Enter name"
          value={title}
          className="border border-gray-300 rounded-md px-4 py-2 m-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />

        <button className="bg-blue-600 text-white px-4 py-2 m-10 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
