import {
  ArrowRight,
} from "lucide-react";

type CaseItem = {
  category: string;
  title: string;
  description: string;
  context: string;
  delivery: string;
  capabilities: string[];
  image?: string;
  images?: string[];
  visual?: "finance" | "culture" | "automation" | "health" | "clinical" | "events" | "careops" | "maia-eletronica" | "epihealth";
  imageClass: string;
};

const cases: CaseItem[] = [
  {
    category: "PRODUTO FINANCEIRO",
    title: "Plataforma financeira digital",
    description:
      "Jornada digital para simulação, análise de elegibilidade e acompanhamento de propostas em uma experiência integrada.",
    context: "Organizar uma operação financeira com retornos de diferentes instituições e informações claras para o usuário.",
    delivery: "Fluxo web de consulta, comparação de condições e acompanhamento do andamento de cada proposta.",
    capabilities: ["Produto financeiro", "Jornada digital", "Integração de dados"],
    image: "/cases/financial-platform-unbranded.png",
    imageClass: "",
  },
  {
    category: "CULTURA E DADOS",
    title: "Plataforma cultural e de dados",
    description:
      "Plataforma nacional para reunir cadastros, formulários e informações do ecossistema da dança.",
    context: "Estruturar dados de jovens, profissionais e instituições participantes de uma iniciativa cultural de alcance nacional.",
    delivery: "Formulários por perfil, gestão de cadastros, indicadores agregados e recursos de exportação.",
    capabilities: ["Plataforma web", "Formulários", "Dados e estatísticas"],
    image: "/cases/experience-culture-v4.png",
    imageClass: "",
  },
  {
    category: "AUTOMAÇÃO E TECNOLOGIA",
    title: "Presença digital para serviços técnicos",
    description:
      "Site institucional desenvolvido para apresentar soluções técnicas, segmentos atendidos e canais de contato.",
    context: "Comunicar de forma profissional um portfólio amplo de automação, redes, monitoramento, segurança eletrônica e cloud.",
    delivery: "Experiência responsiva com arquitetura de serviços, conteúdos institucionais e direcionamento comercial.",
    capabilities: ["Site institucional", "Arquitetura de conteúdo", "Experiência responsiva"],
    image: "/cases/experience-automation-v3.png",
    imageClass: "",
  },
  {
    category: "SAÚDE E INTELIGÊNCIA ARTIFICIAL",
    title: "Inteligência aplicada à saúde",
    description: "Conceito de produto para tornar dados públicos de saúde mais acessíveis por meio de linguagem natural.",
    context: "Reduzir a complexidade de indicadores epidemiológicos provenientes de fontes públicas e documentos oficiais.",
    delivery: "Proposta de ingestão, validação e análise de dados com respostas claras e apoio de inteligência artificial.",
    capabilities: ["Dados epidemiológicos", "Linguagem natural", "Inteligência artificial"],
    image: "/cases/experience-health-intelligence-v7.png",
    imageClass: "",
  },
  {
    category: "SAÚDE DIGITAL E DADOS",
    title: "Gestão clínica e assistencial",
    description:
      "Plataforma para monitoramento clínico, organização de pacientes, campanhas de saúde e apoio assistivo à decisão.",
    context: "Consolidar informações assistenciais e operacionais para facilitar o acompanhamento de populações de saúde.",
    delivery: "Painéis de pacientes, campanhas, alertas, indicadores de adesão e visão de ROI assistencial.",
    capabilities: ["Dashboard clínico", "Gestão de pacientes", "Alertas e ROI"],
    image: "/cases/experience-clinical-v3.png",
    imageClass: "",
  },
  {
    category: "EVENTOS E OPERAÇÃO",
    title: "Plataforma de eventos e operação",
    description: "Operação digital para controlar produtos, vendas e meios de pagamento durante eventos.",
    context: "Centralizar a rotina de caixa e dar visibilidade à movimentação comercial durante a operação.",
    delivery: "PDV, controle de produtos e estoque, pagamentos, fechamento de caixa e relatórios operacionais.",
    capabilities: ["PDV", "Estoque", "Relatórios operacionais"],
    image: "/cases/experience-events-v4.png",
    imageClass: "",
  },
  {
    category: "E-COMMERCE E EXPERIÊNCIA",
    title: "Urban Blend",
    description: "Comércio digital com catálogo e uma experiência de compra construída para diferentes dispositivos.",
    context: "Apresentar um catálogo especializado com identidade própria e uma navegação simples para o consumidor.",
    delivery: "Vitrine digital, organização por produtos, carrinho reativo e experiência responsiva.",
    capabilities: ["E-commerce", "Carrinho reativo", "Experiência responsiva"],
    image: "/cases/urban-blend.png",
    imageClass: "",
  },
];

