import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./HomeMobile.module.css";

function HomeMobile() {
  const [show, setShow] = useState(false);

  return (
    <div className={s.main}>
      <div id={s.white}>
        {!show ? (
          <h1>Hola.</h1>
        ) : (
          <Link to={"/About"} className={s.decoration}>
            <h1 className={s.segundoTitWhite}>Sobre Mi</h1>
          </Link>
        )}
      </div>

      <div className={s.text}>
        {!show ? (
          <h1>Soy</h1>
        ) : (
          <Link to={"/Proyects"} className={s.decoration}>
            <h1 className={s.segundoTit}>Proyectos</h1>
          </Link>
        )}
      </div>

      <div className={s.text}>
        {!show ? (
          <h1>Alejandro</h1>
        ) : (
          <Link to={"/Contact"} className={s.decoration}>
            <h1 className={s.segundoTit}>Contacto</h1>
          </Link>
        )}
      </div>
      <div className={s.contenedorBoton}>
        {!show && (
          <button
            onClick={() => {
              setShow(!show);
            }}
            className={s.boton}
          >
            Toque aqui
          </button>
        )}
      </div>
    </div>
  );
}

export default HomeMobile;
