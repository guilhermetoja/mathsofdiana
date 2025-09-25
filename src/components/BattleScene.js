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
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('/images/battle-bg-stage-${
          enemy.stage || 1
        }.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "4rem",
      }}
    >
      <div className="text-center mb-8 relative z-20">
        <div className="bg-white backdrop-blur-sm rounded-2xl p-8 mx-auto max-w-3xl shadow-lg border-4 border-black">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">{question}</h2>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-1 max-w-6xl mx-auto mb-8 relative z-20">
        {answers.map((answer, index) => (
          <div key={index} className="flex-shrink-0">
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
      <div
        className="flex justify-center items-end px-4 max-w-3xl mx-auto relative gap-64"
        style={{
          position: "absolute",
          bottom: "9rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "48rem",
        }}
      >
        <div className="flex flex-col items-center relative z-10 gap-12">
          <div className="relative">
            <HPBar
              currentHP={diana.hp}
              maxHP={diana.maxHp}
              character="Diana"
              isDiana={true}
            />
          </div>
          <Character
            type="diana"
            name="Diana"
            isAttacking={diana.isAttacking}
            isTakingDamage={diana.isTakingDamage}
          />
        </div>

        <div className="flex flex-col items-center relative z-10 gap-12">
          <div className="relative">
            <HPBar
              currentHP={enemy.hp}
              maxHP={enemy.maxHp}
              character={enemy.name}
              isDiana={false}
            />
          </div>
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
  );
};

export default BattleScene;