function CaseVisual({ item }: { item: CaseItem }) {
  const confidentialVisuals = ["finance", "culture", "automation", "health", "clinical", "events"];

  if (item.visual && confidentialVisuals.includes(item.visual)) {
    return (
      <div className={`confidential-case-visual confidential-case-${item.visual}`} aria-label={`Apresentação conceitual: ${item.title}`}>
        <div className="confidential-visual-bar"><i /><i /><i /><span>APRESENTAÇÃO CONCEITUAL</span></div>
        <div className="confidential-visual-layout">
          <aside><b /><span /><span /><span /></aside>
          <main>
            <small>{item.category}</small>
            <strong>{item.title}</strong>
            <div className="confidential-metrics"><i /><i /><i /></div>
            <div className="confidential-chart"><span /><span /><span /><span /><span /></div>
          </main>
        </div>
      </div>
    );
  }

  if (item.visual === "maia-eletronica") {
    return (
      <div className="product-site-preview maia-eletronica-preview" aria-label="Apresentação de um site para serviços técnicos">
        <div className="product-browser-bar"><i /><i /><i /><span>maiaeletronica.com.br</span></div>
        <img src="/cases/maia-eletronica-site.png" alt="Página principal de uma empresa de serviços técnicos" />
        <div className="product-preview-label"><small>PROJETO DIGITAL</small><strong>Site institucional e serviços técnicos</strong></div>
      </div>
    );
  }

  if (item.visual === "epihealth") {
    return (
      <div className="epihealth-preview" aria-label="Apresentação do produto EpiHealthAI">
        <img src="/cases/epihealthai-v2.jpg" alt="Apresentação institucional do EpiHealthAI" />
        <div className="epihealth-product-panel">
          <span>EPIHEALTHAI</span>
          <strong>Vigilância epidemiológica apoiada por dados</strong>
          <div><i /><i /><i /><i /></div>
        </div>
      </div>
    );
  }

  if (item.visual === "careops") {
    return (
      <div className="careops-preview" aria-label="Interface do dashboard clínico CareOps VH">
        <aside>
          <strong>CareOps <i>VH</i></strong>
          <span className="active">Visão geral</span>
          <span>Pacientes</span>
          <span>Campanhas</span>
          <span>Configurações</span>
        </aside>
        <div className="careops-dashboard">
          <header><small>GESTÃO / DASHBOARD</small><b>Dashboard de ROI e Governança</b></header>
          <div className="careops-kpis">
            <span><small>Total de vidas</small><strong>248</strong></span>
            <span><small>Taxa de adesão</small><strong>82%</strong></span>
            <span><small>Economia assistencial</small><strong>R$ 38,4 mil</strong></span>
          </div>
          <div className="careops-panels">
            <div className="careops-chart">
              <small>MÉDIA DOS SCORES</small>
              <svg viewBox="0 0 320 105" role="img" aria-label="Evolução do score de saúde">
                <polyline points="8,82 60,68 112,73 164,43 216,50 268,25 312,34" />
              </svg>
            </div>
            <div className="careops-alerts"><small>ITENS EM ATENÇÃO</small><i /><i /><i /></div>
          </div>
        </div>
      </div>
    );
  }

  if (item.images) {
    return (
      <div className="case-photo-story" aria-label={`Imagens reais do projeto ${item.title}`}>
        <img className="case-photo-story-main" src={item.images[0]} alt="Infraestrutura organizada para uma operação técnica" />
        <img src={item.images[1]} alt="Projeto de automação instalado" />
        <img src={item.images[2]} alt="Interface de um site de serviços técnicos" />
      </div>
    );
  }

  if (item.image) {
    return <img className={item.imageClass} src={item.image} alt={`Imagem real do projeto ${item.title}`} />;
  }

  return null;
}

function Cases() {
  return (
    <section className="section cases cases-editorial-page">
      <div className="container">
        <div className="section-heading capabilities-heading">
          <span className="section-label">TRABALHOS SELECIONADOS</span>
          <h1>
            Produtos desenvolvidos
            <span> em diferentes setores</span>
          </h1>
        </div>

        <div className="editorial-case-list">
          {cases.map((item) => (
            <article className="editorial-case" key={item.title}>
              <div className="editorial-case-media">
                <CaseVisual item={item} />
              </div>

              <div className="editorial-case-copy">
                <span>{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <dl className="case-project-summary">
                  <div>
                    <dt>Contexto</dt>
                    <dd>{item.context}</dd>
                  </div>
                  <div>
                    <dt>Entrega</dt>
                    <dd>{item.delivery}</dd>
                  </div>
                </dl>
                <ul>
                  {item.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/5548998141388?text=${encodeURIComponent(`Olá, gostaria de conversar sobre uma solução de ${item.category.toLowerCase()}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar sobre um projeto semelhante <ArrowRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases;
