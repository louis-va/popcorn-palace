import Card from "@/components/common/Card";
import Typography from "@/components/common/Typography"
import Icon from "@/components/common/Icon";

const PaymentInfo = () => {
  return (
    <section>
      <Card className="backdrop-blur">
        <div className="flex justify-between items-start mb-4">
          <Typography as="h2" variant="h2">Informations sur le paiement</Typography>
          <Icon name="payment" className="w-6 h-6 ml-8"/>
        </div>
        
        <Typography as="p" variant="p" className="text-white-muted mb-4">
          Les paiements sont gérés par Stripe. Pour tester cette fonctionnalité, utilisez ces informations de test:
        </Typography>

        <div className="p-4 border-2 border-white/10 border-dashed rounded">
          <Typography as="p" variant="p" className="text-white-muted mb-2">
            Numéro de carte : <span className="text-white">4242 4242 4242 4242</span>
          </Typography>
          <Typography as="p" variant="p" className="text-white-muted mb-2">
            Date d'expiration : <span className="text-white">12/34</span>
          </Typography>
          <Typography as="p" variant="p" className="text-white-muted">
            CVC : <span className="text-white">567</span>
          </Typography>
        </div>
      </Card>
    </section>
  )
}

export default PaymentInfo