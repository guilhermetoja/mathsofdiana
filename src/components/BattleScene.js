import React, { useEffect, useRef, useState } from "react";
import Character from "./Character";
import HPBar from "./HPBar";
import QuestionCard from "./QuestionCard";

// ============================================
// DEBUG FEATURE - Remove this entire section before release
// ============================================
const DEBUG_MODE = true; // Set to false to disable, or remove this entire section
// ============================================

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
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  // Initialize and play background music
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.loop = true;
      audio.play().catch((error) => {
        console.log("Audio play failed:", error);
      });
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

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

  // Debug feature: Click question to auto-answer correctly
  const handleQuestionClick = () => {
    if (DEBUG_MODE && !isAnswered) {
      onAnswerSelect(correctAnswer);
    }
  };

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
      {/* Background music */}
      <audio ref={audioRef} src="/songs/battle_music.mp3" />

      {/* Audio Controller - Top Left */}
      <div className="absolute top-2 left-2 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 flex items-center gap-2 sm:gap-3 border border-white/20">
        <button
          onClick={handleMuteToggle}
          className="text-white hover:text-gray-300 transition-colors flex-shrink-0"
          title={isMuted ? "Unmute" : "Mute"}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.23 3.221 11 3.529 11 4v16c0 .471-.77.779-1.707.293L5.586 15z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.23 3.221 11 3.529 11 4v16c0 .471-.77.779-1.707.293L5.586 15z"
              />
            </svg>
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-20 sm:w-24 md:w-32 h-1 sm:h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
          title={`Volume: ${Math.round(volume * 100)}%`}
          aria-label="Volume control"
        />
      </div>

      {/* Question Section - Optimized for landscape */}
      <div className="text-center mt-2 px-2 relative z-20 flex-shrink-0">
        <div
          className={`bg-white backdrop-blur-sm rounded-lg p-2 mx-auto max-w-5xl shadow-lg border-2 border-black ${
            DEBUG_MODE && !isAnswered ? "cursor-pointer hover:opacity-80 transition-opacity" : ""
          }`}
          onClick={handleQuestionClick}
          title={DEBUG_MODE && !isAnswered ? "Debug: Click to auto-answer correctly" : ""}
        >
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-700">{question}</h2>
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
