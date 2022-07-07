
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Proyects from "./Components/Proyects/Proyects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About />}/>
        <Route exact path="/Contact" element={<Contact />}/>
        <Route exact path="/Proyects" element={<Proyects />} />
      </Routes>
    </div>
  );
}

export default App;
