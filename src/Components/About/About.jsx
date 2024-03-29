import React from "react";
import { Link } from "react-router-dom";
import s from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import cv from "../../assets/pdf/CVAlejandroGalus.pdf";
{
  /* importo el arhcivo del cv en el href */
}

function About() {
  // utilice fontawesome primero instalando la libreria completa, despues el icono que quiero de acuerdo a la categoria
  return (
    <div className={s.main}>
      <Link to={"/"} className={s.decoration}>
        <p className={s.volver}>Home.</p>
      </Link>
      <div id={s.tittle}>
        <h1 className={s.aboutTittle}>Desarrollador Web Full Stack</h1>
      </div>
      <div className={s.contenedorParrafo}>
        <div className={s.parrafo}>
          <h2 className={s.cont}>¡Hola! 👋 </h2>
          <p>
            Bienvenidos, mi nombre es Alejandro Galus y soy Full Stack Web
            Developer.
          </p>
          <h3 className={s.cont}>Un poco sobre mi...</h3>

          <p>
            Estudie y me recibi de licenciado en Recursos Humanos y desde 2009,
            trabajo en distintas áreas vinculadas a Capital Humano,
            especializándome en los últimos 4 años en capacitación y desarrollo.
            Después de más de 10 años de experiencia, decidí hacer un cambio en
            mi carrera. En el 2019 me adentré en el mundo de la programación a
            través de cursos en distintas plataformas. Este aprendizaje
            autogestionado me preparó para luego poder dar un paso más y
            comenzar el bootcamp de Henry, en donde pude pasar por + 800hs de
            experiencia en programacion, tanto academica como en proyectos
            individuales y grupales. <br />A partir de septiembre 2022 pude
            comenzar mi camino dentro de la industria de la tecnologia. Se
            vienen nuevos desafios que me van a permitir avanzar en esta
            reconversion de carrera que tanto buscaba.
          </p>

          <h5>
            Estas son algunas de las tecnologías con las que he trabajado hasta
            ahora, espero seguir aprendiendo más:{" "}
          </h5>
          <ul>
            <li>
              <FontAwesomeIcon className={s.iconoTec} icon={faCode} /> HTML -
              CSS - JavaScript
            </li>
            <li>
              <FontAwesomeIcon className={s.iconoTec} icon={faCode} /> React Js
              - Redux{" "}
            </li>
            <li>
              <FontAwesomeIcon className={s.iconoTec} icon={faCode} /> Node Js -
              Express
            </li>
            <li>
              <FontAwesomeIcon className={s.iconoTec} icon={faCode} /> Sequelize
              - PostgresSQL
            </li>
            <li>
              <FontAwesomeIcon className={s.iconoTec} icon={faCode} /> Microsoft
              SQL Server
            </li>
            <li>
              <FontAwesomeIcon className={s.iconoTec} icon={faCode} /> Genexus
            </li>
            <li>
              <FontAwesomeIcon className={s.iconoTec} icon={faCode} /> React
              Native{" "}
            </li>
            <li>
              <FontAwesomeIcon className={s.iconoTec} icon={faCode} /> Bootstrap
            </li>
            <li>
              <FontAwesomeIcon className={s.iconoTec} icon={faCode} /> Git -
              Github
            </li>
            <li>
              <FontAwesomeIcon className={s.iconoTec} icon={faCode} />{" "}
              Metodologías ágiles - Azure DevOps
            </li>
          </ul>
          <p>
            Podes leer mas sobre mis experiencias, habilidades y educacion en el
            archivo que esta debajo:{" "}
          </p>
        </div>
      </div>
      <div className={s.contenedorCurriculum}>
        {/* esto es la forma de descargar el cv */}
        <a
          className={s.curriculum}
          href={cv}
          rel="noopener noreferrer"
          download="AlejandroGalus"
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
}

export default About;
