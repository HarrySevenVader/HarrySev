import React from "react";
import "../css/Footer.css"; // Importa los estilos del header

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; HarrySevenVader 2024. Todos los derechos reservados.</p>
        <p>Programado con React ♡</p>
      </div>
    </footer>
  );
};

export default Footer;
