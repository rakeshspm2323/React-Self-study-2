import React, { useCallback, useEffect, useRef, useState } from 'react'


const App = () => {

  const [length,setLength] = useState(8)
  const [numAllowed,setNumAllowed] = useState(true)
  const [charAllowed,setCharAllowed] = useState(true)
  const [password,setPassword] = useState("")

// UseRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed)str += "0123456789"
    if(charAllowed)str += "!@#$%^&*-_~"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
    },[length,numAllowed,charAllowed,setPassword])

    const copyPassToClipboard = useCallback(()=>{
        // window.navigator.clipboard.writeText(password)  --> // select option is not provide so use passwordRef (useRef hook)
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,15) // select upto 15 char
    },[password])

    useEffect(()=>{
      passwordGenerator()
    },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto bg-gray-700 rounded-lg shadow-md px-4 my-8 pb-2 '>
          <h1 className='text-center text-white my-3 pt-2'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input type="text"
                value={password}
                className='outline-none w-full py-1 px-3'
                placeholder='password'
                readOnly  ref={passwordRef}/>
              <button className='outline-none bg-blue-500 text-white px-0.5 py-3 shrink-0'
                      onClick={copyPassToClipboard}>
                Copy
              </button>
          </div>
          <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                  <input 
                  type="range"
                  min={8}
                  max={50}
                  value={length}
                  id='length'
                  className='cursor-pointer'
                  onChange={(e)=>{setLength(e.target.value)}} />
                 <label htmlFor="length" className='text-white'>Length:{length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input 
                  type="checkbox"
                  defaultChecked={numAllowed}
                  id='numberInput'
                  className='cursor-pointer'
                  onChange={()=>{
                    setNumAllowed((prev)=>!prev) //!prev that means reverse value 
                    }} />
                 <label htmlFor="numberInput" className='text-white'>Number</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input 
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id='charInput'
                  className='cursor-pointer'
                  onChange={()=>{
                    setCharAllowed((prev)=>!prev) //!prev that means reverse value 
                    }} />
                 <label htmlFor="charInput" className='text-white'>Character</label>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
