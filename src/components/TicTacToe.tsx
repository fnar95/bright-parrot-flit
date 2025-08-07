"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares: Array<string | null>) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // صفوف
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // أعمدة
      [0, 4, 8], [2, 4, 6]             // أقطار
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (board[i] || calculateWinner(board)) return;
    
    const newBoard = board.slice();
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  const status = winner 
    ? `الفائز: ${winner}`
    : board.every(square => square) 
    ? 'تعادل!'
    : `اللاعب التالي: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">لعبة X و O</h1>
      <div className="text-xl mb-4">{status}</div>
      
      <div className="grid grid-cols-3 gap-2 mb-6">
        {board.map((square, i) => (
          <Button
            key={i}
            variant="outline"
            className="w-20 h-20 text-3xl flex items-center justify-center"
            onClick={() => handleClick(i)}
          >
            {square}
          </Button>
        ))}
      </div>
      
      <Button onClick={resetGame}>إعادة اللعبة</Button>
    </div>
  );
};

export default TicTacToe;