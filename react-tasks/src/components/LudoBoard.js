import React, { useState } from 'react'

const LudoBoard = () => {
    const [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});

    const updateBlue = () => {
        setMoves((prevMoves) => {
            console.log(moves.blue);
           return {...prevMoves, blue: moves.blue + 1};
        })
    }
    const updateYellow = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: moves.yellow + 1};
        })
    }

    const updateGreen = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, green: moves.green + 1};
        })
    }

    const updateRed = () => {
        moves.red += 1;
        console.log(moves.red);
        setMoves({...moves});
    }

    
  return (
    <div >
      <h1>Game begins!</h1>
      <div >
        <p>Blue moves = {moves.blue}</p>
        <button onClick={updateBlue} style={{color: 'white', backgroundColor: 'blue'}}>+ 1</button>
        <p>Yellow moves = {moves.yellow}</p>
        <button onClick={updateYellow} style={{ backgroundColor: 'yellow'}}>+1</button>
        <p>Green moves = {moves.green}</p>
        <button onClick={updateGreen} style={{color: 'white', backgroundColor: 'green'}}>+1</button>
        <p>Red moves = {moves.red}</p>
        <button onClick={updateRed} style={{color: 'white', backgroundColor: 'red'}}>+1</button>
      </div>
    </div>
  )
}

export default LudoBoard;
