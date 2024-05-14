import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let obj = {
  //   name:'Rakesh',
  //   age:23,
  //   city:'Noida',
  //   state:'UP'
  // }

  return (
    <>
       {/* <Card user='Rakesh' myObj={obj} ></Card>  */}
      <Card userName='Divya' btnText='Click me!'></Card>
      <Card userName='Sapana' btnText='Visit'></Card>
    </>
  )
}

export default App
