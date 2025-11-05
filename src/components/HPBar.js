import React from "react";

const HPBar = ({ currentHP, maxHP, character, isDiana = false, enemyType = null }) => {
  const percentage = (currentHP / maxHP) * 100;
  const barColor = isDiana ? "bg-blue-500" : "bg-red-500";
  const textColor = isDiana ? "text-blue-600" : "text-red-600";

  const getHPImage = () => {
    if (isDiana) {
      return "/images/hp-bar-diana.png";
    }
    return "/images/hp-bar-enemy.png";
  };

  const getNameplateImage = () => {
    if (isDiana) {
      return "/images/diana-nameplate.png";
    }
    // Use enemyType for image filename if available, otherwise fallback to character name
    const imageName = (enemyType || character).toLowerCase();
    return `/images/${imageName}-nameplate.png`;
  };

  const getNameplateSize = () => {
    if (isDiana) {
      return "h-4 sm:h-5 md:h-8";
    }
    // Special sizing for darkwizard nameplate
    if (enemyType && (enemyType.toLowerCase() === "darkwizard" || enemyType.toLowerCase() === "dragon" || enemyType.toLowerCase() === "darkknight")) {
      return "h-6 sm:h-10 md:h-24 lg:h-32"; // Optimized for landscape
    }
    return "h-4 sm:h-5 md:h-8"; // Default size for other enemies
  };

  return (
    <div className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-xs mx-auto flex flex-col items-center">
      <div className="flex justify-center items-center mb-0.5 sm:mb-1 md:mb-2 w-full">
        <img
          src={getNameplateImage()}
          alt={`${character} nameplate`}
          className={`${getNameplateSize()} object-contain`}
          onError={(e) => {
            // Fallback to text if image fails to load
            e.target.style.display = "none";
            const fallbackSpan = document.createElement("span");
            fallbackSpan.className = `font-bold text-xl ${textColor} bg-slate-100 px-3 py-1 rounded-full border border-slate-200`;
            fallbackSpan.textContent = character;
            e.target.parentNode.insertBefore(fallbackSpan, e.target);
          }}
        />
      </div>

      <div className="relative w-28 h-6 sm:w-32 sm:h-7 md:w-40 md:h-10 rounded-lg md:rounded-2xl">
        <img
          src={getHPImage()}
          alt={`${character} HP Bar`}
          className="w-full h-full object-contain rounded-lg md:rounded-xl"
          style={{
            transform: `scaleX(${Math.max(0, percentage) / 100})`,
            transformOrigin: "left center",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "block";
          }}
        />

        <div className="w-full bg-slate-200 rounded-full h-6 sm:h-7 md:h-8 overflow-hidden shadow-inner border border-slate-300 hidden">
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
