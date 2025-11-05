import React from "react";

const GameOverScreen = ({ onRestart, stage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6">
      <div className="text-center bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-2xl mx-auto shadow-lg border border-slate-200 w-full">
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-5 md:mb-6">💀</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-5 md:mb-6">Game Over</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-3 sm:mb-4 font-bold">
          Diana sofreu uma triste derrota!
        </p>
        <p className="text-base sm:text-lg md:text-xl text-slate-500 mb-6 sm:mb-7 md:mb-8 bg-slate-100 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 inline-block">
          Você chegou até a fase {stage} antes de ser derrotado.
        </p>
        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 sm:py-3.5 sm:px-7 md:py-4 md:px-8 rounded-full text-base sm:text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          🔄 Tentar Novamente
        </button>
      </div>
    </div>
  );
};

export default GameOverScreen;
