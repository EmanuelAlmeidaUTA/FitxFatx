import React, { useState } from 'react';
import Tabuleiro from './components/Tabuleiro';
import Jogadores from './components/Jogadores';
import GameOver from './components/GameOver';
import './index.css';

const App = () => {
  const [jogadores, setJogadores] = useState({ nome1: 'Jogador 1', nome2: 'Jogador 2' });
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [vencedor, setVencedor] = useState(null);
  const [jogadorAtual, setJogadorAtual] = useState('X');

  const handleClick = (index) => {
    if (tabuleiro[index] === null && !vencedor) {
      const novoTabuleiro = [...tabuleiro];
      novoTabuleiro[index] = jogadorAtual;
      setTabuleiro(novoTabuleiro);
      verificarVencedor(novoTabuleiro);
      setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');
    }
  };

  const handleJogadorChange = (nome, novoNome) => {
    setJogadores({ ...jogadores, [nome]: novoNome });
  }; 

  const verificarVencedor = (novoTabuleiro) => {
    const linhasVencedoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < linhasVencedoras.length; i++) {
      const [a, b, c] = linhasVencedoras[i];
      if (novoTabuleiro[a] && novoTabuleiro[a] === novoTabuleiro[b] && novoTabuleiro[a] === novoTabuleiro[c]) {
        setVencedor(novoTabuleiro[a] === 'X' ? jogadores.nome1 : jogadores.nome2);
        return;
      }
    }

    if (novoTabuleiro.every((casilla) => casilla !== null)) {
      setVencedor('Empate');
    }
  };

  const reiniciarJogo = () => {
    setTabuleiro(Array(9).fill(null));
    setVencedor(null);
    setJogadorAtual('X');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-pattern bg-amber-300" >
      <div>
        <h1 className="text-4xl font-bold text-yellow-900 mb-4">Fitx Fatx</h1>
      </div>
      <div className="md:w-1/2 w-full bg-yellow-800 p-4 relative rounded-md">
        {vencedor && <GameOver vencedor={vencedor} onReiniciar={reiniciarJogo} />}
        <Jogadores jogadores={jogadores} onJogadorChange={handleJogadorChange} jogadorAtual={jogadorAtual}/>
        <Tabuleiro tabuleiro={tabuleiro} onClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
