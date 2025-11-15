import React from "react";
import { storyTexts } from "../data/gameData";

const EnemyDefeatedScreen = ({ enemyName, onContinue, currentStage }) => {
  // Determina qual texto de transição mostrar baseado no stage atual
  const getTransitionText = () => {
    switch (currentStage) {
      case 0: // Após derrotar Goblin (stage 0)
        return storyTexts.battle1;
      case 1: // Após derrotar Esqueleto (stage 1)
        return storyTexts.battle2;
      case 2: // Após derrotar Mago das Trevas (stage 2)
        return storyTexts.battle3;
      case 3: // Após derrotar Dragão (stage 3)
        return storyTexts.battle4;
      case 4: // Após derrotar Cavaleiro Sombrio (stage 4)
        return storyTexts.battle5;
      default:
        return `Diana derrotou ${enemyName} com sucesso e avançou em sua aventura matemática.`;
    }
  };

  const transitionText = getTransitionText();
  const battleTitle = currentStage < 4 ? `${currentStage + 1}ª Batalha – ${enemyName}` : `5ª Batalha – ${enemyName}`;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-4xl mx-auto">
        <div className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 md:border-4 border-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6 md:mb-8">
            {battleTitle}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed mb-6 sm:mb-8">
            {transitionText}
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

