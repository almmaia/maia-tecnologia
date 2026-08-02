import {
  ArrowRight,
  Code2,
  Network,
  ShieldCheck,
  Sparkles,
  LifeBuoy,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP = "https://wa.me/5548998141388?text=Olá%2C%20vim%20pelo%20site%20da%20Maia%20Cyber%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-content">
          <div className="hero-badge">
            <span className="status-dot" />
            SOFTWARE • TECNOLOGIA • SOLUÇÕES DIGITAIS
          </div>

          <div className="hero-layout">
            <div className="hero-text">
              <h1>
                Tecnologia para impulsionar
                <span> o seu negócio</span>
              </h1>

              <p className="hero-description">
                Desenvolvemos sistemas, plataformas, automações e integrações
                que simplificam operações e apoiam o crescimento de empresas.
              </p>

              <div className="hero-actions">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  Fale com a Maia Cyber
                  <ArrowRight size={19} />
                </a>

                <Link to="/solucoes" className="button button-secondary">
                  Conheça nossas soluções
                </Link>
              </div>
            </div>

            {/* VISUAL CONSTRUÍDO 100% EM CÓDIGO */}
            <div className="hero-visual">
              <div className="code-window">
                <div className="code-header">
                  <div className="window-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span>Solução digital em desenvolvimento</span>
                </div>

                <div className="code-content">
                  <span className="code-line">
                    <b>const</b> solution = {"{"}
                  </span>

                  <span className="code-line indent">
                    technology: <em>"modern"</em>,
                  </span>

                  <span className="code-line indent">
                    security: <em>true</em>,
                  </span>

                  <span className="code-line indent">
                    scalability: <em>true</em>,
                  </span>

                  <span className="code-line indent">
                    innovation: <em>true</em>,
                  </span>

                  <span className="code-line">
                    {"}"}
                  </span>

                  <span className="code-cursor">_</span>
                </div>
              </div>

              <div className="floating-card floating-card-one">
                <Code2 size={20} />
                <div>
                  <strong>Software</strong>
                  <span>Sob medida</span>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <Network size={20} />
                <div>
                  <strong>Integração</strong>
                  <span>Sistemas conectados</span>
                </div>
              </div>

              <div className="floating-card floating-card-three">
                <ShieldCheck size={20} />
                <div>
                  <strong>Segurança</strong>
                  <span>Desde o início</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-trust">
            <div>
              <Code2 size={20} />
              <span>Software sob medida</span>
            </div>

            <div>
              <Network size={20} />
              <span>Integração de sistemas</span>
            </div>

            <div>
              <ShieldCheck size={20} />
              <span>Segurança</span>
            </div>

            <div>
              <Zap size={20} />
              <span>Alta performance</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="section home-intro">
        <div className="container two-columns">
          <div>
            <span className="section-label">MAIA CYBER</span>

            <h2>
              Tecnologia construída
              <span> com visão de negócio</span>
            </h2>
          </div>

          <div className="section-text">
            <p>
              Atuamos em parceria com cada cliente, compreendendo seu contexto
              antes de definir a melhor direção técnica.
            </p>

            <p>
              Com comunicação transparente e acompanhamento próximo, levamos
              cada projeto da estratégia à entrega e à evolução contínua.
            </p>

            <Link to="/sobre" className="text-link">
              Conheça a Maia Cyber
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="section highlights">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">O QUE FAZEMOS</span>

            <h2>
              Desenvolvimento e integração
              <span> com evolução contínua</span>
            </h2>

            <p>
              Reunimos desenvolvimento, integração, automação e suporte para
              transformar necessidades concretas em produtos digitais confiáveis.
            </p>
          </div>

          <div className="highlight-grid">
            <article className="highlight-card">
              <div className="highlight-icon">
                <Code2 size={25} />
              </div>

              <h3>Desenvolvimento</h3>

              <p>
                Sistemas e aplicações desenvolvidos de acordo com as
                necessidades específicas da sua empresa.
              </p>
            </article>

            <article className="highlight-card">
              <div className="highlight-icon">
                <Network size={25} />
              </div>

              <h3>Integração</h3>

              <p>
                Conectamos sistemas, APIs e plataformas para tornar seus
                processos mais eficientes.
              </p>
            </article>

            <article className="highlight-card">
              <div className="highlight-icon">
                <Sparkles size={25} />
              </div>

              <h3>Inovação</h3>

              <p>
                Utilizamos tecnologia moderna para criar soluções preparadas
                para os desafios do mercado.
              </p>
            </article>

            <article className="highlight-card">
              <div className="highlight-icon">
                <LifeBuoy size={25} />
              </div>

              <h3>Suporte e evolução</h3>

              <p>
                Acompanhamos melhorias e novas necessidades para sua solução
                continuar evoluindo com o negócio.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container home-cta-content">
          <div>
            <span className="section-label">TEM UM PROJETO?</span>

            <h2>
              Fale com a Maia Cyber
              <span> sobre o seu projeto</span>
            </h2>
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            Vamos conversar
            <ArrowRight size={19} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
