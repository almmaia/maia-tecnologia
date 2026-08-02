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
            number="01"
            title="Entendimento"
            text="Conhecemos o negócio e entendemos o problema que precisa ser resolvido."
          />

          <ProcessStep
            number="02"
            title="Planejamento"
            text="Definimos a estratégia e estruturamos a solução mais adequada."
          />

          <ProcessStep
            number="03"
            title="Desenvolvimento"
            text="Construímos a solução com foco em qualidade, segurança e evolução."
          />

          <ProcessStep
            number="04"
            title="Implementação"
            text="Colocamos a solução em funcionamento, orientamos sua utilização e acompanhamos os primeiros resultados."
          />

          <ProcessStep
            number="05"
            title="Evolução e suporte"
            text="Apoiamos melhorias, manutenção e novas necessidades para a solução continuar acompanhando o negócio."
          />

          <ProcessStep
            number="06"
            title="Resultados"
            text="Acompanhamos os resultados da solução e identificamos oportunidades para gerar ainda mais valor ao negócio."
          />
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="process-step">
      <span className="process-number">{number}</span>

      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}

export default Processo;
