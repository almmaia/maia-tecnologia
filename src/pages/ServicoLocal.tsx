import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  heading: string;
  paragraphs: string[];
  capabilities: string[];
  region: string;
};

function ServicoLocal({ eyebrow, title, lead, heading, paragraphs, capabilities, region }: ServicePageProps) {
  return (
    <article className="section seo-service-page">
      <div className="container seo-service-shell">
        <header className="seo-service-hero">
          <span className="section-label">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{lead}</p>
          <Link className="button button-primary" to="/contato">
            Conversar sobre um projeto <ArrowRight size={18} />
          </Link>
        </header>

        <section className="seo-service-content">
          <div>
            <span className="section-label">ENGENHARIA E PRODUTO</span>
            <h2>{heading}</h2>
          </div>
          <div className="seo-service-copy">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="seo-capabilities" aria-label="Capacidades técnicas">
          {capabilities.map((capability) => (
            <div key={capability}><CheckCircle2 size={19} /><span>{capability}</span></div>
          ))}
        </section>

        <footer className="seo-service-footer">
          <p>Atendimento em {region} e projetos remotos em todo o Brasil.</p>
          <nav aria-label="Outras soluções">
            <Link to="/solucoes">Ver todas as soluções</Link>
            <Link to="/processo">Conhecer nosso processo</Link>
          </nav>
        </footer>
      </div>
    </article>
  );
}

export default ServicoLocal;
