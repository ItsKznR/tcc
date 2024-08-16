import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow-lg">
        <div className="container mx-auto p-4 sm:p-8  z-10 text-center">
          <h1 className="text-blue-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">VisionTech</h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl">
            Visando um Mundo Melhor através da Tecnologia.
          </p>
        </div>
      </header>

      <main className="flex-1 bg-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section>
            <blockquote className="text-gray-500 italic border-l-4 border-blue-400 pl-4 sm:pl-6 lg:pl-8 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
              "No mundo contemporâneo, muitas falhas na inclusão social são evidentes, especialmente para aqueles que possuem alguma deficiência, incluindo os portadores de deficiência visual. Dados científicos indicam que muitos desses indivíduos contam com o auxílio da bengala, ou até mesmo nenhum auxílio. Diante disso, torna-se evidente a necessidade de integrar a tecnologia ao cotidiano dos cegos por meio do Arduino, a fim de desenvolver projetos assistivos."
            </blockquote>

            <hr className="my-6 sm:my-8" />

            <section className="my-6 sm:my-8 lg:my-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-4 sm:mb-6 lg:mb-8">
                Diferenciais do Projeto
              </h2>
              <ul className="list-disc ml-4 sm:ml-6 lg:ml-8 space-y-3 sm:space-y-4 lg:space-y-5 text-sm sm:text-base md:text-lg lg:text-xl">
                <li>
                  <strong>Tecnologia de Detecção Avançada:</strong> Utiliza sensores
                  ultrassônicos de alta precisão para detectar objetos à frente do
                  usuário, independentemente das condições de iluminação.
                </li>
                <li>
                  <strong>Alertas Multissensoriais:</strong> Oferece feedback
                  através de vibração e alertas sonoros, garantindo que o usuário
                  perceba os obstáculos em qualquer ambiente.
                </li>
                <li>
                  <strong>Design Ergonomicamente Planejado:</strong> Compacto e leve, o dispositivo é fácil de usar e pode ser integrado a bengalas ou outros acessórios utilizados por pessoas com deficiência visual.
                </li>
                <li>
                  <strong>Fácil de Usar:</strong> Interface intuitiva que permite ao
                  usuário operar o dispositivo com facilidade, sem necessidade de
                  treinamento complexo.
                </li>
                <li>
                  <strong>Bateria de Longa Duração:</strong> Equipado com uma
                  bateria eficiente que garante o funcionamento contínuo do dispositivo
                  por longos períodos, reduzindo a necessidade de recargas frequentes.
                </li>
              </ul>
            </section>

            <section className="my-6 sm:my-8 lg:my-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-4 sm:mb-6 lg:mb-8">Público Alvo</h2>
              <ul className="list-disc ml-4 sm:ml-6 lg:ml-8 space-y-3 sm:space-y-4 lg:space-y-5 text-sm sm:text-base md:text-lg lg:text-xl">
                <li>Pessoas com deficiência visual total ou parcial.</li>
                <li>
                  Idosos com problemas de visão que necessitam de apoio adicional
                  para mobilidade segura.
                </li>
                <li>
                  Instituições e organizações que oferecem suporte a pessoas com
                  deficiência visual.
                </li>
              </ul>
            </section>

            <section className="my-6 sm:my-8 lg:my-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-4 sm:mb-6 lg:mb-8">Nossas Referências</h2>
              <ul className="list-disc ml-4 sm:ml-6 lg:ml-8 space-y-3 sm:space-y-4 lg:space-y-5 text-sm sm:text-base md:text-lg lg:text-xl">
                <li><a href="https://www.uned.es/universidad/dam/facultades/industriales/RBIM/V24N1Abril2020/V24N12020-A07.pdf" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Referência 1</a></li>
                <li><a href="https://refaqi.faqi.edu.br/index.php/refaqi/article/view/88" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Referência 2</a></li>
                <li><a href="https://www.proquest.com/openview/ce26cc6d0b491de3b56eb6126f2e0d8f/1?pq-origsite=gscholar&cbl=2026368&diss=y" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Referência 3</a></li>
              </ul>
            </section>
          </section>
        </div>
      </main>

      <footer className="bg-white w-full shadow-lg mt-8 sm:mt-12">
        <div className="container mx-auto p-4 sm:p-8 text-center">
          <p className="text-gray-600 text-sm sm:text-base">&copy; 2024 VisionTech. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
        <button
          onClick={() => scroll.scrollToTop()}
          className="bg-blue-400 text-white p-3 sm:p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-500 transition-colors"
          aria-label="Voltar ao topo"
        >
          ↑
        </button>
      </div>
    </div>
  );
}

export default Home;
