import React, { useState, useEffect, useRef } from "react";
import "../css/WelcomeBox.css";

const WelcomeBox: React.FC = () => {
  const [text, setText] = useState(""); // Texto progresivo
  const [currentIndex, setCurrentIndex] = useState(0); // Índice de caracteres escritos
  const [isWriting, setIsWriting] = useState(true); // Controla el efecto de escritura
  const boxRef = useRef<HTMLDivElement>(null); // Referencia para ajustar la altura

  // Texto completo que se irá escribiendo progresivamente
  const fullText = `
Hola soy Harry, tengo 21 años y este es mi rincón digital. 

Aquí podrás conocerme mejor en base a la informacion que encontraras y acceder a mis enlaces personales donde estoy vinculado para estar al tanto de lo que hago. 

¡Espero que disfrutes la navegación y encuentres todo lo que buscas en mi sitio! ✨`;

  // Lógica para el efecto de escritura progresiva
  useEffect(() => {
    if (isWriting && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[currentIndex]); // Agrega un carácter al texto
        setCurrentIndex((prev) => prev + 1);
      }, 50); // Velocidad de escritura
      return () => clearTimeout(timeout);
    } else {
      setIsWriting(false); // Detiene el efecto de escritura al finalizar
    }
  }, [currentIndex, isWriting, fullText]);

  // Ajusta dinámicamente la altura del contenedor cuando el texto cambia
  useEffect(() => {
    if (boxRef.current) {
      const contentHeight = boxRef.current.scrollHeight; // Altura real del contenido
      boxRef.current.style.height = `${contentHeight}px`; // Ajusta la altura exacta
    }
  }, [text]);

  return (
    <div className="welcome-box-container">
      <div className="welcome-box" ref={boxRef}>
        <h1>🌐 ¡Bienvenido a mi sitio web extranjero! 🌐</h1>
        <p className="welcome-text">{text}</p>
      </div>
    </div>
  );
};

export default WelcomeBox;
