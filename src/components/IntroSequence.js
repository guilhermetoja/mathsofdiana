import React, { useState, useEffect } from "react";

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
    }, 3000);
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
        <div className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
          <p>
            Esse jogo ainda está em desenvolvimento. Coisas como música, história, e questões ainda estão sendo desenvolvidas. Para avançar sem responder, clique na pergunta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSequence;
