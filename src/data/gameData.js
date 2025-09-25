export const enemies = [
  {
    name: "Goblin",
    type: "goblin",
    stage: 1,
    maxHp: 2,
  },
  {
    name: "Esqueleto",
    type: "skeleton",
    stage: 2,
    maxHp: 2,
  },
  {
    name: "Mago das Trevas",
    type: "darkWizard",
    stage: 3,
    maxHp: 1,
  },
  {
    name: "Bebê Dragão",
    type: "dragon",
    stage: 4,
    maxHp: 1,
  },
  {
    name: "Cavaleiro das Trevas",
    type: "darkKnight",
    stage: 5,
    maxHp: 1,
  },
];

export const questions = [
  [
    {
      question: "Quanto é 15 + 27?",
      answers: ["32", "42", "52", "62", "72"],
      correct: 1,
    },
    {
      question: "Quanto é 8 × 7?",
      answers: ["48", "56", "64", "72", "80"],
      correct: 1,
    },
    {
      question: "Quanto é 144 ÷ 12?",
      answers: ["10", "11", "12", "13", "14"],
      correct: 2,
    },
    {
      question: "Quanto é 25 - 13?",
      answers: ["10", "11", "12", "13", "14"],
      correct: 2,
    },
    {
      question: "Quanto é 6²?",
      answers: ["30", "32", "34", "36", "38"],
      correct: 3,
    },
  ],
  // Stage 2 - Fractions and Decimals
  [
    {
      question: "Quanto é 3/4 como decimal?",
      answers: ["0.25", "0.5", "0.75", "0.8", "1.25"],
      correct: 2,
    },
    {
      question: "Quanto é 0.6 como fração?",
      answers: ["1/6", "3/5", "6/10", "2/3", "3/4"],
      correct: 1,
    },
    {
      question: "Quanto é 1/2 + 1/4?",
      answers: ["1/6", "2/6", "3/4", "1/3", "2/3"],
      correct: 2,
    },
    {
      question: "Quanto é 0.25 × 4?",
      answers: ["0.5", "1", "1.5", "2", "2.5"],
      correct: 3,
    },
    {
      question: "Quanto é 2/3 de 15?",
      answers: ["8", "9", "10", "11", "12"],
      correct: 2,
    },
  ],
  // Stage 3 - Algebra Basics
  [
    {
      question: "Se x + 5 = 12, qual é o valor de x?",
      answers: ["5", "6", "7", "8", "9"],
      correct: 2,
    },
    {
      question: "Quanto é 2x + 3 quando x = 4?",
      answers: ["9", "10", "11", "12", "13"],
      correct: 2,
    },
    {
      question: "Resolver: 3y - 7 = 14",
      answers: ["y = 5", "y = 6", "y = 7", "y = 8", "y = 9"],
      correct: 2,
    },
    {
      question: "Quanto é 4(x + 2) quando x = 3?",
      answers: ["16", "18", "20", "22", "24"],
      correct: 2,
    },
    {
      question: "Se 2a + 3 = 11, qual é o valor de a?",
      answers: ["3", "4", "5", "6", "7"],
      correct: 1,
    },
  ],
  // Stage 4 - Geometry
  [
    {
      question: "Qual é a área de um retângulo com comprimento 8 e largura 5?",
      answers: ["35", "40", "45", "50", "55"],
      correct: 1,
    },
    {
      question: "Qual é o perímetro de um quadrado com lado 6?",
      answers: ["20", "24", "28", "32", "36"],
      correct: 1,
    },
    {
      question: "Qual é a área de um círculo com raio 3? (Use π ≈ 3.14)",
      answers: ["18.84", "28.26", "37.68", "47.1", "56.52"],
      correct: 1,
    },
    {
      question: "Qual é o volume de um cubo com lado 4?",
      answers: ["48", "56", "64", "72", "80"],
      correct: 2,
    },
    {
      question:
        "Qual é o perímetro de um círculo com diâmetro 10? (Use π ≈ 3.14)",
      answers: ["25.12", "31.4", "37.68", "43.96", "50.24"],
      correct: 1,
    },
  ],
  // Stage 5 - Advanced Math
  [
    {
      question: "Qual é a raiz quadrada de 64?",
      answers: ["6", "7", "8", "9", "10"],
      correct: 2,
    },
    {
      question: "Quanto é 2³ + 3²?",
      answers: ["15", "17", "19", "21", "23"],
      correct: 1,
    },
    {
      question: "Qual é a inclinação da reta y = 2x + 3?",
      answers: ["1", "2", "3", "4", "5"],
      correct: 1,
    },
    {
      question: "Qual é o log₁₀(100)?",
      answers: ["1", "2", "3", "4", "5"],
      correct: 1,
    },
    {
      question: "Qual é o seno de 30°?",
      answers: ["0.25", "0.5", "0.75", "1", "1.5"],
      correct: 1,
    },
  ],
];

export const diana = {
  name: "Diana",
  maxHp: 5,
  initialHp: 5,
};
