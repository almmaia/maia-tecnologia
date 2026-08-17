type BrandMarkProps = {
  variant?: "horizontal" | "vertical";
};

function BrandMark({ variant = "horizontal" }: BrandMarkProps) {
  return (
    <span className={`brand-mark brand-mark-${variant}`} aria-label="Maia Tecnologia">
      <span className="brand-word">MAIA</span>
      <span className="brand-discipline">TECNOLOGIA</span>
      {variant === "vertical" && <em className="brand-mark-caption">Engenharia e produtos digitais</em>}
    </span>
  );
}

export default BrandMark;
