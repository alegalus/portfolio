import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Home.module.css";
import Lottie from "lottie-react";
import codeando from "../assets/lotties/96316-blogging-black-white.json";

function Home() {
  const [about, setAbout] = useState(false);
  const [proyects, setProyects] = useState(false);
  const [contact, setContact] = useState(false);

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: codeando,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };
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
        <div id={s.white}>
          {/* <h1 className={s.titulo}>Hola.</h1> */}
          {!about && <h1 onMouseEnter={handleAboutIn}>Hola.</h1>}
          <Link to={"/about"} className={s.decoration}>
            {about && <h1 className={s.segundoTitWhite} onMouseLeave={handleAboutOut}>Sobre Mi</h1>}
          </Link>
        </div>

        <div className={s.text}>
          {!proyects && <h1 onMouseEnter={handleProyIn}>Soy</h1>}
          <Link to={"/Proyects"} className={s.decoration}>
            {proyects && <h1 className={s.segundoTit} onMouseLeave={handleProyOut}>Proyectos</h1>}
          </Link>
        </div>

        <div className={s.text}>
          {!contact && <h1 onMouseEnter={handleConIn}>Alejandro</h1>}
          <Link to={"/Contact"} className={s.decoration}>
            {contact && <h1 className={s.segundoTit} onMouseLeave={handleConOut}>Contacto</h1>}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
