import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sobre = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/integrantes');
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white w-full shadow-lg">
        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Seção "Sobre Nós" */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-400 font-bold mb-4 sm:mb-6">Sobre Nós</h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              Somos um grupo de estudantes apaixonados por tecnologia e inovação, dedicados a desenvolver soluções que melhoram a qualidade de vida das pessoas. Nosso projeto de TCC tem como objetivo principal ajudar pessoas com deficiência visual a se locomoverem com mais segurança e independência.
            </p>
          </div>

          {/* Seção "Nossa Visão" */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-400 font-bold mb-4 sm:mb-6">Nossa Visão</h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              Visamos um futuro onde todas as pessoas com deficiência visual possam se sentir seguras e confiantes ao se movimentar, sem depender constantemente da ajuda de terceiros. Queremos ser pioneiros em soluções tecnológicas que proporcionem mais liberdade e conforto para esse público.
            </p>
          </div>

          {/* Botão */}
          <div className="text-center">
            <button
              onClick={handleNavigate}
              className="bg-gray-700 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-gray-800 transition duration-300 text-base sm:text-lg lg:text-xl">
              INTEGRANTES
            </button>
          </div>
        </main>
      </header>
    </div>
  );
};

export default Sobre;
