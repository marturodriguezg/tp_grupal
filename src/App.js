

import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { productos } from "./data/productos";
import { DesestObj } from "./components/fundamentos/06-DesestObj";
import { MiPrimerComp } from "./components/MiPrimerComp/MiPrimerComp";
import { DesestArray } from "./components/fundamentos/07-DesestArray";
import { Home } from './components/pages/Home';


function App() {
  //  console.log(dataProducts)
  return (
    <>
    <DesestArray />
    <Map />
    <NavBar />
      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>
    <Footer />

    </>
  );
}

export default App;
