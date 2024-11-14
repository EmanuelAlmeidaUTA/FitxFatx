import React, { useState } from 'react';

const Jogadores = ({ jogadores, onJogadorChange, jogadorAtual }) => (
  <div className="flex flex-row gap-4 justify-center">
    <div>
      <h2 className={`text-lg font-bold text-gray-300 ${jogadorAtual === 'X' ? 'border-b-4 border-yellow-500' : ''}`}>X - {jogadores.nome1}</h2>
      <label htmlFor="nome1" className="text-sm text-gray-300">Nome:</label>
      <input
        type="text"
        id="nome1"
        value={jogadores.nome1}
        onChange={(e) => onJogadorChange('nome1', e.target.value)}
        className="w-full p-2 border border-gray-400 rounded-lg"
      />
    </div>
    <div>
      <h2 className={`text-lg font-bold text-gray-300 ${jogadorAtual === 'O' ? 'border-b-4 border-yellow-500' : ''}`}>0 - {jogadores.nome2}</h2>
      <label htmlFor="nome2" className="text-sm text-gray-300">Nome:</label>
      <input
        type="text"
        id="nome2"
        value={jogadores.nome2}
        onChange={(e) => onJogadorChange('nome2', e.target.value)}
        className="w-full p-2 border border-gray-400 rounded-lg"
      />
    </div>
  </div>
);

export default Jogadores;