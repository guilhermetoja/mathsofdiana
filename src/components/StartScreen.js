import React, { useState } from "react";

const StartScreen = ({ onStartGame }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTeacherContent, setShowTeacherContent] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setShowTeacherContent(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowTeacherContent(false);
  };

  const handleTeacherConfirm = () => {
    setShowTeacherContent(true);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 relative"
      style={{
        backgroundImage: "url('/images/main_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 p-6 sm:p-7 md:p-8 bg-transparent rounded-xl md:rounded-2xl w-full max-w-lg mx-auto">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
            <img 
              src="/images/mathsofdiana_title.png" 
              alt="Maths of Diana" 
              className="max-w-full h-auto w-full max-w-md sm:max-w-lg md:max-w-xl"
            />
          </div>
          <div className="w-24 sm:w-28 md:w-32 h-1 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-md mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-white mb-2 font-bold drop-shadow-2xl px-4 py-2 rounded-lg bg-black bg-opacity-50 backdrop-blur-sm">
            Uma aventura matemática épica
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white drop-shadow-2xl px-4 py-2 rounded-lg bg-black bg-opacity-50 backdrop-blur-sm">
            Resolva problemas matemáticos para derrotar monstros e salvar o
            reino!
          </p>
        </div>

        {/* Start Game Button */}
        <div className="pt-4 sm:pt-6 md:pt-8">
          <button
            onClick={onStartGame}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black font-bold py-3 px-8 sm:py-3.5 sm:px-10 md:py-4 md:px-12 rounded-full text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Novo jogo
          </button>
        </div>
      </div>

      {/* Botão Para os Professores - Canto inferior direito */}
      <button
        onClick={openModal}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white bg-opacity-90 hover:bg-opacity-100 text-black font-bold py-2 px-4 sm:py-2.5 sm:px-5 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Para os professores
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="bg-white rounded-xl md:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {!showTeacherContent ? (
              // Primeiro estado do modal - Verificação
              <div className="p-6 sm:p-8 md:p-10">
                <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 sm:mb-8 leading-relaxed">
                  Hmmmm, tem certeza que você é um professor ou só um aluno curioso? Se for, dê meia volta, nobre guerreiro, daqui em diante só tem conversa chata de professor!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={closeModal}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out"
                  >
                    Ok, vou voltar e jogar.
                  </button>
                  <button
                    onClick={handleTeacherConfirm}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out"
                  >
                    Sim, sou professor!
                  </button>
                </div>
              </div>
            ) : (
              // Segundo estado do modal - Conteúdo do professor
              <div className="relative">
                {/* Botão X fixo no topo durante scroll */}
                <div className="sticky top-0 z-10 bg-white pb-2 pt-6 px-6 sm:px-8 md:px-10">
                  <div className="flex justify-end">
                    <button
                      onClick={closeModal}
                      className="bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 text-2xl sm:text-3xl font-bold shadow-lg transition-all duration-200"
                    >
                      ×
                    </button>
                  </div>
                </div>
                <div className="p-6 sm:p-8 md:p-10 pt-0">
                  <div className="mb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Por que essa sequência funciona?</h1>
                  </div>

                <div className="prose prose-lg max-w-none text-gray-700">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 mb-4">Guia rápido para professores</h2>
                  <hr className="my-6 border-gray-300" />

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-3">O problema que estamos resolvendo</h3>
                  <p className="mb-4">
                    Você já percebeu que muitos alunos do Ensino Médio "travam" quando precisam transformar "o dobro de um número mais 5 é igual a 17" em "2x + 5 = 17"? 
                  </p>
                  <p className="mb-6">
                    Eles até conseguem resolver a equação pronta, mas não sabem criar. Esse é o problema que a sequência ataca.
                  </p>

                  <hr className="my-6 border-gray-300" />

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-4">A solução: 5 etapas progressivas</h3>

                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mt-4 mb-2"><strong>Etapa 1: Problemas Verbais</strong></h4>
                  <p className="mb-2 italic">"João pensou em um número e somou 6. Deu 15. Qual número?"</p>
                  <p className="mb-4"><strong>Por quê?</strong> Ativa o raciocínio que o aluno já tem. Ele resolve mentalmente, sem pressão de símbolos.</p>

                  <hr className="my-4 border-gray-200" />

                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mt-4 mb-2"><strong>Etapa 2: Completar com "?"</strong></h4>
                  <p className="mb-2 italic">"Um número mais 8 é igual a 20" → Complete: ? + 8 = 20</p>
                  <p className="mb-4"><strong>Por quê?</strong> Introduz símbolo, mas familiar (interrogação = dúvida). É a ponte entre pensar e escrever matematicamente.</p>

                  <hr className="my-4 border-gray-200" />

                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mt-4 mb-2"><strong>Etapa 3: Escrever com "x"</strong></h4>
                  <p className="mb-2 italic">"Maria dobrou um número e somou 5. Deu 17" → Escreva: 2x + 5 = 17</p>
                  <p className="mb-4"><strong>Por quê?</strong> Agora sim formaliza. Mas como já praticou com "?", a transição é suave.</p>

                  <hr className="my-4 border-gray-200" />

                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mt-4 mb-2"><strong>Etapa 4: Resolver equações simples</strong></h4>
                  <p className="mb-2 italic">Resolva: x + 9 = 17</p>
                  <p className="mb-4"><strong>Por quê?</strong> Agora que entende O QUE é uma equação, aprende COMO resolver.</p>

                  <hr className="my-4 border-gray-200" />

                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mt-4 mb-2"><strong>Etapa 5: Resolver equações complexas</strong></h4>
                  <p className="mb-2 italic">Resolva: 4x + 4 = 20</p>
                  <p className="mb-6"><strong>Por quê?</strong> Consolida e automatiza o procedimento.</p>

                  <hr className="my-6 border-gray-300" />

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-4">Por que funciona? As teorias por trás</h3>

                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mt-4 mb-2">1. <strong>Raymond Duval - Múltiplas Representações</strong></h4>
                  <p className="mb-2">Duval (2003) descobriu que matemática exige trabalhar o mesmo conceito em diferentes "idiomas":</p>
                  <ul className="list-disc list-inside mb-2 ml-4">
                    <li>Linguagem cotidiana: "o dobro de um número"</li>
                    <li>Símbolos: "2x"</li>
                  </ul>
                  <p className="mb-2"><strong>O problema:</strong> A maioria dos alunos não sabe "traduzir" entre essas linguagens.</p>
                  <p className="mb-4"><strong>Nossa solução:</strong> A sequência treina explicitamente essa tradução nas Etapas 2 e 3.</p>

                  <hr className="my-4 border-gray-200" />

                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mt-4 mb-2">2. <strong>Vygotsky - Zona de Desenvolvimento Proximal</strong></h4>
                  <p className="mb-2">Vygotsky (1978) mostrou que aprendemos melhor quando o desafio está "um degrau acima" do que já sabemos - nem fácil demais, nem impossível.</p>
                  <p className="mb-4"><strong>Aplicação:</strong> Cada etapa é um degrau alcançável a partir do anterior. O símbolo "?" funciona como apoio temporário (andaime) até o aluno estar pronto para "x".</p>

                  <hr className="my-4 border-gray-200" />

                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mt-4 mb-2">3. <strong>Sweller - Carga Cognitiva</strong></h4>
                  <p className="mb-2">Sweller (1988) provou que nosso cérebro tem limite de processamento. Muita informação nova de uma vez = sobrecarga = não aprende.</p>
                  <p className="mb-2"><strong>Aplicação:</strong></p>
                  <ul className="list-disc list-inside mb-4 ml-4">
                    <li>Etapa 1: Zero símbolos novos</li>
                    <li>Etapa 2: Um símbolo novo (?)</li>
                    <li>Etapa 3: Formalização (x)</li>
                  </ul>
                  <p className="mb-4">Progressão gradual evita sobrecarregar.</p>

                  <hr className="my-4 border-gray-200" />

                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mt-4 mb-2">4. <strong>Ausubel - Aprendizagem Significativa</strong></h4>
                  <p className="mb-2">Ausubel (2000) ensinou que só aprendemos de verdade quando conectamos o novo com algo que já sabemos.</p>
                  <p className="mb-6"><strong>Aplicação:</strong> Parte de problemas verbais (familiar) → constrói pontes → chega na álgebra formal (novo).</p>

                  <hr className="my-6 border-gray-300" />

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-4">O que diz a BNCC</h3>
                  <p className="mb-2">A sequência trabalha diretamente essas habilidades:</p>
                  <p className="mb-2"><strong>EF07MA13:</strong> "Compreender a ideia de variável, representada por letra ou símbolo"</p>
                  <p className="mb-2">→ Etapas 2 e 3 fazem exatamente isso</p>
                  <p className="mb-2"><strong>EF07MA18:</strong> "Resolver e elaborar problemas representados por equações"</p>
                  <p className="mb-6">→ Etapa 3 = elaborar | Etapas 4-5 = resolver</p>

                  <hr className="my-6 border-gray-300" />

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-4">O diferencial: o símbolo "?"</h3>
                  <p className="mb-2">Essa é a inovação da sequência. Ao invés de pular direto para "x", usa "?" como intermediário.</p>
                  <p className="mb-2"><strong>Vantagens:</strong></p>
                  <ul className="list-disc list-inside mb-6 ml-4">
                    <li>É familiar (usamos ? quando temos dúvidas)</li>
                    <li>Não assusta como "x" assusta</li>
                    <li>Torna explícito o processo de simbolização</li>
                    <li>Reduz ansiedade matemática</li>
                  </ul>

                  <hr className="my-6 border-gray-300" />

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-4">Por que funciona para REINTRODUÇÃO no Ensino Médio?</h3>
                  <ul className="list-disc list-inside mb-6 ml-4">
                    <li><strong>Não infantiliza</strong> - Sem desenhinhos ou blocos. Linguagem adequada para adolescentes.</li>
                    <li><strong>Reconstrói o conceito</strong> - Muitos alunos decoraram "passa pro outro lado trocando sinal" sem entender. A sequência reconstrói o significado.</li>
                    <li><strong>Dá sucessos rápidos</strong> - Etapa 1 é acessível a todos → gera confiança → motivação para continuar.</li>
                    <li><strong>Explicita o que fica implícito</strong> - A maioria dos livros pula direto para "x". Aqui, o processo de simbolização fica visível.</li>
                  </ul>

                  <hr className="my-6 border-gray-300" />

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-4">Evidências científicas</h3>
                  <p className="mb-2"><strong>Prática Espaçada:</strong> 8 questões por etapa = repetição suficiente para fixar na memória de longo prazo (Roediger & Butler, 2011).</p>
                  <p className="mb-2"><strong>Prática de Recuperação:</strong> Múltipla escolha força o cérebro a recuperar informação ativamente, não só reconhecer passivamente.</p>
                  <p className="mb-6"><strong>Feedback Imediato:</strong> Correção instantânea permite ajustar erro antes que vire hábito.</p>

                  <hr className="my-6 border-gray-300" />

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-4">O que NÃO substitui</h3>
                  <p className="mb-2">Esta sequência é excelente para desenvolver:</p>
                  <ul className="list-disc list-inside mb-2 ml-4">
                    <li>Compreensão conceitual de equações</li>
                    <li>Habilidade de modelagem (criar equações)</li>
                    <li>Procedimentos de resolução</li>
                  </ul>
                  <p className="mb-2"><strong>Mas você ainda precisa complementar com:</strong></p>
                  <ul className="list-disc list-inside mb-6 ml-4">
                    <li>Discussões em sala ("por que funciona?")</li>
                    <li>Problemas abertos (sem múltipla escolha)</li>
                    <li>Aplicações práticas do dia a dia</li>
                    <li>Conexão com funções (próximo conteúdo)</li>
                  </ul>

                  <hr className="my-6 border-gray-300" />

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-4">Dica de uso</h3>
                  <p className="mb-2"><strong>Aplique em sequência progressiva:</strong></p>
                  <ul className="list-disc list-inside mb-4 ml-4">
                    <li>Aula 1-2: Etapas 1 e 2 (conceito e símbolo ?)</li>
                    <li>Aula 3: Etapa 3 (formalização com x)</li>
                    <li>Aula 4-5: Etapas 4 e 5 (consolidação)</li>
                  </ul>
                  <p className="mb-2"><strong>Ou use para diagnóstico:</strong></p>
                  <ul className="list-disc list-inside mb-6 ml-4">
                    <li>Aluno trava na Etapa 2? Precisa trabalhar mais a abstração</li>
                    <li>Aluno vai bem até Etapa 3 mas trava na 4? Sabe o conceito, falta técnica</li>
                    <li>Aluno acerta tudo da 4 mas erra na 3? Resolve mecanicamente mas não entende</li>
                  </ul>

                  <hr className="my-6 border-gray-300" />

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-4">Resumo em 3 frases</h3>
                  <ol className="list-decimal list-inside mb-6 ml-4 space-y-2">
                    <li><strong>A sequência constrói pontes</strong> entre o pensamento verbal e a álgebra formal</li>
                    <li><strong>Cada etapa prepara a próxima</strong>, respeitando como o cérebro aprende</li>
                    <li><strong>O símbolo "?" é a inovação</strong> que torna explícito um processo geralmente implícito</li>
                  </ol>

                  <hr className="my-6 border-gray-300" />

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 mb-4">Referências principais</h3>
                  <ul className="list-none mb-6 space-y-2">
                    <li><strong>Duval, R. (2003).</strong> Registros de representações semióticas e funcionamento cognitivo da compreensão em matemática.</li>
                    <li><strong>Vygotsky, L. S. (1978).</strong> Mind in Society: The Development of Higher Psychological Processes.</li>
                    <li><strong>Sweller, J. (1988).</strong> Cognitive Load During Problem Solving: Effects on Learning.</li>
                    <li><strong>Ausubel, D. P. (2000).</strong> The Acquisition and Retention of Knowledge: A Cognitive View.</li>
                    <li><strong>Brasil. (2018).</strong> Base Nacional Comum Curricular (BNCC).</li>
                    <li><strong>Roediger, H. L., & Butler, A. C. (2011).</strong> The critical role of retrieval practice in long-term retention.</li>
                  </ul>
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StartScreen;
