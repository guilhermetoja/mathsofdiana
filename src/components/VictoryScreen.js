import React from "react";

const VictoryScreen = ({ onRestart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center bg-white rounded-2xl p-12 max-w-2xl mx-4 shadow-lg border border-slate-200">
        <div className="text-8xl mb-6">🏆</div>
        <h1 className="text-6xl font-bold text-slate-800 mb-6">Victory!</h1>
        <p className="text-2xl text-slate-600 mb-4 font-bold">
          Diana has triumphed over all enemies! ⚔️
        </p>
        <p className="text-xl text-slate-500 mb-8 bg-slate-100 rounded-full px-6 py-3 inline-block font-semibold">
          You have mastered the Maths of Diana and saved the kingdom!
        </p>
        <div className="mb-8">
          <p className="text-lg text-slate-700 font-bold">
            🎉 Congratulations! 🎉
          </p>
          <p className="text-lg text-slate-600 font-semibold">
            You completed all 5 stages with your mathematical prowess!
          </p>
        </div>
        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          🎮 Play Again
        </button>
      </div>
    </div>
  );
};

export default VictoryScreen;
