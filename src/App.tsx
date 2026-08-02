import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Solucoes from "./pages/Solucoes";
import Processo from "./pages/Processo";
import Cases from "./pages/Cases";
import Contato from "./pages/Contato";

import "./index.css";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Maia Cyber | Desenvolvimento de Software em todo o Brasil",
    description: "Desenvolvimento de software, sistemas, plataformas, automações, APIs, dados, dashboards, integrações e inteligência artificial para empresas em Florianópolis, Ananindeua, Belém e todo o Brasil.",
  },
  "/sobre": {
    title: "Sobre a Maia Cyber | Desenvolvimento de Software para Empresas",
    description: "Conheça a Maia Cyber, empresa de desenvolvimento de software fundada por Alan Maia em Ananindeua, Pará.",
  },
  "/solucoes": {
    title: "Soluções em Software e Sistemas Personalizados | Maia Cyber",
    description: "Desenvolvimento de sistemas, plataformas web, aplicações mobile, automações, APIs, dados, dashboards, integrações, inteligência artificial, cloud e suporte.",
  },
  "/processo": {
    title: "Como trabalhamos | Maia Cyber",
    description: "Do entendimento à evolução: conheça o processo da Maia Cyber para criar soluções digitais personalizadas.",
  },
  "/cases": {
    title: "Áreas de Atuação em Software e Tecnologia | Maia Cyber",
    description: "Conheça os tipos de sistemas, plataformas e soluções digitais personalizadas que a Maia Cyber pode desenvolver para empresas.",
  },
  "/contato": {
    title: "Fale com a Maia Cyber em Florianópolis | Solicite um orçamento",
    description: "Fale com a Maia Cyber sobre sistemas, plataformas, automações, APIs, dados e projetos de software em Florianópolis, Santa Catarina e todo o Brasil.",
  },
};

function PageBehavior() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const metadata = pageMetadata[pathname] ?? pageMetadata["/"];
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://maiacyber.me${pathname === "/" ? "/" : pathname}`);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <PageBehavior />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/processo" element={<Processo />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
        <a
          className="whatsapp-button"
          href="https://wa.me/5548998141388?text=Olá%2C%20vim%20pelo%20site%20da%20Maia%20Cyber%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar com a Maia Cyber pelo WhatsApp"
          title="Fale conosco pelo WhatsApp"
        >
          <FaWhatsapp size={25} />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
