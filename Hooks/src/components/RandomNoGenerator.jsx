import React, { useState } from 'react'


const RandomNoGenerator = () => {
    const [number, setNumber] = useState(0);

  function generate() {
    setNumber(Math.floor(Math.random() * 100));
  }

  return (
    <div className='flex justify-center items-center flex-col gap-5 h-screen bg-gray-600'>
      <h1 className='mt-10 text-3xl p-10 text-white w-40 text-center'>{number}</h1>

      <button className='bg-pink-500 px-6 py-2 rounded-full text-white cursor-pointer' onClick={generate}>
        Generate
      </button>
    </div>
  );
}

export default RandomNoGenerator
