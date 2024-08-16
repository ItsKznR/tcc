import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Header from "./components/Header";
import Projeto from "./components/Projeto";
import Objetivo from "./components/Objetivo";
import Pecas from "./components/Pecas";

import Integrantes from "./components/Integrantes";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-900">
        <Header />

        <main className="w-full max-w-4xl mx-auto py-12 px-6">
          <Routes>
            {/* Define a rota raiz para abrir a Home */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/quem-somos" element={<Sobre />} />
            <Route path="/projeto" element={<Projeto />} />
            <Route path="/objetivo" element={<Objetivo />} />
            <Route path="/pecas" element={<Pecas />} />
            
            <Route path="/integrantes" element={<Integrantes />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
