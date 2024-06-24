import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Outlet/>
    </>
  )

}
export default App
