import './App.css'
import {  Outlet } from "react-router-dom"
import Menu from "@/views/menu"
 
function App() {
  

  return (
    <>
    <Menu />
    <Outlet />
  </>
  )
}

export default App
