import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import BrandMark from "./BrandMark";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <BrandMark variant="vertical" />
          </Link>

          <p>Desenvolvimento de software personalizado em Florianópolis, Santa Catarina, e em todo o Brasil.</p>
        </div>

        <div className="footer-navigation">
          <h3>Navegação</h3>
          <div className="footer-links">
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/solucoes">Soluções</Link>
            <Link to="/processo">Processo</Link>
            <Link to="/cases">Áreas de atuação</Link>
            <Link to="/contato">Contato</Link>
          </div>
        </div>

        <div className="footer-navigation footer-solutions">
          <h3>Soluções</h3>
          <div className="footer-links">
            <Link to="/solucoes">Software sob medida</Link>
            <Link to="/solucoes">Plataformas web</Link>
            <Link to="/solucoes">APIs e integrações</Link>
            <Link to="/solucoes">Automações</Link>
            <Link to="/solucoes">Suporte</Link>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Redes e contato</h3>
          <a className="social-contact whatsapp-contact" href="https://wa.me/5548998141388?text=Olá%2C%20vim%20pelo%20site%20da%20Maia%20Cyber." target="_blank" rel="noreferrer">
            <span className="social-icon"><FaWhatsapp size={19} /></span>
            <span><small>Converse pelo</small>WhatsApp</span>
          </a>
          <a className="social-contact" href="mailto:alanmaix@gmail.com?subject=Contato pelo site Maia Cyber">
            <span className="social-icon"><Mail size={18} /></span>
            <span><small>Envie um e-mail</small>alanmaix@gmail.com</span>
          </a>
          <a className="social-contact" href="https://www.instagram.com/maiacyber/" target="_blank" rel="noreferrer">
            <span className="social-icon"><FaInstagram size={19} /></span>
            <span><small>Siga no Instagram</small>@maiacyber</span>
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Maia Cyber. Todos os direitos reservados.</span>

        <span>Software • Tecnologia • Soluções Digitais</span>
      </div>
    </footer>
  );
}

export default Footer;
