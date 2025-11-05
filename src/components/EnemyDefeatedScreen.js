import React from "react";

const EnemyDefeatedScreen = ({ enemyName, onContinue }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 md:border-4 border-white">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 sm:mb-8">
            Diana matou {enemyName} com sucesso e avançou em sua aventura matemática
          </p>
          <button
            onClick={onContinue}
            className="bg-black text-white font-bold py-3 px-6 sm:py-3.5 sm:px-7 md:py-4 md:px-8 rounded-full text-base sm:text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnemyDefeatedScreen;

