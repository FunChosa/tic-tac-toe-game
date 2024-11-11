import React, { useState, useEffect } from "react";
import "../App.css";
import Square from "./Square";
import { WinPatterns } from "../WinPatterns";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkIfTie();
    checkWin();
  }, [board]);

  const chooseSquare = (square) => {
    if (board[square] === "") {
      setPlayer(player === "X" ? "O" : "X");
      setBoard(
        board.map((val, index) => {
          if (index === square && val === "") {
            return player;
          }
          return val;
        })
      );
    }
  };

  const checkWin = () => {
    WinPatterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: board[currPattern[0]], state: "won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "none", state: "tie" });
    }
  };

  const restart = () => {
    setBoard(Array(9).fill(""));
    setResult({ winner: "none", state: "none" });
    setPlayer("X");
  };

  return (
    <>
      <h1>Tic-Tac-Toe Game</h1>
      <h2 className={`text-${result.state}`}>
        {result.state === "won"
          ? `Congratulations! ${result.winner} wins!`
          : result.state === "tie"
          ? "Wow! It's a tie!"
          : "Game is in progress..."}
      </h2>
      <div className={`board-${result.state}`}>
        <div className="row">
          <Square value={board[0]} chooseSquare={() => chooseSquare(0)} />
          <Square value={board[1]} chooseSquare={() => chooseSquare(1)} />
          <Square value={board[2]} chooseSquare={() => chooseSquare(2)} />
        </div>
        <div className="row">
          <Square value={board[3]} chooseSquare={() => chooseSquare(3)} />
          <Square value={board[4]} chooseSquare={() => chooseSquare(4)} />
          <Square value={board[5]} chooseSquare={() => chooseSquare(5)} />
        </div>
        <div className="row">
          <Square value={board[6]} chooseSquare={() => chooseSquare(6)} />
          <Square value={board[7]} chooseSquare={() => chooseSquare(7)} />
          <Square value={board[8]} chooseSquare={() => chooseSquare(8)} />
        </div>
      </div>
      <button className="reset" onClick={restart}>
        Restart
      </button>
    </>
  );
}

export default Board;
