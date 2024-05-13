import React, { Fragment } from 'react'

const App = () => {
  let handleEvent = ()=>{
    let btn = document.querySelector('button')
    btn.style.backgroundColor = 'black'
    btn.style.color = 'white'
    }
  return (
    // <div>
    //   <h1>Hello React </h1>
    // </div>

    /* Fragment */
      <Fragment>
           <button onClick={handleEvent}>Click me!</button>
      </Fragment>
    /* Empty Fragment */
    // <>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi.</p>
    // </>
    
    



  )
}

export default App
