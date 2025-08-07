"use client";

import TicTacToe from "@/components/TicTacToe";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TicTacToe />
      <MadeWithDyad />
    </div>
  );
};

export default Index;