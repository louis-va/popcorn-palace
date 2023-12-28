import Card from "../common/Card";
import Typography from "../common/Typography";

interface BookingStepsProps {
  step: number;
}

const BookingSteps = ({ step }: BookingStepsProps) => {
  const stepStyle = "text-black text-sm font-medium h-6 w-6 flex justify-center items-center rounded-full"
  
  return (
    <section>
      <Card className="backdrop-blur">
        <div className="flex items-center w-full">

          {(step==1) ? (
            <div className="flex items-center grow">
              <div className={`bg-orange grow-0 ${stepStyle}`}>1</div>
              <Typography as="p" variant="label" className="grow-0 ml-2">Tickets & places</Typography>
              <div className="grow border border-white/15 border-dashed mx-2 mt-0.5"></div>
            </div>
          ) : (
            <div className="flex items-center grow-0">
              <div className={`${(step>1) ? 'bg-white' : 'bg-white/20'} ${stepStyle}`}>1</div>
              <div className="w-4 border border-white/15 border-dashed mx-2 mt-0.5"></div>
            </div>
          )}

          {(step==2) ? (
            <div className="flex items-center grow">
              <div className={`bg-orange grow-0 ${stepStyle}`}>2</div>
              <Typography as="p" variant="label" className="grow-0 ml-2">Paiement</Typography>
              <div className="grow border border-white/15 border-dashed mx-2 mt-0.5"></div>
            </div>
          ) : (
            <div className="flex items-center grow-0">
              <div className={`${(step>2) ? 'bg-white' : 'bg-white/20'}  ${stepStyle}`}>2</div>
              <div className="w-4 border border-white/15 border-dashed mx-2 mt-0.5"></div>
            </div>
          )}

          {(step==3) ? (
            <div className="flex items-center grow">
              <div className={`bg-orange grow-0 ${stepStyle}`}>3</div>
              <Typography as="p" variant="label" className="grow-0 ml-2">Confirmation</Typography>
            </div>
          ) : (
            <div className="flex items-center grow-0">
              <div className={`${(step>3) ? 'bg-white' : 'bg-white/20'}  ${stepStyle}`}>3</div>
            </div>
          )}

        </div>
      </Card>
    </section>
  )
}

export default BookingSteps