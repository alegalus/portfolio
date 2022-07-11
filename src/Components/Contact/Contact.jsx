import React from "react";
import { Link } from "react-router-dom";
import s from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className={s.main}>
      <Link to={"/"} className={s.decoration}>
        <p className={s.volver}>Home.</p>
      </Link>
      <div id={s.tittle}>
        <h1 className={s.aboutTittle}>
          Trabajemos juntos y hagamos cosas increibles!{" "}
        </h1>
      </div>
      <div className={s.contenedorParrafo}>
        <div className={s.parrafo}>
          <h2 className={s.cont}>Contacto</h2>
          <p>
            Actualmente estoy buscando nuevos desafíos, donde pueda demostrar
            mis conocimientos, probar mis habilidades, seguir aprendiendo y
            continuar creciendo. Me encanta programar y desafiarme con nuevos
            objetivos.
          </p>
          <p>
            Si te queres contactar conmigo, podes encontrarme en Linkedin,
            Github, WhatsApp o enviarme un email desde el formulario de contacto. Estoy buscando mi primer
            empleo como desarrollador, así que si crees que mi perfil puede
            ayudarte, no dudes en avisarme.
          </p>

          <ul className={s.contacto}>
            <li>
              <Link to="/Contact/Form" id={s.enlaces} className={s.decoration}>
                Formulario de contacto
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alegalus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className={s.icono} icon={faLinkedin} />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/alegalus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className={s.icono} icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5491123151145"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className={s.icono} icon={faWhatsapp} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
