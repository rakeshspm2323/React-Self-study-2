import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {
   const [length,SetLength] = useState(8)
   const [numAllowed,SetnumAllowed] = useState(true)
   const [charAllowed,SetcharAllowed] = useState(true)
   const [password,setPassword] = useState("")
  //password references
  const passwordref = useRef(null)
  //password genrator
   const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_~"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
   },[length,numAllowed,charAllowed,setPassword])
   //password copy
   const copyPassTOClipboard = useCallback(()=>{
    passwordref.current?.select()  //select all password for copy
    passwordref.current?.setSelectionRange(0,15) // upto 15 char to copy 
   },[password])
   //call password generator
   useEffect(()=>{
    passwordGenerator()
   },[length,numAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-[500px] h-[250px] bg-gray-600 m-auto mt-40  text-white p-3 rounded-md'>
          <div className='w-full h-[50px]  mb-2 font-extrabold flex justify-center items-center'>
            Password Generator
            </div>
          <div className='w-full h-[80px]  flex justify-center items-center'>
           <input type="text" placeholder='password'  value={password} readOnly  ref={passwordref}
           className='outline-none w-full py-2 px-3 rounded-l-lg text-black' />
            <button className='px-2 py-2 bg-blue-600 rounded-r-lg' onClick={copyPassTOClipboard}>
              Copy
              </button>
          </div>
          <div className='w-full h-[80px] flex justify-center items-center gap-5'>
              <div>
                <input type="range" 
                min={8} max={50} 
                value={length} 
                id="length" 
                className='cursor-pointer'
                onChange={(e)=>{SetLength(e.target.value)}}/>
                <label htmlFor="length" className='cursor-pointer'>Length:{length}</label>
              </div>
              <div>
                <input type="checkbox" 
                defaultChecked={numAllowed} 
                id="numInput" 
                className='cursor-pointer'
                onChange={()=>{
                  SetnumAllowed((prev)=>!prev)
                }}/>
                <label htmlFor="numInput"className='cursor-pointer'>Number</label>
              </div>
              <div>
                <input type="checkbox" 
                defaultChecked={charAllowed} 
                id="charInput"
                className='cursor-pointer'
                onChange={()=>{
                  SetcharAllowed((prev)=>!prev)
                }} />
                <label htmlFor="charInput" className='cursor-pointer'>Character</label>
              </div>
          </div>
      </div>
    
    </>
   
  )
}

export default App
