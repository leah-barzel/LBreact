import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Admin/Login'
import AdminPage from './components/Admin/AdminPage'
import AddService from './components/Services/AddService'
import ServiceList from './components/Services/ServiceList'
import CustomizedSwitches from './components/Admin/CustomizedSwitches'
import SwitchesSize from './components/Services/SwitchesSize'
import MeetingList from './components/Meetings/MeetingsList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Login/>

    <MeetingList/>
    </>
  )
}

export default App

