import React, {useState} from 'react'
import './Lottery.css';
import { genTicket} from './Helper';
import Ticket from './Ticket';
import Buttton from './Buttton';

const Lottery = ({n = 4, winCondition}) => {
    const [ticket, setTicket] = useState(genTicket(3));
    const isWinning = winCondition(ticket);

    const buyTicket = () => {
        setTicket(genTicket(n));
    }
  return (
    <div>
      <h1>Lottery Game</h1>
      <div className='lottery'>
       <Ticket ticket={ticket} />
      </div>
      <br></br>
      <Buttton action={buyTicket} />
      <h3>{isWinning && 'Congratulations, you won!'}</h3>
    </div>
  )
}

export default Lottery
