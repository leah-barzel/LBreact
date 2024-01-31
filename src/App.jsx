import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Admin/Login'
import MeetingsList from './components/Meetings/MeetingsList'
import Service from './components/services/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Service/>
    <br/>
      <Login/>
     
      
   
    </>
  )
}

export default App

