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
      answers: ["32", "42", "52", "62"],
      correct: 1,
    },
    {
      question: "Quanto é 8 × 7?",
      answers: ["48", "56", "64", "72"],
      correct: 1,
    },
    {
      question: "Quanto é 144 ÷ 12?",
      answers: ["10", "11", "12", "13"],
      correct: 2,
    },
    {
      question: "Quanto é 25 - 13?",
      answers: ["10", "11", "12", "13"],
      correct: 2,
    },
    {
      question: "Quanto é 6²?",
      answers: ["30", "32", "34", "36"],
      correct: 3,
    },
  ],
  // Stage 2 - Fractions and Decimals
  [
    {
      question: "Quanto é 3/4 como decimal?",
      answers: ["0.25", "0.5", "0.75", "0.8"],
      correct: 2,
    },
    {
      question: "Quanto é 0.6 como fração?",
      answers: ["1/6", "3/5", "6/10", "2/3"],
      correct: 1,
    },
    {
      question: "Quanto é 1/2 + 1/4?",
      answers: ["1/6", "2/6", "3/4", "2/3"],
      correct: 2,
    },
    {
      question: "Quanto é 0.25 × 4?",
      answers: ["0.5", "1", "1.5", "2"],
      correct: 3,
    },
    {
      question: "Quanto é 2/3 de 15?",
      answers: ["8", "9", "10", "11"],
      correct: 2,
    },
  ],
  // Stage 3 - Algebra Basics
  [
    {
      question: "Se x + 5 = 12, qual é o valor de x?",
      answers: ["5", "6", "7", "8"],
      correct: 2,
    },
    {
      question: "Quanto é 2x + 3 quando x = 4?",
      answers: ["9", "10", "11", "12"],
      correct: 2,
    },
    {
      question: "Resolver: 3y - 7 = 14",
      answers: ["y = 5", "y = 6", "y = 7", "y = 8"],
      correct: 2,
    },
    {
      question: "Quanto é 4(x + 2) quando x = 3?",
      answers: ["16", "18", "20", "22"],
      correct: 2,
    },
    {
      question: "Se 2a + 3 = 11, qual é o valor de a?",
      answers: ["3", "4", "5", "6"],
      correct: 1,
    },
  ],
  // Stage 4 - Geometry
  [
    {
      question: "Qual é a área de um retângulo com comprimento 8 e largura 5?",
      answers: ["35", "40", "45", "50"],
      correct: 1,
    },
    {
      question: "Qual é o perímetro de um quadrado com lado 6?",
      answers: ["20", "24", "28", "32"],
      correct: 1,
    },
    {
      question: "Qual é a área de um círculo com raio 3? (Use π ≈ 3.14)",
      answers: ["18.84", "28.26", "37.68", "47.1"],
      correct: 1,
    },
    {
      question: "Qual é o volume de um cubo com lado 4?",
      answers: ["48", "56", "64", "72"],
      correct: 2,
    },
    {
      question:
        "Qual é o perímetro de um círculo com diâmetro 10? (Use π ≈ 3.14)",
      answers: ["25.12", "31.4", "37.68", "43.96"],
      correct: 1,
    },
  ],
  // Stage 5 - Advanced Math
  [
    {
      question: "Qual é a raiz quadrada de 64?",
      answers: ["6", "7", "8", "9"],
      correct: 2,
    },
    {
      question: "Quanto é 2³ + 3²?",
      answers: ["15", "17", "19", "21"],
      correct: 1,
    },
    {
      question: "Qual é a inclinação da reta y = 2x + 3?",
      answers: ["1", "2", "3", "4"],
      correct: 1,
    },
    {
      question: "Qual é o log₁₀(100)?",
      answers: ["1", "2", "3", "4"],
      correct: 1,
    },
    {
      question: "Qual é o seno de 30°?",
      answers: ["0.25", "0.5", "0.75", "1"],
      correct: 1,
    },
  ],
];

export const diana = {
  name: "Diana",
  maxHp: 5,
  initialHp: 5,
};

// Textos de transição da história
export const storyTexts = {
  prologue: "Esta é a história da grande aventura de Diana, uma heroína que, ao ser misteriosamente transportada para uma dimensão mágica, descobre que só poderá voltar para sua realidade se libertar o reino das forças sombrias do Cavaleiro Sombrio. Nesse novo mundo, ela percebe que sua maior arma não é uma espada, mas sim sua inteligência — especialmente sua habilidade de resolver problemas e cálculos num piscar de olhos.",
  
  battle1: "No início de sua jornada, Diana encontra um goblin travesso bloqueando a passagem na floresta. A criatura a desafia com enigmas e problemas numéricos, e Diana percebe que o único jeito de avançar é usando o raciocínio lógico. Após fazer os cálculos certos e superar o desafio, ela segue em direção ao castelo.",
  
  battle2: "Deixando a floresta para trás, Diana se aproxima mais de seu objetivo. Porém, ao atravessar um antigo cemitério, um esqueleto surge para impedi-la. Com passos ritmados e padrões estranhos, ele tenta confundi-la. Diana observa cuidadosamente e percebe que tudo segue uma ordem matemática — e, ao descobrir o padrão certo, ela derrota o guardião do cemitério.",
  
  battle3: "Ao vencer o esqueleto, Diana encontra a entrada de uma masmorra sombria e decide explorá-la. No fundo, um poderoso Mago das Trevas a espera, lançando feitiços que exigem rapidez de cálculo e precisão. Diana, com calma, resolve suas equações e quebra as ilusões do mago, derrotando-o com inteligência.",
  
  battle4: "Ao sair da masmorra, Diana lembra das filhas e sente o coração se encher de determinação. Rumo ao castelo, ela precisa atravessar um vulcão ativo. Lá, um gigantesco Dragão de Fogo a desafia, cuspindo labaredas ritmadas como uma sequência numérica perigosa. Observando o intervalo dos ataques e resolvendo mentalmente o \"padrão do fogo\", Diana encontra a brecha perfeita e derrota o inimigo mais forte até então.",
  
  battle5: "Após passar pelo vulcão, Diana avança corajosamente para dentro do castelo e arromba a porta da sala do trono. Ali, enfrenta o maior vilão do reino. O Cavaleiro Sombrio tenta enganá-la com ilusões, números falsos e problemas cada vez mais difíceis, mas Diana não se intimida. Com raciocínio afiado e coragem inabalável, ela resolve cada desafio matemático, vence a batalha e liberta o reino da escuridão.",
  
  final: "Exausta após a batalha final, Diana desmaia. Quando abre os olhos, está de volta à sua casa. Ela se pergunta se tudo não teria sido apenas um sonho… mas ao olhar para suas mãos, ainda sente o leve calor de ter vencido o vulcão. E sorri. Afinal, seja em um mundo mágico ou na vida real, a matemática continua sendo sua maior aliada."
};