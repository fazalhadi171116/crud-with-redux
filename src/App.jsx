import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Create from './components/Create'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Create/>}/>
      <Route exact path="/read" element={<Read/>}/>
      <Route exact path="/update/:id" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
