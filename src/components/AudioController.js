import React from "react";

const AudioController = ({ volume, isMuted, onVolumeChange, onMuteToggle }) => {
  return (
    <div className="fixed top-2 left-2 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 flex items-center gap-2 sm:gap-3 border border-white/20">
      <button
        onClick={onMuteToggle}
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
        onChange={onVolumeChange}
        className="w-20 sm:w-24 md:w-32 h-1 sm:h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
        title={`Volume: ${Math.round(volume * 100)}%`}
        aria-label="Volume control"
      />
    </div>
  );
};

export default AudioController;

