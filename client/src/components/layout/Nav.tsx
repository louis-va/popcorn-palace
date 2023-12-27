import { useAuth } from "../../auth/useAuth";
import Logo from "@/components/common/Logo";
import Button from "@/components/common/Button";

const Nav = () => {
  const { setIsAuthModalOpen, isLoggedIn, userData } = useAuth();

  const loggedInButton = (
    <Button variant="tertiary" size="small" onClick={() => { console.log("account") }}>
      <span className="inline-block w-3 h-3 mr-2 rounded-full bg-orange"></span>
      {`${userData?.firstname} ${userData?.lastname}`}
    </Button>
  )

  const signInButton = (
    <Button variant="tertiary" size="small" onClick={() => setIsAuthModalOpen(true)}>
      Connexion
    </Button>
  )

  return (
    <nav className="flex justify-between items-center h-20 sm:px-2">
      <a href="/" className="rounded text-white">
        <Logo />
      </a>
      {isLoggedIn ? (loggedInButton) : (signInButton)}
    </nav>
  );
};

export default Nav;
