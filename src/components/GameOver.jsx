import React from 'react';

const GameOver = ({ vencedor, onReiniciar }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold text-yellow-900 mb-4">
        {vencedor === 'Empate' ? 'Empate!' : `Vencedor: ${vencedor}`}
      </h2>
      <button
        onClick={onReiniciar}
        className="bg-yellow-900/80 text-white px-4 py-2 rounded-md hover:bg-yellow-900"
      >
        Reiniciar
      </button>
    </div>
  </div>
);

export default GameOver;
