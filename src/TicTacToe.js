import React, { useEffect, useState } from "react";
import "./TicTacToe.css";
const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winMessage, setWinMessage] = useState("");
//   const [msg,setMsg] = useState('')
//   useEffect(() => {
//     console.log(cells);
//     checkForWinner();
//   }, [cells]);
  // across : [
  //     [0,1,2],
  //     [3,4,5],
  //     [6,7,8]
  // ]

  // down : [
  //     [0,3,6],
  //     [1,4,7],
  //     [2,5,8]
  // ]
  const reloadGame = () => {
    setTurn("x");
    setWinMessage("");
    setCells(Array(9).fill(""));
  };
  const checkForWinner = (cells) => {
    console.log(checkForWinner);
    if (cells[0] === cells[1] && 
        cells[1] === cells[2] && 
        cells[0] !== "") 
        {
      setWinMessage(`${cells[0]} has won`);
    } else if (
      cells[3] === cells[4] &&
      cells[4] === cells[5] &&
      cells[3] !== ""
    ) {
      setWinMessage(`${cells[3]} has won`);
    } else if (
      cells[6] === cells[7] &&
      cells[7] === cells[8] &&
      cells[6] !== ""
    ) {
      setWinMessage(`${cells[6]} has won`);
    } else if (
      cells[0] === cells[3] &&
      cells[3] === cells[6] &&
      cells[0] !== ""
    ) {
      setWinMessage(`${cells[0]} has won`);
    } else if (
      cells[1] === cells[4] &&
      cells[4] === cells[7] &&
      cells[1] !== ""
    ) {
      setWinMessage(`${cells[1]} has won`);
    } else if (
      cells[2] === cells[5] &&
      cells[5] === cells[8] &&
      cells[2] !== ""
    ) {
      setWinMessage(`${cells[2]} has won`);
    } else if (
      cells[0] === cells[4] &&
      cells[4] === cells[8] &&
      cells[0] !== ""
    ) {
      setWinMessage(`${cells[0]} has won`);
    } else if (
      cells[2] === cells[4] &&
      cells[4] === cells[6] &&
      cells[2] !== ""
    ) {
      setWinMessage(`${cells[2]} has won`);
    }
  };
  const handleClick = (num) => {
    let newcells = [...cells];
    if (cells[num] !== "") {
      alert("Already clicked");
      return;
    }
    if (turn === "X") {
      newcells[num] = "X";
      setTurn("O");
    } else {
      newcells[num] = "O";
      setTurn("X");
    }
    console.log(newcells);
    setCells(newcells);

    checkForWinner(newcells);
  };

  const Cell = ({ num }) => {
    return (
      <td onClick={() => handleClick(num)} className="cell">
        {cells[num]}
      </td>
    );
  };

  return (
    <div className="cell-container">
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winMessage && (
        <div>
          <h1>{winMessage}</h1>
          <button onClick={reloadGame}>Reload</button>
        </div>
      )}
      {/* <div>
      <button onClick={()=>setMsg('posts')}>Posts</button>
      <button onClick={()=>setMsg('comments')}>Comments</button>
      <h1>{msg}</h1>
      </div> */}
    </div>
  );
};

export default TicTacToe;
