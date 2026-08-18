import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Solucoes from "./pages/Solucoes";
import Processo from "./pages/Processo";
import Cases from "./pages/Cases";
import Contato from "./pages/Contato";
import ServicoLocal from "./pages/ServicoLocal";

import "./index.css";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Maia Tecnologia | Desenvolvimento de Software em Florianópolis",
    description: "Engenharia de software, sistemas, plataformas web, automação e inteligência artificial em Florianópolis, Santa Catarina, com atendimento em todo o Brasil.",
  },
  "/sobre": {
    title: "Sobre a Maia Tecnologia | Desenvolvimento de Software",
    description: "Conheça a Maia Tecnologia, empresa de desenvolvimento de software fundada por Alan Maia, sediada em Florianópolis, Santa Catarina, com atendimento nacional.",
  },
  "/solucoes": {
    title: "Soluções em Software e Sistemas Personalizados | Maia Tecnologia",
    description: "Software sob medida, sistemas, plataformas web, aplicativos, automações, APIs, dados, dashboards, inteligência artificial, cloud, DevOps e segurança.",
  },
  "/processo": {
    title: "Como trabalhamos | Maia Tecnologia",
    description: "Do entendimento à evolução: conheça o processo da Maia Tecnologia para criar soluções digitais personalizadas.",
  },
  "/cases": {
    title: "Cases e Experiências em Software | Maia Tecnologia",
    description: "Conheça experiências da Maia Tecnologia com plataformas, automações, integrações, dados, dashboards e produtos digitais.",
  },
  "/contato": {
    title: "Fale com a Maia Tecnologia em Florianópolis | Solicite um orçamento",
    description: "Fale com a Maia Tecnologia sobre sistemas, plataformas, automações, inteligência artificial, APIs, dados e projetos de software em Santa Catarina e todo o Brasil.",
  },
  "/desenvolvimento-software-florianopolis": {
    title: "Desenvolvimento de Software em Florianópolis | Maia Tecnologia",
    description: "Desenvolvimento de software, sistemas, plataformas web, automações, APIs e inteligência artificial em Florianópolis e Grande Florianópolis.",
  },
  "/desenvolvimento-software-belem": {
    title: "Desenvolvimento de Software em Belém e Ananindeua | Maia Tecnologia",
    description: "Empresa de desenvolvimento de software, sistemas, automação e inteligência artificial para Belém, Ananindeua e todo o Pará.",
  },
  "/desenvolvimento-software-brasil": {
    title: "Desenvolvimento de Software no Brasil | Maia Tecnologia",
    description: "Engenharia de software e produtos digitais para empresas em todo o Brasil: sistemas, plataformas, automação, IA, APIs, dados e cloud.",
  },
  "/automacao-inteligencia-artificial": {
    title: "Automação e Inteligência Artificial para Empresas | Maia Tecnologia",
    description: "Automação de processos, agentes de IA, integração de sistemas e inteligência artificial aplicada às operações de empresas brasileiras.",
  },
  "/sistemas-plataformas-web": {
    title: "Desenvolvimento de Sistemas e Plataformas Web | Maia Tecnologia",
    description: "Criação de sistemas personalizados, plataformas web, portais, APIs, dashboards e integrações com engenharia de software sob medida.",
  },
};

