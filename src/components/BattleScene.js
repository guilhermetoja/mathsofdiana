import React from "react";
import Character from "./Character";
import HPBar from "./HPBar";
import QuestionCard from "./QuestionCard";

/**
 * BattleScene component displays the main battle area with characters and HP bars
 * @param {Object} diana - Diana's data (hp, maxHp, isAttacking, isTakingDamage)
 * @param {Object} enemy - Enemy's data (name, hp, maxHp, type, isAttacking, isTakingDamage)
 * @param {string} question - Current question text
 * @param {Array} answers - Array of answer options
 * @param {function} onAnswerSelect - Callback when answer is selected
 * @param {number} selectedAnswer - Currently selected answer index
 * @param {number} correctAnswer - Correct answer index
 * @param {boolean} showFeedback - Whether to show answer feedback
 * @param {boolean} isAnswered - Whether question has been answered
 */
const BattleScene = ({
  diana,
  enemy,
  question,
  answers,
  onAnswerSelect,
  selectedAnswer,
  correctAnswer,
  showFeedback,
  isAnswered,
}) => {

  return (
    <div
      className="min-h-screen relative flex flex-col"
      style={{
        backgroundImage: `url('/images/battle-bg-stage-${
          enemy.stage || 1
        }.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Question Section - Optimized for landscape */}
      <div className="text-center mt-2 px-2 relative z-20 flex-shrink-0">
        <div className="bg-white backdrop-blur-sm rounded-lg p-2 mx-auto max-w-5xl shadow-lg border-2 border-black">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-700 whitespace-pre-line">{question}</h2>
        </div>
      </div>

      {/* Answer Cards - Always 4 in a row for landscape */}
      <div className="flex justify-center items-center px-2 max-w-7xl mx-auto mt-2 mb-2 relative z-20 flex-shrink-0">
        <div className="grid grid-cols-4 gap-2 w-full max-w-5xl">
          {answers.map((answer, index) => (
            <div key={index} className="flex justify-center">
              <QuestionCard
                answer={answer}
                index={index}
                onSelect={onAnswerSelect}
                isSelected={selectedAnswer === index}
                isCorrect={showFeedback && index === correctAnswer}
                isWrong={
                  showFeedback &&
                  selectedAnswer === index &&
                  index !== correctAnswer
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Characters Section - Optimized for landscape */}
      <div className="flex-1 flex flex-row justify-center items-end px-2 pb-2 gap-4 sm:gap-8 md:gap-16 relative z-10 min-h-0 overflow-visible">
        {/* Diana Section - Left side */}
        <div className="flex flex-col items-center justify-end gap-1 sm:gap-2 md:gap-4 flex-1 max-w-[48%] flex-shrink-0">
          <div className="relative w-full">
            <HPBar
              currentHP={diana.hp}
              maxHP={diana.maxHp}
              character="Diana"
              isDiana={true}
            />
          </div>
          <div className="relative w-full flex justify-center">
            <Character
              type="diana"
              name="Diana"
              isAttacking={diana.isAttacking}
              isTakingDamage={diana.isTakingDamage}
            />
          </div>
        </div>

        {/* Enemy Section - Right side */}
        <div className="flex flex-col items-center justify-end gap-1 sm:gap-2 md:gap-4 flex-1 max-w-[48%] flex-shrink-0">
          <div className="relative w-full">
            <HPBar
              currentHP={enemy.hp}
              maxHP={enemy.maxHp}
              character={enemy.name}
              isDiana={false}
              enemyType={enemy.type}
            />
          </div>
          <div className="relative w-full flex justify-center">
            <Character
              type="enemy"
              name={enemy.name}
              isAttacking={enemy.isAttacking}
              isTakingDamage={enemy.isTakingDamage}
              enemyType={enemy.type}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleScene;
