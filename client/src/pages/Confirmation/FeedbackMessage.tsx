import { useState, useEffect } from "react";
import { useAuth } from "../../auth/useAuth";
import Card from "@/components/common/Card";
import Typography from "@/components/common/Typography"
import { checkBookingStatus } from "@/services/booking/checkBookingStatus.service";

interface FeedbackMessageProps {
  bookingId: string;
}

const FeedbackMessage = ({ bookingId }: FeedbackMessageProps) => {
  const { isLoggedIn } = useAuth();
  const [validatePaymentResponse, setValidatePaymentResponse] = useState<any>(null)

  useEffect(() => {
    const fetchScreeningData = async () => {
      try {
        if (isLoggedIn) {
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

  if (!isLoggedIn || !validatePaymentResponse) return null

  const PaymentSuccessfullContent = (
    <Card className="backdrop-blur">
      <Typography as="h2" variant="h2" className="mb-2">
        Merci, votre séance est réservée!
      </Typography>
      <Typography as="p" variant="p" className="text-white-muted">
      {(validatePaymentResponse.emailSent) ? (
        "Vous pouvez retrouver vos tickets dans votre espace personnel ou dans l'email de confirmation."
      ) : (
        'Vous pouvez retrouver vos tickets dans votre espace personnel.'
      )}
      </Typography>
    </Card>
  )

  const PaymentErrorContent = (
    <Card className="backdrop-blur">
      <Typography as="h2" variant="h2" className="mb-2">
        Une erreur s'est produite lors du paiement
      </Typography>
      <Typography as="p" variant="p" className="text-white-muted">
        Veuillez réessayer ou nous contacter.
      </Typography>
    </Card>
  )
  
  return (
    <section>
      {(validatePaymentResponse.isPaymentValid) ? (
        PaymentSuccessfullContent
      ): (
        PaymentErrorContent
      )}
    </section>
  )
}

export default FeedbackMessage