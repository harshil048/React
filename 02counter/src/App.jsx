import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15); // default, function


  const addValue = () => {
    if (counter >= 20) {
      setCounter(20);
    }
    else setCounter(counter + 1);
  }
  const decreseValue = () => {
    if (counter <= 0) {
      setCounter(0);
    }
    else setCounter(counter - 1);
  }
  const resetValue = () => {
    setCounter(0);
  }

  return (
    <>
      <h1>
        React
      </h1>

      <h2>Counter Value : {counter}</h2>

      <button
        onClick={addValue}
      >Add value</button>
      <br></br>

      <button
        onClick={decreseValue}
      >Decrese value</button>
      <br></br>

      <button
        onClick={resetValue}
      >Reset value</button>
    </>
  )
}

export default App
