import React from 'react';
import { Link } from 'react-router-dom';

const Pecas = () => {
  const items = [
    {
      title: 'Sensor ultrassônico',
      description:
        'Um sensor ultrassônico emite ondas sonoras de alta frequência para detectar a presença ou medir a distância de objetos com base no tempo de retorno do eco.',
      price: 'R$ 11,00',
      imageAlt: 'Imagem do sensor ultrassônico',
      imageSrc: '/* Coloque o caminho da imagem do Sensor ultrassônico aqui */',
    },
    {
      title: 'Placa Arduino',
      description:
        'Uma plataforma de prototipagem eletrônica de código aberto, utilizada para criar projetos interativos e controlar dispositivos através de entradas e saídas digitais e analógicas.',
      price: 'R$ 40,00',
      imageAlt: 'Imagem da Placa Arduino',
      imageSrc: '/* Coloque o caminho da imagem da Placa Arduino aqui */',
    },
    {
      title: 'Protoboard',
      description:
        'Uma placa de circuito perfurada com contatos metálicos que permite a montagem temporária de circuitos eletrônicos experimentais sem a necessidade de soldagem.',
      price: 'R$ 25,00',
      imageAlt: 'Imagem do Protoboard',
      imageSrc: '/* Coloque o caminho da imagem do Protoboard aqui */',
    },
    {
      title: 'Buzzer',
      description:
        'Um buzzer é um dispositivo eletrônico que emite sons audíveis, usado para alertas e notificações. Existem buzzers piezoelétricos e eletromecânicos, amplamente usados em alarmes e indicadores.',
      price: 'R$ 4,00',
      imageAlt: 'Imagem do Buzzer',
      imageSrc: '/* Coloque o caminho da imagem do Buzzer aqui */',
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen py-8 bg-gray-100">
      <div className="w-full max-w-3xl mx-auto mb-8 sm:mb-12">
        {/* Link de navegação para a página Projeto */}
        <Link to="/projeto" className="text-blue-400 flex items-center mb-6 sm:mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.293 4.293a1 1 0 00-1.414 0L7 7.586 4.707 5.293a1 1 0 00-1.414 1.414L6.293 9.707a1 1 0 001.414 0L12.293 5.707a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Voltar para Projeto
        </Link>
        <h1 className="text-blue-400 text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Peças</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="mx-auto mb-4 w-24 h-24 sm:w-32 sm:h-32 object-cover"
              />
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-blue-400">{item.title}</h2>
              <p className="text-gray-700 text-base sm:text-lg mb-4">{item.description}</p>
              <p className="text-lg font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pecas;
