import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./HomeWeb.module.css";

function HomeWeb() {
  const [about, setAbout] = useState(false);
  const [proyects, setProyects] = useState(false);
  const [contact, setContact] = useState(false);

  let handleAboutIn = () => {
    setAbout(!about);
  };
  let handleAboutOut = () => {
    setAbout(!about);
  };
  let handleProyIn = () => {
    setProyects(!proyects);
  };
  let handleProyOut = () => {
    setProyects(!proyects);
  };
  let handleConIn = () => {
    setContact(!contact);
  };
  let handleConOut = () => {
    setContact(!contact);
  };
  return (
    <div className={s.main}>
      <div id={s.white}>
        {!about ? (
          <h1 onMouseEnter={handleAboutIn}>Hola.</h1>
        ) : (
          <Link to={"/About"} className={s.decoration}>
            <h1 className={s.segundoTitWhite} onMouseLeave={handleAboutOut}>
              Sobre Mi
            </h1>
          </Link>
        )}
      </div>

      <div className={s.text}>
        {!proyects ? (
          <h1 onMouseEnter={handleProyIn}>Soy</h1>
        ) : (
          <Link to={"/Proyects"} className={s.decoration}>
            <h1 className={s.segundoTit} onMouseLeave={handleProyOut}>
              Proyectos
            </h1>
          </Link>
        )}
      </div>

      <div className={s.text}>
        {!contact ? (
          <h1 onMouseEnter={handleConIn}>Alejandro</h1>
        ) : (
          <Link to={"/Contact"} className={s.decoration}>
            <h1 className={s.segundoTit} onMouseLeave={handleConOut}>
              Contacto
            </h1>
          </Link>
        )}
      </div>
    </div>
  );
}

export default HomeWeb;
