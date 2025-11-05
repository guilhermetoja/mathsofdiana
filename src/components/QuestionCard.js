import React from "react";

const QuestionCard = ({
  answer,
  index,
  onSelect,
  isSelected,
  isCorrect,
  isWrong,
}) => {
  const getCardStyles = () => {
    let baseStyles =
      "w-full h-[60px] sm:h-[70px] md:h-[80px] rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer border-2 font-bold text-sm sm:text-base md:text-lg relative overflow-hidden border-black ";

    if (isCorrect) {
      return (
        baseStyles +
        "bg-gradient-to-br from-green-50 to-green-100 text-green-800 "
      );
    }

    if (isWrong) {
      return (
        baseStyles +
        "bg-gradient-to-br from-red-50 to-red-100 border-red-300 text-red-800 shadow-red-300 ring-2 ring-red-400"
      );
    }

    if (isSelected) {
      return (
        baseStyles +
        "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300 text-blue-800  "
      );
    }

    return (
      baseStyles + "bg-gradient-to-br from-white to-slate-50 text-slate-700"
    );
  };

  return (
    <div className={getCardStyles()} onClick={() => onSelect(index)}>
      <div className="flex items-center justify-center h-full px-2 sm:px-3 md:px-4 py-1 sm:py-2">
        <span className="font-bold text-center leading-tight text-sm sm:text-base md:text-lg">
          {answer}
        </span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
             45deg,
             transparent,
             transparent 10px,
             rgba(0,0,0,0.1) 10px,
             rgba(0,0,0,0.1) 20px
           )`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default QuestionCard;
