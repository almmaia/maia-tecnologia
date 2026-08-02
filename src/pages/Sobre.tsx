import {
  Check,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

function Sobre() {
  return (
    <section className="section about-page">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">SOBRE A MAIA CYBER</span>

          <h1>
            Desenvolvimento com
            <span> qualidade e confiança</span>
          </h1>

          <p>
            A Maia Cyber é uma empresa de desenvolvimento de software focada
            em criar soluções digitais para empresas que buscam evoluir,
            automatizar processos e utilizar a tecnologia de forma estratégica.
          </p>
        </div>

        <div className="two-columns about-content">
          <div>
            <h2>Clareza do planejamento à entrega</h2>
          </div>

          <div className="section-text">
            <p>
              Desenvolvemos sistemas, plataformas e integrações de acordo com
              as necessidades de cada negócio.
            </p>

            <p>
              Nosso objetivo é transformar problemas complexos em soluções
              simples, eficientes e escaláveis.
            </p>

            <p>
              Combinamos desenvolvimento de software, automação, integração de
              sistemas, cloud e segurança para apoiar empresas em sua evolução
              digital.
            </p>
          </div>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="icon-box">
              <Sparkles size={22} />
            </div>

            <h3>Inovação</h3>

            <p>
              Buscamos soluções modernas e práticas para desafios reais.
            </p>
          </div>

          <div className="value-card">
            <div className="icon-box">
              <ShieldCheck size={22} />
            </div>

            <h3>Segurança</h3>

            <p>
              Desenvolvemos pensando na proteção dos sistemas e dados.
            </p>
          </div>

          <div className="value-card">
            <div className="icon-box">
              <Check size={22} />
            </div>

            <h3>Qualidade</h3>

            <p>
              Valorizamos soluções organizadas, confiáveis e sustentáveis.
            </p>
          </div>

          <div className="value-card">
            <div className="icon-box">
              <Layers3 size={22} />
            </div>

            <h3>Evolução</h3>

            <p>
              Criamos soluções preparadas para acompanhar o crescimento.
            </p>
          </div>
        </div>

        <div className="company-principles">
          <article>
            <span className="section-label">MISSÃO</span>
            <h3>Simplificar negócios por meio da tecnologia</h3>
            <p>Desenvolver soluções digitais personalizadas que resolvam problemas reais, melhorem processos e impulsionem resultados.</p>
          </article>
          <article>
            <span className="section-label">VISÃO</span>
            <h3>Ser uma parceira de tecnologia reconhecida pela confiança</h3>
            <p>Crescer ao lado de empresas de todo o Brasil, transformando ideias e desafios em produtos digitais sustentáveis.</p>
          </article>
        </div>

        <div className="founder-card">
          <div className="founder-photo">
            <img src="/team/alan-maia.jpg" alt="Alan Maia, fundador e desenvolvedor de software da Maia Cyber" />
          </div>
          <div>
            <span className="section-label">QUEM ESTÁ À FRENTE</span>
            <h2>Alan Maia</h2>
            <strong>Fundador e Desenvolvedor de Software</strong>
            <p>Responsável por entender cada desafio e conduzir a criação de soluções digitais alinhadas às necessidades do negócio.</p>
            <a
              href="https://wa.me/5548998141388?text=Olá%2C%20vim%20pelo%20site%20da%20Maia%20Cyber%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noreferrer"
              className="button button-primary founder-button"
            >
              Fale com a Maia Cyber <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
