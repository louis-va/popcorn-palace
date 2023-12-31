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
    selectedSeats.push(seat)
    setSeats(selectedSeats)
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
      <Card className="sm:flex sm:justify-between sm:gap-8">
        <div className="sm:flex sm:flex-col sm:justify-between sm:min-w-48">
          <div>
            <Typography as="h2" variant="h2" className='mb-2'>Places</Typography>
            <Typography as="p" variant="p" className="text-white-muted mb-1">Choisissez vos places</Typography>
            {(numberToSelect > 0) ? (
              <Typography as="p" variant="small" className="text-white-muted">{selectedSeats.length}/{numberToSelect} places sélectionnées</Typography>
            ) : (
              <Typography as="p" variant="small" className="text-red">Sélectionnez d'abord vos tickets</Typography>
            )}
          </div>
          <Legend />
        </div>
        <SeatSelectionTool 
          selectedSeats={selectedSeats} 
          numberToSelect={numberToSelect}
          bookedSeats={bookedSeats} 
          setSeats={()=>setSeats} 
        />
      </Card>
    </section>
  )
}

export default SeatSelection