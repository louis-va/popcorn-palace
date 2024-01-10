import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useAuth } from "../../auth/useAuth";
import Card from "@/components/common/Card";
import Typography from "@/components/common/Typography"
import Button from "@/components/common/Button";
import { checkBookingStatus } from "@/services/booking/checkBookingStatus.service";

interface FeedbackMessageProps {
  bookingId: string | null;
  success: string | null;
}

const FeedbackMessage = ({ bookingId, success }: FeedbackMessageProps) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [validatePaymentResponse, setValidatePaymentResponse] = useState<any>(null)

  useEffect(() => {
    const fetchScreeningData = async () => {
      try {
        if (isLoggedIn && bookingId) {
          const response = await checkBookingStatus(bookingId);
          const json = await response.json()
          setValidatePaymentResponse(json);
        }
      } catch (error: any) {
        setValidatePaymentResponse(null);
      }
    };
  
    fetchScreeningData();
  }, [isLoggedIn, bookingId]);

  if (success==='false') {
    return (
      <Card className="backdrop-blur">
        <Typography as="h2" variant="h2" className="mb-2">
          Une erreur s'est produite lors du paiement
        </Typography>
        <Typography as="p" variant="p" className="text-white-muted">
          Veuillez réessayer ou nous contacter.
        </Typography>
      </Card>
    )
  } else if (!isLoggedIn || !validatePaymentResponse) {
    return (
      <Card className="backdrop-blur">
        <Typography as="h2" variant="h2">
          Validation de la commande...
        </Typography>
      </Card>
    )
  } else if (validatePaymentResponse.isPaymentValid) {
    return (
      <Card className="backdrop-blur">
        <Typography as="h2" variant="h2" className="mb-2">
          Merci, votre séance est réservée!
        </Typography>
        <Typography as="p" variant="p" className="text-white-muted mb-4">
        {(validatePaymentResponse.emailSent) ? (
          "Vous pouvez retrouver vos tickets dans votre espace personnel ou dans l'email de confirmation."
        ) : (
          'Vous pouvez retrouver vos tickets dans votre espace personnel.'
        )}
        </Typography>
        <Button type="button" variant="secondary" size="small" onClick={() => navigate('/profile') }>Voir mes tickets</Button>
      </Card>
    )
  } else {
    return (
      <Card className="backdrop-blur">
        <Typography as="h2" variant="h2" className="mb-2">
          Une erreur s'est produite lors du paiement
        </Typography>
        <Typography as="p" variant="p" className="text-white-muted">
          Veuillez réessayer ou nous contacter.
        </Typography>
      </Card>
    )
  }
}

export default FeedbackMessage