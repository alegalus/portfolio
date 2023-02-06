import React from "react";
import { Link } from "react-router-dom";
import s from "./Proyects.module.css";

function Proyects() {
  return (
    <div className={s.main}>
      <Link to={"/"} className={s.decoration}>
        <p className={s.volver}>Home.</p>
      </Link>
      <div className={s.proyects}>
        <div className={s.proy}>
          <h2 className={s.proyecTittle}>Infusion Store</h2>
          <div className={s.enlaces}>
            <a href="https://github.com/alegalus/eCommerce_InfusionStore" target="_blank" rel="noopener noreferrer">
              GitHub ||
            </a>
            {/* <a href="https://pf-gp1-deploy.vercel.app/" target="_blank" rel="noopener noreferrer">
              {" "}
              Deploy
            </a> */}
             <a href="https://www.youtube.com/watch?v=cd3zgkjKOWM" target="_blank" rel="noopener noreferrer">
              {" "}
              Video (web/App)
            </a>
          </div>
        </div>
        {/* <div className={s.proy}>
          <h2 className={s.proyecTittle}>Infusion Store - App</h2>
          <div className={s.enlaces}>
            <a href="http://github.com/alegalus/eCommerce_InfusionStore" target="_blank" rel="noopener noreferrer">
              GitHub ||
            </a>
            <a href="https://www.youtube.com/watch?v=cd3zgkjKOWM" target="_blank" rel="noopener noreferrer">
              {" "}
              Video
            </a>
          </div>
        </div> */}
        <div className={s.proy}>
          <h2 className={s.proyecTittle}>Dogs - Web</h2>
          <div className={s.enlaces}>
            <a href="https://github.com/alegalus/Part04---PI-Dogs" target="_blank" rel="noopener noreferrer">
              GitHub ||
            </a>
            <a href="https://dogs-app-beta.vercel.app/" target="_blank" rel="noopener noreferrer">
              {" "}
              Deploy
            </a>
          </div>
        </div>
        <div className={s.proy}>
          <h2 className={s.proyecTittle}>Super Hero - Web</h2>
          <div className={s.enlaces}>
            <a href="https://github.com/alegalus/Super-Hero-APP" target="_blank" rel="noopener noreferrer">
              GitHub ||
            </a>
            <a href="https://alegalus.github.io/Super-Hero-APP/" target="_blank" rel="noopener noreferrer">
              {" "}
              Deploy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
