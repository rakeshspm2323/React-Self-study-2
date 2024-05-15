import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [count,setCount] = useState(0)
  let add = ()=>{

   /* setCount( (count)=>count+1)
    setCount( (count)=>count+1)
    setCount( (count)=>count+1)
    setCount( (count)=>count+1) --> update by 4 at once */

  //   setCount(()=>count+1)

  setCount(count+1)

  }
  let remove =()=>{
    //  if(count>0)
      setCount(()=>count-1)
    }
    let reset = ()=>{
      setCount(0)
    }
  return (
    <>
      <h3 className='font-semibold'>Count is:{count}</h3>
      <button className='px-1 py-4 font-bold mr-4' onClick={add}>Increment</button>
      <button className='px-1 py-4 font-bold m-6'onClick={remove}>Decrement</button>
      <button className='px-1 py-4 font-bold'onClick={reset}>Reset</button>
    </>
  )
}

export default App
