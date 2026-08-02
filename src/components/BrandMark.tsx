type BrandMarkProps = {
  variant?: "horizontal" | "vertical";
};

function BrandMark({ variant = "horizontal" }: BrandMarkProps) {
  if (variant === "horizontal") {
    return (
      <span className="brand-mark brand-mark-horizontal" aria-label="Maia Cyber">
        <img
          className="brand-header-lockup"
          src="/brand/maia-cyber-header.png"
          alt="Maia Cyber — Desenvolvendo soluções, conectando ideias, criando o futuro"
        />
      </span>
    );
  }

  return (
    <span className="brand-mark brand-mark-vertical" aria-label="Maia Cyber">
      <img className="brand-mark-part brand-mark-part-symbol" src="/brand/maia-symbol-reference.png" alt="" />
      <img className="brand-mark-part brand-mark-part-maia" src="/brand/maia-word-reference.png" alt="Maia" />
      <img className="brand-mark-part brand-mark-part-cyber" src="/brand/cyber-word-reference.png" alt="Cyber" />
      <em className="brand-mark-caption">
        DESENVOLVENDO SOLUÇÕES. CONECTANDO IDEIAS.
        <br className="brand-caption-break" />
        CRIANDO O FUTURO.
      </em>
    </span>
  );
}

export default BrandMark;
