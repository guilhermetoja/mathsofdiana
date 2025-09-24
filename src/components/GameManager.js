import React, { useState, useEffect } from "react";
import BattleScene from "./BattleScene";
import GameOverScreen from "./GameOverScreen";
import VictoryScreen from "./VictoryScreen";
import { enemies, questions, diana } from "../data/gameData";

/**
 * GameManager component manages the overall game state and flow
 * Handles stage progression, HP management, and game over/victory conditions
 */
const GameManager = () => {
  // Game state
  const [currentStage, setCurrentStage] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameState, setGameState] = useState("playing"); // 'playing', 'gameOver', 'victory'

  // Character states
  const [dianaState, setDianaState] = useState({
    hp: diana.maxHp,
    maxHp: diana.maxHp,
    isAttacking: false,
    isTakingDamage: false,
  });

  const [enemyState, setEnemyState] = useState({
    ...enemies[0],
    hp: enemies[0].maxHp,
    isAttacking: false,
    isTakingDamage: false,
  });

  // Question state
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  // Get current question data
  const currentQuestionData = questions[currentStage][currentQuestion];
  const correctAnswerIndex = currentQuestionData.correct;

  /**
   * Handle answer selection
   * @param {number} answerIndex - Index of selected answer
   */
  const handleAnswerSelect = (answerIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    setShowFeedback(true);

    // Determine if answer is correct
    const isCorrect = answerIndex === correctAnswerIndex;

    if (isCorrect) {
      // Correct answer - enemy takes damage
      handleCorrectAnswer();
    } else {
      // Wrong answer - Diana takes damage
      handleWrongAnswer();
    }
  };

  /**
   * Handle correct answer - enemy takes damage
   */
  const handleCorrectAnswer = () => {
    // Diana attacks
    setDianaState((prev) => ({ ...prev, isAttacking: true }));

    setTimeout(() => {
      // Enemy takes damage
      setEnemyState((prev) => {
        const newHp = Math.max(0, prev.hp - 1);
        return {
          ...prev,
          hp: newHp,
          isTakingDamage: true,
        };
      });

      // Reset attack animation
      setDianaState((prev) => ({ ...prev, isAttacking: false }));

      setTimeout(() => {
        setEnemyState((prev) => ({ ...prev, isTakingDamage: false }));
        checkEnemyDefeated();
      }, 600);
    }, 300);
  };

  /**
   * Handle wrong answer - Diana takes damage
   */
  const handleWrongAnswer = () => {
    // Enemy attacks
    setEnemyState((prev) => ({ ...prev, isAttacking: true }));

    setTimeout(() => {
      // Diana takes damage
      setDianaState((prev) => {
        const newHp = Math.max(0, prev.hp - 1);
        return {
          ...prev,
          hp: newHp,
          isTakingDamage: true,
        };
      });

      // Reset attack animation
      setEnemyState((prev) => ({ ...prev, isAttacking: false }));

      setTimeout(() => {
        setDianaState((prev) => ({ ...prev, isTakingDamage: false }));
        checkDianaDefeated();
      }, 600);
    }, 300);
  };

  /**
   * Check if enemy is defeated and advance stage
   */
  const checkEnemyDefeated = () => {
    if (enemyState.hp <= 1) {
      // Enemy defeated
      if (currentStage < enemies.length - 1) {
        // Advance to next stage
        setTimeout(() => {
          advanceStage();
        }, 1000);
      } else {
        // All stages completed - victory!
        setTimeout(() => {
          setGameState("victory");
        }, 1000);
      }
    } else {
      // Enemy still alive - next question
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    }
  };

  /**
   * Check if Diana is defeated
   */
  const checkDianaDefeated = () => {
    if (dianaState.hp <= 1) {
      // Diana defeated - game over
      setTimeout(() => {
        setGameState("gameOver");
      }, 1000);
    } else {
      // Diana still alive - next question
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    }
  };

  /**
   * Advance to next stage
   */
  const advanceStage = () => {
    const nextStage = currentStage + 1;
    setCurrentStage(nextStage);
    setCurrentQuestion(0);
    setEnemyState({
      ...enemies[nextStage],
      hp: enemies[nextStage].maxHp,
      isAttacking: false,
      isTakingDamage: false,
    });
    resetQuestionState();
  };

  /**
   * Move to next question in current stage
   */
  const nextQuestion = () => {
    if (currentQuestion < questions[currentStage].length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
    resetQuestionState();
  };

  /**
   * Reset question state for next question
   */
  const resetQuestionState = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsAnswered(false);
  };

  /**
   * Restart the game
   */
  const restartGame = () => {
    setCurrentStage(0);
    setCurrentQuestion(0);
    setGameState("playing");
    setDianaState({
      hp: diana.maxHp,
      maxHp: diana.maxHp,
      isAttacking: false,
      isTakingDamage: false,
    });
    setEnemyState({
      ...enemies[0],
      hp: enemies[0].maxHp,
      isAttacking: false,
      isTakingDamage: false,
    });
    resetQuestionState();
  };

  // Render different screens based on game state
  if (gameState === "gameOver") {
    return <GameOverScreen onRestart={restartGame} stage={currentStage + 1} />;
  }

  if (gameState === "victory") {
    return <VictoryScreen onRestart={restartGame} />;
  }

  // Main game screen
  return (
    <BattleScene
      diana={dianaState}
      enemy={enemyState}
      question={currentQuestionData.question}
      answers={currentQuestionData.answers}
      onAnswerSelect={handleAnswerSelect}
      selectedAnswer={selectedAnswer}
      correctAnswer={correctAnswerIndex}
      showFeedback={showFeedback}
      isAnswered={isAnswered}
    />
  );
};

export default GameManager;
