import { useState } from 'react';
import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  function handleColor(col){
    setColor(col);
  }
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className=' outline-none bg-red-600 text-white font-bold px-4 py-2 rounded-2xl'
          onClick={(e) => handleColor(e.target.textContent.toLowerCase())}>Red</button>
          <button className=' outline-none bg-gray-600 text-white font-bold px-4 py-2 rounded-2xl'
          onClick={(e) => handleColor(e.target.textContent.toLowerCase())}>Gray</button>
          <button className=' outline-none bg-green-600 text-white font-bold px-4 py-2 rounded-2xl'
          onClick={(e) => handleColor(e.target.textContent.toLowerCase())}>Green</button>
          <button className=' outline-none bg-yellow-600 text-white font-bold px-4 py-2 rounded-2xl'
          onClick={(e) => handleColor(e.target.textContent.toLowerCase())}>Yellow</button>
          <button className=' outline-none bg-pink-600 text-white font-bold px-4 py-2 rounded-2xl'
          onClick={(e) => handleColor(e.target.textContent.toLowerCase())}>Pink</button>
          <button className=' outline-none bg-blue-600 text-white font-bold px-4 py-2 rounded-2xl'
          onClick={(e) => handleColor(e.target.textContent.toLowerCase())}>Blue</button>
          <button className=' outline-none bg-teal-600 text-white font-bold px-4 py-2 rounded-2xl'
          onClick={(e) => handleColor(e.target.textContent.toLowerCase())}>Teal</button>
          <button className=' outline-none bg-orange-600 text-white font-bold px-4 py-2 rounded-2xl'
          onClick={(e) => handleColor(e.target.textContent.toLowerCase())}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
