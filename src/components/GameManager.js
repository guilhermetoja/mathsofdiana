import React, { useState, useEffect, useRef } from "react";
import StartScreen from "./StartScreen";
import IntroSequence from "./IntroSequence";
import BattleScene from "./BattleScene";
import GameOverScreen from "./GameOverScreen";
import VictoryScreen from "./VictoryScreen";
import EnemyDefeatedScreen from "./EnemyDefeatedScreen";
import AudioController from "./AudioController";
import { enemies, questions, diana } from "../data/gameData";

/**
 * GameManager component manages the overall game state and flow
 * Handles stage progression, HP management, and game over/victory conditions
 */
const GameManager = () => {
  // Game state
  const [currentStage, setCurrentStage] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameState, setGameState] = useState("startScreen"); // 'startScreen', 'intro', 'playing', 'enemyDefeated', 'gameOver', 'victory'
  const [defeatedEnemyName, setDefeatedEnemyName] = useState("");

  // Audio state
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  // Question randomization state
  const [randomizedQuestions, setRandomizedQuestions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  /**
   * Shuffle array using Fisher-Yates algorithm
   */
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  /**
   * Initialize randomized questions for a stage
   */
  const initializeRandomizedQuestions = (stage) => {
    const stageQuestions = questions[stage];
    const indices = Array.from({ length: stageQuestions.length }, (_, i) => i);
    const shuffledIndices = shuffleArray(indices);

    setRandomizedQuestions((prev) => ({
      ...prev,
      [stage]: shuffledIndices,
    }));
    setCurrentQuestionIndex(0);
  };

  /**
   * Get current question data with randomization
   */
  const getCurrentQuestionData = () => {
    if (!randomizedQuestions[currentStage]) {
      initializeRandomizedQuestions(currentStage);
      return questions[currentStage][0]; // Fallback to first question
    }

    const questionIndex =
      randomizedQuestions[currentStage][currentQuestionIndex];
    return questions[currentStage][questionIndex];
  };

  const currentQuestionData = getCurrentQuestionData();
  const correctAnswerIndex = currentQuestionData.correct;

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
   * Check if enemy is defeated and show defeated screen
   */
  const checkEnemyDefeated = () => {
    if (enemyState.hp <= 1) {
      // Enemy defeated - show defeated screen
      dianaState.hp = dianaState.maxHp;
      setDefeatedEnemyName(enemyState.name);
      setTimeout(() => {
        setGameState("enemyDefeated");
      }, 1000);
    } else {
      // Enemy still alive - next question
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    }
  };

  /**
   * Handle continue from enemy defeated screen
   */
  const handleEnemyDefeatedContinue = () => {
    if (currentStage < enemies.length - 1) {
      // Advance to next stage
      advanceStage();
      setGameState("playing");
    } else {
      // All stages completed - victory!
      setGameState("victory");
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
    setCurrentQuestionIndex(0);
    setEnemyState({
      ...enemies[nextStage],
      hp: enemies[nextStage].maxHp,
      isAttacking: false,
      isTakingDamage: false,
    });
    // Initialize randomized questions for the new stage
    initializeRandomizedQuestions(nextStage);
    resetQuestionState();
  };

  /**
   * Move to next question in current stage
   */
  const nextQuestion = () => {
    const stageQuestions = questions[currentStage];
    const currentRandomizedQuestions = randomizedQuestions[currentStage];

    if (currentQuestionIndex < currentRandomizedQuestions.length - 1) {
      // Move to next question in current randomized set
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // All questions in current randomized set have been used
      // Reshuffle and start from the beginning
      initializeRandomizedQuestions(currentStage);
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
   * Handle start game button click
   */
  const handleStartGame = () => {
    setGameState("intro");
  };

  // Initialize and play background music when game starts
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && gameState === "playing") {
      audio.volume = volume;
      audio.loop = true;
      audio.play().catch((error) => {
        console.log("Audio play failed:", error);
      });
    }
  }, [gameState, volume]);

  // Update volume when volume state changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  // Handle mute toggle
  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  /**
   * Handle intro sequence completion
   */
  const handleIntroComplete = () => {
    setGameState("playing");
  };

  /**
   * Restart the game
   */
  const restartGame = () => {
    setCurrentStage(0);
    setCurrentQuestion(0);
    setCurrentQuestionIndex(0);
    setGameState("startScreen");
    setRandomizedQuestions({});
    setDefeatedEnemyName("");
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
  return (
    <>
      {/* Background music - persists across all game states */}
      <audio ref={audioRef} src="/songs/battle_music.mp3" />

      {/* Audio Controller - shown when music is available */}
      {(gameState === "playing" || gameState === "enemyDefeated" || gameState === "victory") && (
        <AudioController
          volume={volume}
          isMuted={isMuted}
          onVolumeChange={handleVolumeChange}
          onMuteToggle={handleMuteToggle}
        />
      )}

      {gameState === "startScreen" && <StartScreen onStartGame={handleStartGame} />}

      {gameState === "intro" && <IntroSequence onIntroComplete={handleIntroComplete} />}

      {gameState === "gameOver" && <GameOverScreen onRestart={restartGame} stage={currentStage + 1} />}

      {gameState === "victory" && <VictoryScreen onRestart={restartGame} />}

      {gameState === "enemyDefeated" && (
        <EnemyDefeatedScreen
          enemyName={defeatedEnemyName}
          onContinue={handleEnemyDefeatedContinue}
        />
      )}

      {gameState === "playing" && (
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
      )}
    </>
  );
};

export default GameManager;
