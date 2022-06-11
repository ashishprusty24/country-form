import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form1 from './components/Form1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Form1/>
    </div>
  )
}

export default App
