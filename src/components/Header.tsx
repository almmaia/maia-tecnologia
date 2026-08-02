import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import BrandMark from "./BrandMark";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="logo" onClick={closeMenu}>
          <BrandMark />
        </Link>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end onClick={closeMenu}>
            Início
          </NavLink>

          <NavLink to="/sobre" onClick={closeMenu}>
            Sobre
          </NavLink>

          <NavLink to="/solucoes" onClick={closeMenu}>
            Soluções
          </NavLink>

          <NavLink to="/processo" onClick={closeMenu}>
            Como trabalhamos
          </NavLink>

          <NavLink to="/cases" onClick={closeMenu}>
            Áreas de atuação
          </NavLink>

          <Link to="/contato" className="nav-cta" onClick={closeMenu}>
            Fale conosco
          </Link>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
