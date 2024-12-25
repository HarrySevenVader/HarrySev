import React from "react";
import "../css/AboutMe.css";
import myPhoto from "../assets/images/my-photo/my-photo.jpeg"; // Importa la imagen
import myPhoto2 from "../assets/images/my-photo/mifoto.jpg"; // Importa la imagen

const AboutMe: React.FC = () => {
  return (
    <section className="about-me-wrapper">
      <section className="about-me">
        <h2>¿Quien soy yo?</h2>
        <br />
        <p>
            Soy un chico apasionado por la informática y la tecnología con un fuerte interés por aprender cosas nuevas. 
        </p>
        <p>
            Me llamo Jarol pero me dicen Harry, tengo 21 años y estudio la carrera de Ingenieria en Informatica en la Universidad Tecnologica Metropolitana (UTEM). Actualmente voy en 5to año y me encuentro en la etapa de empezar a ampliar todos mis conocimientos adquiridos en la universidad para desarrollar proyectos personales y profesionales. 
        </p>
        <p>
            Ademas de mi profesion, me gusta escuchar musica rock como Avenged Sevenfold, Nirvana, Incubus, entre muchas bandas del genero.
        </p>
        <p>
            Juego titulos como Dead by Daylight, Cyberpunk 2077, The Witcher 3, FIFA, Need for Speed, etc. Soy un gamer que disfruta jugar en sus tiempo libres.
        </p>
        <p>
            Como ya sabes un poco sobre mi, a que me dedico y que me gusta, este sitio web lo desarrolle con el fin de mostrar mis habilidades en el desarrollo web, utilizarlo como mi portafolio y que el mundo sepa quien soy yo y como contactarme.
        </p>
        <br />
        <br />
        <div className="info">
          <h2>Mis fotos</h2>
          <br />
          <br />
          <div className="profile-picture-separator">
            <img src={myPhoto} alt="Mi foto" className="profile-picture" />
            <img src={myPhoto2} alt="Mi foto" className="profile-picture" />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <div className="skills">
          <h2>Habilidades Computacionales</h2>
          <br />
          <br />
          <p>Desarrollo de interfaces web con tecnologías de Frontend como React, TypeScript y TailwindCSS.</p>
            <p>Programación en lenguajes como C, C++, Python y JavaScript, con experiencia en el desarrollo de aplicaciones y scripts para diversas necesidades.</p>
            <p>Conocimientos intermedios en bases de datos, incluyendo MySQL y PostgreSQL.</p>
            <p>Habilidades intermedias en el uso de herramientas de Microsoft Office, como Excel, PowerPoint y Word.</p>
        </div>

      </section>
    </section>
  );
};

export default AboutMe;
