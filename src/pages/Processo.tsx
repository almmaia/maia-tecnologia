function Processo() {
  return (
    <section className="section process">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">COMO TRABALHAMOS</span>

          <h1>
            Do desafio à
            <span> solução</span>
          </h1>

          <p>
            Trabalhamos de forma estruturada para transformar necessidades de
            negócio em soluções digitais eficientes.
          </p>
        </div>

        <div className="process-grid">
          <ProcessStep
            title="Entendimento"
            text="Conhecemos o negócio e entendemos o problema que precisa ser resolvido."
          />

          <ProcessStep
            title="Planejamento"
            text="Definimos a estratégia e estruturamos a solução mais adequada."
          />

          <ProcessStep
            title="Desenvolvimento"
            text="Construímos a solução com foco em qualidade, segurança e evolução."
          />

          <ProcessStep
            title="Implementação"
            text="Colocamos a solução em funcionamento, orientamos sua utilização e acompanhamos os primeiros resultados."
          />

          <ProcessStep
            title="Evolução e suporte"
            text="Apoiamos melhorias, manutenção e novas necessidades para a solução continuar acompanhando o negócio."
          />

          <ProcessStep
            title="Resultados"
            text="Acompanhamos os resultados da solução e identificamos oportunidades para gerar ainda mais valor ao negócio."
          />
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <article className="process-step">
      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}

export default Processo;
