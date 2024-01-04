import { useState } from "react";
import { useAuth } from "../../auth/useAuth";
import Card from "@/components/common/Card";
import Typography from "@/components/common/Typography"
import Button from "@/components/common/Button";

const LoginStatus = () => {
  const { setIsAuthModalOpen, handleLogout, isLoggedIn, userData } = useAuth();
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);

  const handleSwitchAccount = async () => {
    setIsLogoutLoading(true)
    await handleLogout()
    setIsLogoutLoading(false)
  }

  const loggedInContent = (
    <>
      <Typography as="h2" variant="h2" className="mb-2">
        Vous êtes connecté
      </Typography>
      <Typography as="p" variant="p" className="text-white-muted mb-6">
        Vous êtes connecté au compte <span className="text-white">{userData?.firstname} {userData?.lastname}</span>. 
        L'email de confirmation sera envoyé à l'adresse <span className="text-white">{userData?.email}</span>.
      </Typography>
      <Button type="button" loading={isLogoutLoading} variant="tertiary" size="small" onClick={handleSwitchAccount}>Changer de compte</Button>
    </>
  )

  const loggedOutContent = (
    <>
      <Typography as="h2" variant="h2" className="mb-2">
        Vous n'êtes pas connecté
      </Typography>
      <Typography as="p" variant="p" className="text-white-muted mb-6">
        Connectez-vous ou créez un compte pour réserver votre séance.
      </Typography>
      <Button className="mr-2" type="button" variant="secondary" size="small" onClick={()=>setIsAuthModalOpen(true)}>Connexion</Button>
      <Button type="button" variant="tertiary" size="small" onClick={()=>setIsAuthModalOpen(true)}>Inscription</Button>
    </>
  )

  return (
    <section>
      <Card className="backdrop-blur">
        {isLoggedIn ? (loggedInContent) : (loggedOutContent)}
      </Card>
    </section>
  )
}

export default LoginStatus