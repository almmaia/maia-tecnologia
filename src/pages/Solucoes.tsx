import {
  ArrowRight,
  BarChart3,
  Bot,
  Code2,
  Cloud,
  Database,
  Globe,
  LockKeyhole,
  Network,
  Settings2,
  Smartphone,
  Workflow,
} from "lucide-react";

function Solucoes() {
  return (
    <section className="section solutions">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">NOSSAS SOLUÇÕES</span>

          <h1>
            Desenvolvimento de
            <span> software sob medida</span>
          </h1>

          <p>
            Desenvolvemos tecnologia personalizada para empresas,
            profissionais, operações e novos produtos.
          </p>
        </div>

        <div className="solutions-grid">
          <SolutionCard
            icon={<Code2 />}
            title="Software sob medida"
            description="Desenvolvimento de sistemas personalizados para processos e necessidades específicas do negócio."
          />

          <SolutionCard
            icon={<Globe />}
            title="Plataformas Web"
            description="Aplicações web modernas para operações internas, clientes e novos produtos digitais."
          />

          <SolutionCard
            icon={<Network />}
            title="APIs e Integrações"
            description="Conectamos sistemas, plataformas e serviços para melhorar o fluxo de informações."
          />

          <SolutionCard
            icon={<Settings2 />}
            title="Automação"
            description="Automatizamos processos repetitivos para reduzir tarefas manuais e aumentar a produtividade."
          />

          <SolutionCard
            icon={<Database />}
            title="Dados e bancos de dados"
            description="Estruturamos dados e bancos confiáveis para organizar informações e apoiar a operação."
          />

          <SolutionCard
            icon={<BarChart3 />}
            title="Dashboards"
            description="Painéis gerenciais com indicadores claros para acompanhar resultados e tomar decisões."
          />

          <SolutionCard
            icon={<Bot />}
            title="Inteligência artificial"
            description="IA aplicada a tarefas, atendimento e análise de dados quando ela gera valor real para o negócio."
          />

          <SolutionCard
            icon={<Cloud />}
            title="Cloud e infraestrutura"
            description="Ambientes modernos, escaláveis e preparados para sustentar aplicações em crescimento."
          />

          <SolutionCard
            icon={<Smartphone />}
            title="Aplicações mobile"
            description="Aplicações e experiências responsivas pensadas para celulares, tablets e diferentes telas."
          />

          <SolutionCard
            icon={<Workflow />}
            title="Consultoria tecnológica"
            description="Análise de necessidades e planejamento técnico para transformar desafios em soluções viáveis."
          />

          <SolutionCard
            icon={<LockKeyhole />}
            title="Segurança"
            description="Boas práticas de desenvolvimento e proteção para aplicações, integrações e dados."
          />

          <SolutionCard
            icon={<Settings2 />}
            title="Manutenção e suporte"
            description="Acompanhamento e melhorias contínuas para manter cada solução estável e preparada para evoluir."
          />
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <a
      className="solution-card"
      href={`https://wa.me/5548998141388?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre ${title} da Maia Cyber.`)}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`Solicitar informações sobre ${title}`}
    >
      <div className="solution-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="card-arrow">
        <ArrowRight size={18} />
      </span>
    </a>
  );
}

export default Solucoes;
