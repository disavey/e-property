import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './pages/Login.jsx'
import ManageProperties from './pages/ManageProperties.jsx'
import Home from './pages/Home.jsx'
import ManageUser from './pages/ManageUser.jsx'

const router = createBrowserRouter([
{
  path: "/",
  element: <Login />

},
{
  path:"/home",
  element: <Home />
}
,
{
  path: "/manageproperties",
  element: <ManageProperties />

},
{
  path: "/manageuser",
  element: <ManageUser />

},
{
  path:"/app",
  element: <App />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
