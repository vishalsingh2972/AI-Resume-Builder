import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { UserButton, useUser } from "@clerk/clerk-react"

const Header = () => {

  //checking user status (here checking logged in or not)
  const { user, isSignedIn } = useUser();


  return (
    <div className="p-3 px-5 flex justify-between shadow-md items-center">
      <img src="/logo.svg" width={100} height={100}/>

      {isSignedIn ?
        <div className="flex gap-2 items-center">
          <Link to={'/dashboard'}>
            <Button variant="outline">Dashboard</Button>
          </Link>         
          <UserButton/>
        </div> :
        <Link to={'/auth/sign-in'}>
          <Button>Get Started</Button>
        </Link>
      }

    
    </div>
  )
}

export default Header