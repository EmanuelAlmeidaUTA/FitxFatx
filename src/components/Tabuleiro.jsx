import React from 'react';

const Tabuleiro = ({ tabuleiro, onClick }) => (
  <div className="grid grid-cols-3 gap-2 w-48 mx-auto mb-6">
    {tabuleiro.map((casilla, index) => (
      <div
        key={index}
        className={`w-16 h-16 flex items-center justify-center border-2 border-gray-300 rounded-md text-2xl font-semibold ${casilla ? 'text-gray-300' : 'text-gray-400'}`}
        onClick={() => onClick(index)}
      >
        {casilla}
      </div>
    ))}
  </div>
);

export default Tabuleiro;