import Card from "@/components/common/Card";
import Typography from "@/components/common/Typography"

interface SeatSelectionProps {
  selectedSeats: string[];
  numberToSelect: number;
  bookedSeats: string[];
  setSeats: (seats: string[]) => void;
}

interface SeatSelectionToolProps {
  selectedSeats: string[];
  numberToSelect: number;
  bookedSeats: string[];
  setSeats: (seats: string[]) => void;
}

interface SeatProps {
  row: string;
  col: string;
  isSelected: boolean;
  booked: boolean;
  selectable: boolean;
  add: () => void;
  remove: () => void;
}

const ScreenIllustration = () => {
  return (
    <div className="w-full mb-8 opacity-60">
      <svg className="w-full" width="374" height="33" viewBox="0 0 374 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 11.2221C144.303 3.00856 226.16 2.84379 374 11.2221L348 32.2221C217.928 24.4625 152.249 23.9523 27.5 32.2221L0 11.2221Z" fill="url(#paint0_linear_156_211)" fillOpacity="0.1"/>
        <path d="M0 11.2221C144.303 3.00856 226.16 2.84379 374 11.2221V6.5C227.07 -1.94324 145.243 -0.925361 0 6.49988V11.2221Z" fill="white" fillOpacity="0.15"/>
        <path d="M373.5 10.6929C226.154 2.35413 144.322 2.51768 0.5 10.6928V6.97499C145.278 -0.41956 227.047 -1.43147 373.5 6.97211V10.6929ZM1.37718 11.6446C144.403 3.53174 226.131 3.37109 372.677 11.648L347.836 31.7114C217.94 23.9657 152.244 23.4564 27.6543 31.7107L1.37718 11.6446Z" stroke="white" strokeOpacity="0.04"/>
        <defs>
        <linearGradient id="paint0_linear_156_211" x1="187" y1="5.00049" x2="187" y2="32.2227" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const Legend = () => {
  return (
    <div className="flex flex-wrap mt-8 gap-4 w-full justify-center sm:flex-col">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-t-[.0625rem] rounded-b bg-white/20"></div>
        <Typography as="p" variant="label">Places libres</Typography>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-t-[.0625rem] rounded-b bg-white"></div>
        <Typography as="p" variant="label">Places prises</Typography>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-t-[.0625rem] rounded-b bg-orange"></div>
        <Typography as="p" variant="label">Vos places</Typography>
      </div>
    </div>
  )
}

const Seat = ({row, col, isSelected, booked, selectable, add, remove}: SeatProps) => {
  const toggleSelected = () => {
    if (!isSelected && selectable) {
      add()
    } else {
      remove()
    }
  }

  let style = 'w-6 h-6 rounded-t-sm rounded-b-md text-xs flex justify-center items-center'
  if (booked && selectable) style += ' bg-white text-black/60'
  else if (booked && !selectable) style += ' bg-white/50 text-black/60'
  else if (isSelected) style += ' bg-orange text-white hover:bg-orange-dark'
  else if (selectable) style += ' bg-white/20 text-white/60 hover:bg-white/30'
  else style += ' bg-white/5 text-white/30'

  return (
    <button type="button" disabled={booked || (!selectable && !isSelected)} className={style} onClick={toggleSelected}>
      {row}{col}
    </button>
  )
}

const SeatSelectionTool = ({ selectedSeats, numberToSelect, bookedSeats, setSeats }: SeatSelectionToolProps) => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  const cols = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

  const addSeat = (seat: string) => {
    setSeats([
      ...selectedSeats,
      seat
    ])
  }

  const removeSeat = (seat: string) => {
    const index = selectedSeats.indexOf(seat);
    if (index !== -1) {
      selectedSeats.splice(index, 1);
      setSeats(selectedSeats)
    }
  }

  return (
    <div className="flex items-center justify-center mt-4 sm:mt-0">
      <div className="grid grid-cols-9 grid-rows-9 gap-2">
        {rows.map((row) => (
          cols.map((col) => (
            <Seat 
              key={row+col}
              row={row} 
              col={col} 
              isSelected={selectedSeats.includes(row+col)}
              booked={bookedSeats.includes(row.concat(col))}
              selectable={numberToSelect > selectedSeats.length}
              add={()=>addSeat(row+col)}
              remove={()=>removeSeat(row+col)}
            />
          ))
        ))}
      </div>
    </div>
  )
}

const SeatSelection = ({ selectedSeats, numberToSelect, bookedSeats, setSeats }: SeatSelectionProps) => {
  return (
    <section>
      <Card className="grid sm:grid-cols-2">

        <div className="">
          <Typography as="h2" variant="h2" className='mb-2'>Places</Typography>
          <Typography as="p" variant="p" className="text-white-muted mb-1">Choisissez vos places</Typography>
          {(numberToSelect > 0) ? (
            <Typography as="p" variant="small" className="text-white-muted">{selectedSeats.length}/{numberToSelect} places sélectionnées</Typography>
          ) : (
            <Typography as="p" variant="small" className="text-red">Sélectionnez d'abord vos tickets</Typography>
          )}
        </div>

        <div className="mt-8 sm:mt-0 sm:row-span-2">
          <ScreenIllustration />
          <SeatSelectionTool 
            selectedSeats={selectedSeats} 
            numberToSelect={numberToSelect}
            bookedSeats={bookedSeats} 
            setSeats={setSeats} 
          />
        </div>

        <div className="flex items-end mb-2">
          <Legend />
        </div>

      </Card>
    </section>
  )
}

export default SeatSelection