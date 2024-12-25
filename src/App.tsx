import React, { useEffect } from "react";
import "./css/FondoSitio.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomeBox from "./components/WelcomeBox";
import AboutMe from "./components/AboutMe";

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header') as HTMLElement;
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    // Escuchar el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento de scroll cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez, al montar el componente

  return (
    <div className="app">
      <Header />
      <div className="welcome-container">
        <WelcomeBox />
      </div>
      {/* Otra sección debajo del fondo principal */}
      <AboutMe />
      <Footer />
    </div>
  );
};

export default App;