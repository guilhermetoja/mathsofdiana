import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Character = ({
  type,
  name,
  isAttacking,
  isTakingDamage,
  enemyType = "default",
}) => {
  const isDiana = type === "diana";
  const [attackDistance, setAttackDistance] = useState(400);

  useEffect(() => {
    const updateAttackDistance = () => {
      const width = window.innerWidth;
      // Optimized for landscape/horizontal orientation
      if (width < 768) {
        setAttackDistance(80); // Landscape phone
      } else if (width < 1024) {
        setAttackDistance(150); // Tablet
      } else if (width < 1280) {
        setAttackDistance(250); // Small desktop
      } else {
        setAttackDistance(350); // Desktop
      }
    };

    updateAttackDistance();
    window.addEventListener("resize", updateAttackDistance);
    return () => window.removeEventListener("resize", updateAttackDistance);
  }, []);

  const getCharacterStyles = () => {
    return "w-full max-w-[100px] sm:max-w-[140px] md:max-w-[192px] lg:max-w-[224px] h-auto flex items-center justify-center overflow-visible";
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
        x: isAttacking ? (isDiana ? attackDistance : -attackDistance) : 0,
        scale: isTakingDamage ? 1.1 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <div className="text-center">
        <div
          className={`${
            enemyType === "dragon" || enemyType === "darkKnight"
              ? "w-24 h-24 sm:w-36 sm:h-36 md:w-64 md:h-64 lg:w-80 lg:h-80"
              : isDiana
              ? "w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
              : "w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
          } mb-2 mx-auto`}
        >
          <img
            src={getCharacterImage()}
            alt={name}
            className="w-full h-full object-contain max-w-full max-h-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Character;
