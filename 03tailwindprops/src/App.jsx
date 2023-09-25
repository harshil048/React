import { useState } from 'react'
import Card from './components/card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username = "Harshil" btnText="click me" />
      <Card username = "Sample 2" btnText="Visit me" />
    </>
  )
}

export default App
