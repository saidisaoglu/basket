import React, { useEffect } from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { HomePage } from "./Home"
import { Favoriters } from "./Favorites"
import {getfavorites} from "./redux/getfavorites"
import { useDispatch } from "react-redux"
function App() {
  const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getfavorites())
},[])
  return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/favorites" element={<Favoriters/>} />
        </Routes>    
    


    )
}

export default App
