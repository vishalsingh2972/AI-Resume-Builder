import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/sign-in/SignInPage.jsx'
import Home from './home/Home.jsx'
import Dashboard from './dashboard/Dashboard.jsx'

const Router = createBrowserRouter([
  {
    // path: "/", (need to check this)
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/auth/sign-in",
        element: <SignInPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)
