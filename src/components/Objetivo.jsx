import React from 'react';

const Objetivo = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white w-full shadow-lg">
        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Seção de Objetivo */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-400 font-bold mb-4 sm:mb-6">Objetivo</h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              Nossa missão é criar uma ferramenta acessível e eficiente que utilize tecnologia avançada
              para fornecer suporte em tempo real para deficientes visuais. Acreditamos que a tecnologia
              pode ser um grande aliado na inclusão social e na promoção de uma vida mais autônoma e digna
              para todos.
            </p>
          </div>

          {/* Seção de Objetivos do Projeto */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-400 font-bold mb-4 sm:mb-6">Objetivos do Projeto</h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-base sm:text-lg lg:text-xl">
              <li>
                <strong>Aumentar a Autonomia:</strong> Permitir que pessoas com deficiência visual se movimentem
                com maior independência e confiança.
              </li>
              <li>
                <strong>Melhorar a Segurança:</strong> Reduzir o risco de acidentes e colisões, proporcionando
                uma navegação mais segura em diversos ambientes através das novas tecnologias.
              </li>
              <li>
                <strong>Facilitar a Integração Social:</strong> Contribuir para a inclusão social de pessoas
                com deficiência visual, possibilitando uma participação mais ativa em atividades cotidianas.
              </li>
            </ul>
          </div>
        </main>
      </header>
    </div>
  );
};

export default Objetivo;
