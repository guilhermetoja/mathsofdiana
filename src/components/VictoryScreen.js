import React from "react";
import { motion } from "framer-motion";

const VictoryScreen = ({ onRestart }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6">
      <div className="relative w-full max-w-2xl mx-auto">
        {/* White square */}
        <div className="bg-white w-full aspect-square flex flex-col items-center justify-center p-8 sm:p-12 md:p-16">
          {/* Diana image with pulse animation */}
          <motion.div
            className="mb-6 sm:mb-8 md:mb-10"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/images/Diana.png"
              alt="Diana"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
            />
          </motion.div>

          {/* VITÓRIA text with pulse animation */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 sm:mb-8 md:mb-10"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.1,
            }}
          >
            VITÓRIA
          </motion.h1>

          {/* Restart button */}
          <button
            onClick={onRestart}
            className="bg-black text-white font-bold py-3 px-6 sm:py-3.5 sm:px-7 md:py-4 md:px-8 rounded-full text-base sm:text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg mt-4 sm:mt-6"
          >
            Muito obrigado por jogar!
          </button>
        </div>
      </div>
    </div>
  );
};

export default VictoryScreen;
