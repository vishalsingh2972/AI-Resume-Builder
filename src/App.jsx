import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)

  const {user, isLoaded, isSignedIn} = useUser()

  // if(!isSignedIn) //need to check this auth not working as expected
  // {
  //   return <Navigate to={'/auth/sign-in'}/>
  // }

  return (
    <>
      <Outlet/>
    </>
  )

}
export default App