function PageBehavior() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const metadata = pageMetadata[pathname] ?? pageMetadata["/"];
    const canonical = `https://www.maiacyber.me${pathname === "/" ? "/" : pathname}`;
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonical);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", metadata.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonical);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", metadata.description);
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
            <Route path="/desenvolvimento-software-florianopolis" element={<ServicoLocal eyebrow="FLORIANÓPOLIS E GRANDE FLORIANÓPOLIS" title="Desenvolvimento de software em Florianópolis" lead="Projetamos sistemas, plataformas, automações e produtos digitais para empresas que precisam organizar operações, lançar novos serviços ou evoluir tecnologia existente." heading="Software construído para a realidade da operação" paragraphs={["A Maia Tecnologia atende empresas de Florianópolis, São José, Palhoça, Biguaçu e demais municípios da Grande Florianópolis com desenvolvimento próximo e execução técnica responsável.", "Cada projeto parte do contexto do negócio e pode reunir aplicações web, APIs, integrações, dados, inteligência artificial, cloud e evolução contínua."]} capabilities={["Software sob medida", "Plataformas web e aplicativos", "Automação e inteligência artificial", "APIs, integrações e dados"]} region="Florianópolis, São José, Palhoça, Biguaçu e Santa Catarina" />} />
            <Route path="/desenvolvimento-software-belem" element={<ServicoLocal eyebrow="BELÉM, ANANINDEUA E PARÁ" title="Desenvolvimento de software em Belém e Ananindeua" lead="Soluções digitais para empresas, profissionais e operações do Pará, com atendimento direto e capacidade para desenvolver produtos completos." heading="Tecnologia para empresas que querem evoluir processos e serviços" paragraphs={["Atendemos Belém, Ananindeua, a Região Metropolitana de Belém e outras cidades do Pará com projetos de software personalizados e acompanhamento remoto em todas as etapas.", "O trabalho inclui entendimento da necessidade, planejamento, experiência digital, engenharia, publicação e evolução do produto em produção."]} capabilities={["Sistemas personalizados", "Automação de processos", "Inteligência artificial aplicada", "Dashboards, APIs e integrações"]} region="Belém, Ananindeua, Região Metropolitana e todo o Pará" />} />
            <Route path="/desenvolvimento-software-brasil" element={<ServicoLocal eyebrow="ATENDIMENTO NACIONAL" title="Desenvolvimento de software para empresas em todo o Brasil" lead="Engenharia de software e produtos digitais para organizações que precisam transformar processos, dados e ideias em tecnologia confiável." heading="Da necessidade ao software em produção" paragraphs={["Trabalhamos remotamente com empresas de diferentes regiões do Brasil, mantendo comunicação direta, planejamento claro e acompanhamento técnico durante todo o projeto.", "Desenvolvemos produtos novos e também evoluímos sistemas existentes, conectando estratégia, experiência, arquitetura, segurança e operação."]} capabilities={["Produtos digitais de ponta a ponta", "Sistemas web e mobile", "Cloud, DevOps e observabilidade", "Manutenção e evolução contínua"]} region="Santa Catarina, Pará, Paraná e todo o Brasil" />} />
            <Route path="/automacao-inteligencia-artificial" element={<ServicoLocal eyebrow="IA E AUTOMAÇÃO" title="Automação e inteligência artificial para empresas" lead="Aplicamos automação, integrações e inteligência artificial onde elas reduzem trabalho manual, organizam informações e melhoram decisões." heading="Inteligência aplicada a processos reais" paragraphs={["Mapeamos tarefas, sistemas e dados antes de definir a tecnologia. Assim, automações e agentes de IA entram com objetivo claro e integração segura à operação.", "As soluções podem combinar fluxos automatizados, APIs, bancos de dados, assistentes inteligentes, análise de informações e painéis de acompanhamento."]} capabilities={["Agentes e assistentes de IA", "Automação de tarefas e fluxos", "Integração entre sistemas", "Dados e painéis gerenciais"]} region="Florianópolis, Belém e atendimento nacional" />} />
            <Route path="/sistemas-plataformas-web" element={<ServicoLocal eyebrow="SISTEMAS E PLATAFORMAS" title="Desenvolvimento de sistemas e plataformas web" lead="Criamos aplicações web responsivas, portais e sistemas internos preparados para diferentes dispositivos, usuários e etapas de crescimento." heading="Produtos digitais com arquitetura para evoluir" paragraphs={["Cada plataforma é desenhada a partir das jornadas de quem usa e das regras da operação. O resultado é uma experiência clara apoiada por uma base técnica sustentável.", "Podemos integrar serviços externos, meios de pagamento, bancos de dados, dashboards, autenticação, notificações e recursos de inteligência artificial."]} capabilities={["Aplicações e portais web", "Sistemas administrativos", "APIs e bancos de dados", "Integrações e segurança"]} region="todo o Brasil" />} />
            <Route path="*" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
