export const enemies = [
  {
    name: "Goblin",
    type: "goblin",
    stage: 1,
    maxHp: 3,
  },
  {
    name: "Esqueleto",
    type: "skeleton",
    stage: 2,
    maxHp: 3,
  },
  {
    name: "Mago das Trevas",
    type: "darkWizard",
    stage: 3,
    maxHp: 3,
  },
  {
    name: "Bebê Dragão",
    type: "dragon",
    stage: 4,
    maxHp: 4,
  },
  {
    name: "Cavaleiro das Trevas",
    type: "darkKnight",
    stage: 5,
    maxHp: 6,
  },
];

export const questions = [
  // Etapa 1 - Problemas Verbais (resolver mentalmente)
  [
    {
      question: "João pensou em um número e somou 6. O resultado foi 15.\n\nEm qual número João pensou?",
      answers: ["6", "9", "15", "21"],
      correct: 1,
    },
    {
      question: "Maria pensou em um número e subtraiu 8. O resultado foi 12.\n\nQual era o número inicial?",
      answers: ["4", "8", "12", "20"],
      correct: 3,
    },
    {
      question: "O dobro de um número é 18.\n\nQual é esse número?",
      answers: ["6", "9", "12", "18"],
      correct: 1,
    },
    {
      question: "Pedro tinha alguns reais. Ele gastou 15 reais e ficou com 25 reais.\n\nQuantos reais Pedro tinha inicialmente?",
      answers: ["10 reais", "25 reais", "40 reais", "50 reais"],
      correct: 2,
    },
    {
      question: "O triplo de um número é 21.\n\nQual é esse número?",
      answers: ["3", "7", "18", "24"],
      correct: 1,
    },
    {
      question: "Ana comprou 4 cadernos iguais e pagou 36 reais no total.\n\nQuanto custou cada caderno?",
      answers: ["4 reais", "9 reais", "32 reais", "40 reais"],
      correct: 1,
    },
    {
      question: "Carlos pensou em um número, somou 12 e obteve 30.\n\nQual foi o número que Carlos pensou?",
      answers: ["12", "18", "30", "42"],
      correct: 1,
    },
    {
      question: "A metade de um número é 15.\n\nQual é esse número?",
      answers: ["7", "15", "30", "45"],
      correct: 2,
    },
  ],
  
  // Etapa 2 - Completar Sentença com "?"
  [
    {
      question: "\"Um número mais 8 é igual a 20\"\n\nComplete usando o símbolo ?:",
      answers: ["8 + ? = 20", "? + 8 = 20", "? - 8 = 20", "20 - ? = 8"],
      correct: 1,
    },
    {
      question: "\"Um número menos 5 resulta em 12\"\n\nComplete usando o símbolo ?:",
      answers: ["? + 5 = 12", "5 - ? = 12", "? - 5 = 12", "12 + ? = 5"],
      correct: 2,
    },
    {
      question: "\"O dobro de um número é 24\"\n\nComplete usando o símbolo ?:",
      answers: ["? + 2 = 24", "2 + ? = 24", "2 × ? = 24", "? × 24 = 2"],
      correct: 2,
    },
    {
      question: "\"O triplo de um número mais 4 é igual a 19\"\n\nComplete usando o símbolo ?:",
      answers: ["3 + ? + 4 = 19", "3 × ? + 4 = 19", "? + 3 + 4 = 19", "3 × ? - 4 = 19"],
      correct: 1,
    },
    {
      question: "\"Um número dividido por 5 resulta em 6\"\n\nComplete usando o símbolo ?:",
      answers: ["? × 5 = 6", "5 ÷ ? = 6", "? ÷ 5 = 6", "? + 5 = 6"],
      correct: 2,
    },
    {
      question: "\"O dobro de um número menos 7 é igual a 15\"\n\nComplete usando o símbolo ?:",
      answers: ["2 + ? - 7 = 15", "? × 2 - 7 = 15", "2 × ? - 7 = 15", "2 - ? - 7 = 15"],
      correct: 2,
    },
    {
      question: "\"Um número somado com 15 resulta em 32\"\n\nComplete usando o símbolo ?:",
      answers: ["15 + ? = 32", "? + 15 = 32", "? - 15 = 32", "32 - ? = 15"],
      correct: 1,
    },
    {
      question: "\"O quádruplo de um número é 28\"\n\nComplete usando o símbolo ?:",
      answers: ["4 + ? = 28", "? + 4 = 28", "4 × ? = 28", "? ÷ 4 = 28"],
      correct: 2,
    },
  ],
  
  // Etapa 3 - Escrever equação com "x" (PRODUÇÃO)
  [
    {
      question: "Maria pensou em um número, dobrou e somou 5. Obteve 17.\n\nEscreva a equação usando x:",
      answers: ["x + 2 + 5 = 17", "2x + 5 = 17", "2 + x + 5 = 17", "x + 5 = 17"],
      correct: 1,
    },
    {
      question: "Pedro pensou em um número, triplicou e subtraiu 4. O resultado foi 14.\n\nEscreva a equação usando x:",
      answers: ["3 + x - 4 = 14", "x + 3 - 4 = 14", "3x - 4 = 14", "3 - x - 4 = 14"],
      correct: 2,
    },
    {
      question: "Um número somado com 12 resulta em 35.\n\nEscreva a equação usando x:",
      answers: ["x - 12 = 35", "12 - x = 35", "x + 12 = 35", "x × 12 = 35"],
      correct: 2,
    },
    {
      question: "O quádruplo de um número menos 8 é igual a 20.\n\nEscreva a equação usando x:",
      answers: ["4x - 8 = 20", "4 + x - 8 = 20", "x + 4 - 8 = 20", "4x + 8 = 20"],
      correct: 0,
    },
    {
      question: "Ana pensou em um número, multiplicou por 5 e somou 3. Obteve 28.\n\nEscreva a equação usando x:",
      answers: ["5 + x + 3 = 28", "x + 5 + 3 = 28", "5x + 3 = 28", "5x - 3 = 28"],
      correct: 2,
    },
    {
      question: "Um número menos 9 é igual a 16.\n\nEscreva a equação usando x:",
      answers: ["x + 9 = 16", "9 - x = 16", "x - 9 = 16", "x × 9 = 16"],
      correct: 2,
    },
    {
      question: "O dobro de um número mais 10 resulta em 34.\n\nEscreva a equação usando x:",
      answers: ["2x + 10 = 34", "x + 2 + 10 = 34", "2 + x + 10 = 34", "2x - 10 = 34"],
      correct: 0,
    },
    {
      question: "Carlos pensou em um número, multiplicou por 6 e subtraiu 5. O resultado foi 31.\n\nEscreva a equação usando x:",
      answers: ["6 + x - 5 = 31", "x + 6 - 5 = 31", "6x + 5 = 31", "6x - 5 = 31"],
      correct: 3,
    },
  ],
  
  // Etapa 4 - Resolver equações simples
  [
    {
      question: "Resolva: x + 9 = 17\n\nQual é o valor de x?",
      answers: ["x = 6", "x = 8", "x = 9", "x = 26"],
      correct: 1,
    },
    {
      question: "Resolva: y - 12 = 8\n\nQual é o valor de y?",
      answers: ["y = 4", "y = 8", "y = 20", "y = 24"],
      correct: 2,
    },
    {
      question: "Resolva: 5n = 25\n\nQual é o valor de n?",
      answers: ["n = 3", "n = 5", "n = 20", "n = 30"],
      correct: 1,
    },
    {
      question: "Resolva: 3m = 21\n\nQual é o valor de m?",
      answers: ["m = 3", "m = 7", "m = 18", "m = 24"],
      correct: 1,
    },
    {
      question: "Resolva: p ÷ 4 = 6\n\nQual é o valor de p?",
      answers: ["p = 2", "p = 10", "p = 24", "p = 32"],
      correct: 2,
    },
    {
      question: "Resolva: 2k + 5 = 19\n\nQual é o valor de k?",
      answers: ["k = 5", "k = 7", "k = 9", "k = 12"],
      correct: 1,
    },
    {
      question: "Resolva: 4t - 8 = 12\n\nQual é o valor de t?",
      answers: ["t = 1", "t = 4", "t = 5", "t = 20"],
      correct: 2,
    },
    {
      question: "Resolva: 6w + 3 = 27\n\nQual é o valor de w?",
      answers: ["w = 3", "w = 4", "w = 5", "w = 24"],
      correct: 1,
    },
  ],
  
  // Etapa 5 - Resolver equações complexas
  [
    {
      question: "Resolva: 4x + 4 = 20\n\nQual é o valor de x?",
      answers: ["x = 2", "x = 4", "x = 5", "x = 6"],
      correct: 1,
    },
    {
      question: "Resolva: 2x + 7 = 15\n\nQual é o valor de x?",
      answers: ["x = 4", "x = 7", "x = 8", "x = 11"],
      correct: 0,
    },
    {
      question: "Resolva: 3x - 5 = 16\n\nQual é o valor de x?",
      answers: ["x = 3", "x = 5", "x = 7", "x = 21"],
      correct: 2,
    },
    {
      question: "Resolva: 5x + 10 = 35\n\nQual é o valor de x?",
      answers: ["x = 3", "x = 5", "x = 7", "x = 9"],
      correct: 1,
    },
    {
      question: "Resolva: 6x - 9 = 21\n\nQual é o valor de x?",
      answers: ["x = 2", "x = 5", "x = 12", "x = 30"],
      correct: 1,
    },
    {
      question: "Resolva: 7x + 3 = 38\n\nQual é o valor de x?",
      answers: ["x = 5", "x = 7", "x = 35", "x = 41"],
      correct: 0,
    },
    {
      question: "Resolva: 8x - 12 = 28\n\nQual é o valor de x?",
      answers: ["x = 2", "x = 4", "x = 5", "x = 16"],
      correct: 2,
    },
    {
      question: "Resolva: 9x + 6 = 51\n\nQual é o valor de x?",
      answers: ["x = 3", "x = 5", "x = 6", "x = 9"],
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