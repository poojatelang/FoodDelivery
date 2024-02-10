import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Pages/Home"
import Favorites from "./Components/Pages/Favorites"
import Details from "./Components/Pages/Details"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/details/:id" element={<Details/>}/>
     </Routes>
    </>
  )
}

export default App
