import {
  ArrowRight,
  BarChart3,
  Bot,
  Code2,
  Database,
  Network,
  Settings2,
} from "lucide-react";

const areas = [
  {
    number: "01",
    icon: <Code2 />,
    category: "DESENVOLVIMENTO DE SOFTWARE",
    title: "Sistemas construídos para o seu negócio",
    description:
      "Criamos soluções sob medida para digitalizar operações, organizar rotinas e resolver necessidades específicas.",
    capabilities: ["Sistemas empresariais", "Aplicações web", "Produtos digitais"],
  },
  {
    number: "02",
    icon: <Settings2 />,
    category: "AUTOMAÇÃO",
    title: "Processos mais rápidos e eficientes",
    description:
      "Automatizamos tarefas repetitivas e fluxos operacionais para reduzir trabalho manual, erros e tempo de execução.",
    capabilities: ["Fluxos automatizados", "Rotinas internas", "Ganho de produtividade"],
  },
  {
    number: "03",
    icon: <Network />,
    category: "APIS E INTEGRAÇÕES",
    title: "Sistemas e serviços trabalhando juntos",
    description:
      "Conectamos plataformas, bancos de dados e serviços externos para manter informações sincronizadas.",
    capabilities: ["APIs personalizadas", "Integração de sistemas", "Sincronização de dados"],
  },
  {
    number: "04",
    icon: <Database />,
    category: "DADOS",
    title: "Informações estruturadas e confiáveis",
    description:
      "Organizamos dados para facilitar consultas, garantir consistência e apoiar a evolução das aplicações.",
    capabilities: ["Bancos de dados", "Modelagem de informações", "Processamento de dados"],
  },
  {
    number: "05",
    icon: <BarChart3 />,
    category: "PLATAFORMAS E DASHBOARDS",
    title: "Indicadores claros para acompanhar resultados",
    description:
      "Desenvolvemos plataformas e painéis para centralizar operações, visualizar métricas e apoiar decisões.",
    capabilities: ["Painéis gerenciais", "Indicadores operacionais", "Relatórios personalizados"],
  },
  {
    number: "06",
    icon: <Bot />,
    category: "INTELIGÊNCIA ARTIFICIAL",
    title: "IA aplicada a necessidades reais",
    description:
      "Aplicamos inteligência artificial onde ela pode melhorar análises, atendimento e produtividade sem substituir a estratégia do negócio.",
    capabilities: ["Assistentes inteligentes", "Análise de informações", "Automação com IA"],
  },
];

function Cases() {
  return (
    <section className="section cases capabilities-page">
      <div className="container">
        <div className="section-heading capabilities-heading">
          <span className="section-label">ÁREAS DE ATUAÇÃO</span>
          <h1>
            Especialidades para
            <span> diferentes necessidades</span>
          </h1>
          <p>
            Desenvolvemos sistemas, automações, APIs, plataformas, dashboards
            e soluções com dados para empresas, profissionais, organizações e
            novos produtos digitais.
          </p>
        </div>

        <div className="capabilities-list">
          {areas.map((item) => (
            <article className="capability-row" key={item.number}>
              <div className="capability-index">
                <span>{item.number}</span>
                <i>{item.icon}</i>
              </div>

              <div className="capability-copy">
                <span className="capability-category">{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>

              <div className="capability-details">
                <span>PODE INCLUIR</span>
                <ul>
                  {item.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </div>

              <a
                className="capability-action"
                href={`https://wa.me/5548998141388?text=${encodeURIComponent(`Olá, gostaria de conversar sobre ${item.title.toLowerCase()}`)}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Conversar sobre ${item.title}`}
              >
                <ArrowRight size={20} />
              </a>
            </article>
          ))}
        </div>

        <div className="capabilities-note">
          <span>UMA CONVERSA ANTES DO CÓDIGO</span>
          <p>
            Entendemos o cenário da empresa antes de recomendar tecnologia.
            Assim, cada decisão tem um motivo e cada funcionalidade responde a
            uma necessidade real.
          </p>
          <a
            href="https://wa.me/5548998141388?text=Olá%2C%20vim%20pelo%20site%20da%20Maia%20Cyber%20e%20quero%20conversar%20sobre%20uma%20solução."
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            Conversar com a Maia Cyber <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cases;
