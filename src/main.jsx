import App from './App.jsx'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AdminPage from './components/Admin/AdminPage.jsx'
import MeetingsList from './components/Meetings/MeetingsList.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <><div><h1>Error Page</h1></div><h3>404 NOT FOUND</h3></>
  },
  {
    path: '/AdminPage',
    element: <AdminPage/>
  },
  {
    path : '/MeetingsList',
    element : <MeetingsList/>

  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


