import React from "react";

const HPBar = ({ currentHP, maxHP, character, isDiana = false }) => {
  const percentage = (currentHP / maxHP) * 100;
  const barColor = isDiana ? "bg-blue-500" : "bg-red-500";
  const textColor = isDiana ? "text-blue-600" : "text-red-600";

  const getHPImage = () => {
    if (isDiana) {
      return "/images/hp-bar-diana.png";
    }
    return "/images/hp-bar-enemy.png";
  };

  return (
    <div className="w-full max-w-xs mx-auto flex flex-col items-center">
      <div className="flex justify-between items-center mb-3 w-full">
        <span
          className={`font-bold text-xl ${textColor} bg-slate-100 px-3 py-1 rounded-full border border-slate-200`}
        >
          {character}
        </span>
        <span
          className={`text-lg font-bold ${textColor} bg-slate-100 px-3 py-1 rounded-full border border-slate-200`}
        >
          {currentHP}/{maxHP}
        </span>
      </div>

      <div className="relative w-40 h-10 rounded-2xl  ">
        <img
          src={getHPImage()}
          alt={`${character} HP Bar`}
          className="w-full h-full object-contain rounded-xl"
          style={{
            transform: `scaleX(${Math.max(0, percentage) / 100})`,
            transformOrigin: "left center",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "block";
          }}
        />

        <div className="w-full bg-slate-200 rounded-full h-8 overflow-hidden shadow-inner border border-slate-300 hidden">
          <div
            className={`h-full transition-all duration-500 ease-out ${barColor} rounded-full relative`}
            style={{ width: `${Math.max(0, percentage)}%` }}
          >
            <div className="h-full bg-gradient-to-r from-transparent to-white opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HPBar;
