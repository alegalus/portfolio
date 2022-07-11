import React, { useEffect, useState } from "react";
import s from "./Home.module.css";
import Lottie from "lottie-react";
import codeando from "../../assets/lotties/96316-blogging-black-white.json";
import HomeWeb from "../Home/Web/HomeWeb";
import HomeMobile from "./Mobile/HomeMobile";

function Home() {
  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth);
    window.addEventListener('resize', handleResize)
  }, [screen]);

  return (
    <div className={s.main}>
      <div className={s.lottieFile}>
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
