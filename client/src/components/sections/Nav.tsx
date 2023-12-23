import { useState } from 'react';
import { useAuth } from "../../utils/useAuth";
import Logo from "../common/Logo";
import Button from "../common/Button"
import Login from "../ui-elements/LoginModal";

const Nav = () => {
  const { isLoggedIn, userData } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  let accountBtn: JSX.Element;

  if (isLoggedIn) {
    accountBtn = <Button variant="tertiary" size="small" onClick={()=>{console.log("account")}}><span className="inline-block w-2 h-2 mr-2 rounded-full bg-orange"></span> {userData?.firstname} </Button>
  } else {
    accountBtn = <Button variant="tertiary" size="small" onClick={()=>{setIsLoginOpen(true)}}> Connexion </Button>
  }

  return (
    <>
      <Login isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
      <nav className="flex justify-between items-center h-20 sm:px-2">
        <a href="/" className="rounded-sm hover:text-orange">
          <Logo/>
        </a>
        {accountBtn}
      </nav>
    </>
    
  )
}

export default Nav