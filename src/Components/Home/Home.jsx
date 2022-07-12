import React, { useEffect, useState } from "react";
import s from "./Home.module.css";
import Lottie from "lottie-react";
import codeando from "../../assets/lotties/96316-blogging-black-white.json";
import HomeWeb from "../Home/Web/HomeWeb";
import HomeMobile from "./Mobile/HomeMobile";

function Home() {
  //utilizo el window.innerWidth para poder cambiar la version de web a mobile
  const [screen, setScreen] = useState(window.innerWidth);
//aca en el use efect agrego un evenlistener para que cada vez que se modifique el screen renderize de manera
//automatica la version que corresponda
  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth);
    window.addEventListener('resize', handleResize)
  }, [screen]);

  return (
    <div className={s.main}>
      <div className={s.lottieFile}>
        {/* para usar lottie hay que instalar la libreria, despues  bajar la version json del la animacion */}
        {/* importarla a este archivo y guardarla dentro de la etiqueta de la libreria */}
        {/* en animationData ponemos nombre del archivo importado y despues las caracteristicas que queremos */}
        <Lottie animationData={codeando} loop={true} height={400} width={400} />
      </div>
      <div>
        {screen > 1200 && <HomeWeb />}
        {screen < 1200 && <HomeMobile />}
      </div>
    </div>
  );
}

export default Home;
