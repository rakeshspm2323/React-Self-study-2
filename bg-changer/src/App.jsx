import React, { useState } from 'react'
import './App.css'
const App = () => {
 const [color,setColor] = useState("olive")
  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
        <div className='fixed flex justify-center bottom-12 inset-x-0 px-2'>
              <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' 
                  style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>
                    Red
                  </button>
                  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' 
                  style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>
                    Green
                  </button>
                  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' 
                  style={{backgroundColor:"Blue"}} onClick={()=>setColor("blue")}>
                    Blue
                  </button>
                  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' 
                  style={{backgroundColor:"salmon"}} onClick={()=>setColor("salmon")}>
                    salmon
                  </button>
                  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' 
                  style={{backgroundColor:"Yellow"}} onClick={()=>setColor("yellow")}>
                    Yellow
                  </button>
                  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' 
                  style={{backgroundColor:"Black"}} onClick={()=>setColor("black")}>
                    Black
                  </button>
                  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' 
                  style={{backgroundColor:"Orange"}} onClick={()=>setColor("orange")}>
                    Orange
                  </button>
                  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' 
                  style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>
                    Reset
                  </button>
              </div>
        </div>
    </div>
  )
}

export default App
