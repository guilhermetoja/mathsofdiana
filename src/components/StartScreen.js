import React from "react";

const StartScreen = ({ onStartGame }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black"
    >
      <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 p-6 sm:p-7 md:p-8 border-2 md:border-4 bg-white rounded-xl md:rounded-2xl w-full max-w-lg mx-auto">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2 sm:mb-3 md:mb-4 drop-shadow-lg">
            Maths of Diana
          </h1>
          <div className="w-24 sm:w-28 md:w-32 h-1 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-md mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-black mb-2">
            Uma aventura matemática épica
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black">
            Resolva problemas matemáticos para derrotar monstros e salvar o
            reino!
          </p>
        </div>

        {/* Start Game Button */}
        <div className="pt-4 sm:pt-6 md:pt-8">
          <button
            onClick={onStartGame}
            className="text-black font-bold py-3 px-8 sm:py-3.5 sm:px-10 md:py-4 md:px-12 rounded-full text-base sm:text-lg md:text-xl shadow hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Novo jogo
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
