import React, { useState, useEffect } from "react";
import { storyTexts } from "../data/gameData";

const IntroSequence = ({ onIntroComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);

      setTimeout(() => {
        setShowText(false);
        onIntroComplete();
      }, 1000);
    }, 8000); // Aumentado para dar tempo de ler o prólogo
    return () => clearTimeout(timer);
  }, [onIntroComplete]);

  if (!showText) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 bg-black rounded-xl md:rounded-2xl border-2 md:border-4 border-white w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
          Prólogo
        </h1>
        <div className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
          <p>{storyTexts.prologue}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroSequence;
