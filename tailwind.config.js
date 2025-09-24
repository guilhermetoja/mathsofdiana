/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "diana-blue": "#3B82F6",
        "enemy-red": "#EF4444",
        "health-green": "#10B981",
        "damage-red": "#F59E0B",
      },
      animation: {
        "attack-forward": "attackForward 0.6s ease-in-out",
        "attack-back": "attackBack 0.6s ease-in-out",
        "damage-flash": "damageFlash 0.3s ease-in-out",
      },
      keyframes: {
        attackForward: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(0)" },
        },
        attackBack: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(0)" },
        },
        damageFlash: {
          "0%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "#FEE2E2" },
          "100%": { backgroundColor: "transparent" },
        },
      },
    },
  },
  plugins: [],
};
