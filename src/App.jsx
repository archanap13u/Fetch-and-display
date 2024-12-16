import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
  
    </Routes>
   
    </>
  )
}

export default App
