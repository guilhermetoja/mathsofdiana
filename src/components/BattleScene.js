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
    <div className="min-h-screen" style={{ backgroundColor: "#e7a41f" }}>
      <div className="text-center p-14">
        <p className="text-slate-600 text-xl font-semibold">
          Estágio {enemy.stage || 1} - Lutando contra {enemy.name}
        </p>
      </div>

      <div className="flex justify-center items-center mb-8 px-4 max-w-3xl mx-auto relative gap-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 "
          style={{
            backgroundImage: `url('/images/battle-bg-stage-${
              enemy.stage || 1
            }.png')`,
            width: "100%",
            height: "450px",
            top: "-50px",
          }}
        ></div>

        <div
          className="flex flex-col items-center relative z-10"
          style={{ marginTop: "170px" }}
        >
          <div className="relative ">
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

        <div
          className="flex flex-col items-center relative z-10"
          style={{ marginTop: "170px" }}
        >
          <div className="relative ">
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

      <div className="text-center mb-8">
        <div className="bg-white backdrop-blur-sm rounded-2xl p-8 mx-auto max-w-3xl shadow-lg border-4 border-slate-200 border-black ">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">{question}</h2>
        </div>
      </div>

      <div className="flex justify-center items-end space-x-1 max-w-6xl mx-auto ">
        {answers.map((answer, index) => (
          <div
            key={index}
            className="flex-shrink-0 "
            style={{
              transform: `rotate(${(index - 2) * 2}deg) translateY(${
                Math.abs(index - 2) * 3
              }px)`,
              zIndex: selectedAnswer === index ? 10 : 5 - Math.abs(index - 2),
            }}
          >
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
  );
};

export default BattleScene;
