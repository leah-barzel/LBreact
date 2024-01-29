import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Admin/Login'
import AdminPage from './components/Admin/AdminPage'
import AddService from './components/Services/AddService'
import ServiceList from './components/Services/ServiceList'
import CustomizedSwitches from './components/Admin/CustomizedSwitches'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CustomizedSwitches/>
    <AdminPage/>
    <br/>
    <Login/>
    <br/>
    <ServiceList/>
   

       
    </>
  )
}

export default App
