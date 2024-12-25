import React from "react";
import titleImage from "../assets/images/header/OficialTittle.png";
import linkedInIcon from "../assets/images/header/LinkedIn.png";
import instagramIcon from "../assets/images/header/Instagram.png";
import githubIcon from "../assets/images/header/github.png";
import "../css/Header.css"; // Importa los estilos del header

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={titleImage} alt="HarrySev Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a 
              href="https://www.linkedin.com/in/jarol-riquelme-santibañez-71bb37338" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="icon" />
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com/vader.x_x/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" className="icon" />
              Instagram
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/HarrySevenVader" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="Github" className="icon" />
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;