import App from './App.jsx'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BisnessData from './components/Admin/BisnessData/BisnessData.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <><div><h1>Error Page</h1></div><h3>404 NOT FOUND</h3></>
  },
  {
    path: '/admin',
    element: <BisnessData/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


