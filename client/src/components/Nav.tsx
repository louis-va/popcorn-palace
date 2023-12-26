import { useAuth } from "../auth/useAuth";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

const Nav = () => {
  const { setIsLoginModalOpen, isLoggedIn, userData } = useAuth();

  const loggedInButton = (
    <Button variant="tertiary" size="small" onClick={() => { console.log("account") }}>
      <span className="inline-block w-3 h-3 mr-2 rounded-full bg-orange"></span>
      {`${userData?.firstname} ${userData?.lastname}`}
    </Button>
  )

  const loggedOutButton = (
    <Button variant="tertiary" size="small" onClick={() => setIsLoginModalOpen(true)}>
      Connexion
    </Button>
  )

  return (
    <>
      <nav className="flex justify-between items-center h-20 sm:px-2">
        <a href="/" className="rounded text-orange hover:text-orange-dark">
          <Logo />
        </a>
        {isLoggedIn ? (loggedInButton) : (loggedOutButton)}
      </nav>
    </>
  );
};

export default Nav;
