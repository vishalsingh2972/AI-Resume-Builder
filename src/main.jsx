import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './components/auth/sign-in/SignInPage.jsx'
import Home from './components/home/Home.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const Router = createBrowserRouter([
  {
    // path: "/", //redundant, can be removed
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      }
    ]
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={Router}/>
    </ClerkProvider>
  </React.StrictMode>,
)
