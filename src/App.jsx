import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)

  const {user, isLoaded, isSignedIn} = useUser()

  if(!isSignedIn && isLoaded) //if user not signed in and goes to "http://localhost:5173/dashboard" redirect him to "http://localhost:5173/auth/sign-in", if user is signed in and goes to "http://localhost:5173/dashboard" he will be able to access it
  {
    return <Navigate to={'/auth/sign-in'}/>
  }

  return (
    <>
      <Outlet/>
    </>
  )

}
export default App
