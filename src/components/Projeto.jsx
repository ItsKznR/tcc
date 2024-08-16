import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projeto = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/pecas');
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white w-full shadow-lg">
        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Seção de Objetivo */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-400 font-bold mb-4 sm:mb-6">O que é?</h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              Nosso projeto de TCC é uma solução inovadora para auxiliar pessoas com deficiência visual na sua locomoção diária. Utilizando a plataforma Arduino, desenvolvemos um dispositivo portátil que combina sensores ultrassônicos e um aplicativo móvel para proporcionar maior segurança e autonomia.
            </p>
          </div>

          {/* Seção de Objetivos do Projeto */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-400 font-bold mb-4 sm:mb-6">Como funciona?</h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
              <strong>Sensores Ultrassônicos:</strong> O dispositivo é equipado com sensores ultrassônicos que detectam obstáculos à frente do usuário. Quando um obstáculo é identificado, um alarme sonoro é emitido, alertando o usuário sobre a presença do objeto.
            </p>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              <strong>Aplicativo Móvel:</strong> Em caso de queda ou colisão, o dispositivo envia um alerta automático para um aplicativo conectado, que notifica um cuidador ou familiar, garantindo que ajuda possa ser providenciada rapidamente.
            </p>
          </div>

          {/* Botão */}
          <div className="text-center">
            <button
              onClick={handleNavigate}
              className="bg-gray-700 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-gray-800 transition duration-300 text-base sm:text-lg lg:text-xl">
              PEÇAS
            </button>
          </div>
        </main>
      </header>
    </div>
  );
};

export default Projeto;
