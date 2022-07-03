import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Home.module.css";
import Lottie from "lottie-react";
import codeando from "../assets/lotties/96316-blogging-black-white.json";

function Home() {
  const [about, setAbout] = useState(false);
  const [proyects, setProyects] = useState(false);
  const [contact, setContact] = useState(false);
  const [screen, setScreen] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setScreen(window.innerWidth);
  }, [screen]);

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
      <div className={s.lottieFile}>
        <Lottie animationData={codeando} loop={true} height={400} width={400} />
      </div>
      <div>
        {screen > 1200 && (
          <>
            <div id={s.white}>
              {!about ? (
                <h1 onMouseEnter={handleAboutIn}>Hola.</h1>
              ) : (
                <Link to={"/about"} className={s.decoration}>
                  <h1
                    className={s.segundoTitWhite}
                    onMouseLeave={handleAboutOut}
                  >
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
          </>
        )}
      </div>
      <>
        {screen < 1200 && (
          <>
            <div id={s.white}>
              {!show ? (
                <h1>Hola.</h1>
              ) : (
                <Link to={"/about"} className={s.decoration}>
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
          </>
        )}
      </>
      {screen < 1200 && (
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
      )}
    </div>
  );
}

export default Home;
