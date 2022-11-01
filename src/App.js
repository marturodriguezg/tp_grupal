

import './App.css'
import { Routes, Route, Link } from "react-router-dom";
/* import { CardGrid } from "./components/CardGrid/CardGrid";
import { productos } from "./data/productos";
import { DesestObj } from "./components/fundamentos/06-DesestObj";
import { MiPrimerComp } from "./components/MiPrimerComp/MiPrimerComp"; */
import { Home } from './components/pages/Home';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';


function App() {
  //  console.log(dataProducts)
  return (
    <>
    <NavBar />
      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>
    <Footer />

    </>
  );
}

export default App;
