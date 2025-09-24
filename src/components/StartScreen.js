import React from "react";

const StartScreen = ({ onStartGame }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#e7a41f" }}
    >
      <div className="text-center space-y-8 p-8 border bg-white rounded-2xl">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-black mb-4 drop-shadow-lg">
            Maths of Diana
          </h1>
          <div className="w-32 h-1 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-md mx-auto">
          <p className="text-xl text-black   mb-2">
            Uma aventura matemática épica
          </p>
          <p className="text-lg text-black">
            Resolva problemas matemáticos para derrotar monstros e salvar o
            reino!
          </p>
        </div>

        {/* Start Game Button */}
        <div className="pt-8">
          <button
            onClick={onStartGame}
            className="text-black font-bold py-4 px-12 rounded-full text-xl shadow  hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Novo jogo
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
