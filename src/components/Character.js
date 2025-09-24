import React from "react";
import { motion } from "framer-motion";

const Character = ({
  type,
  name,
  isAttacking,
  isTakingDamage,
  enemyType = "default",
}) => {
  const isDiana = type === "diana";

  const getCharacterStyles = () => {
    return "w-28 h-36 flex items-center justify-center";
  };

  const getCharacterImage = () => {
    if (isDiana) {
      return "/images/Diana.png";
    }

    const enemyImages = {
      goblin: "/images/Goblin.png",
      skeleton: "/images/Skeleton.png",
      darkWizard: "/images/DarkWizard.png",
      dragon: "/images/Dragon.png",
      darkKnight: "/images/DarkKnight.png",
    };

    return enemyImages[enemyType] || enemyImages.default;
  };

  return (
    <motion.div
      className={getCharacterStyles()}
      animate={{
        x: isAttacking ? (isDiana ? 50 : -50) : 0,
        scale: isTakingDamage ? 1.1 : 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <div className="text-center">
        <div className="w-24 h-24 mb-2 mx-auto">
          <img
            src={getCharacterImage()}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Character;
