

import './App.css'

import { CardGrid } from "./components/CardGrid/CardGrid";
import { productos } from "./data/productos";
import { DesestObj } from "./components/fundamentos/06-DesestObj";
import { MiPrimerComp } from "./components/MiPrimerComp/MiPrimerComp";
import { DesestArray } from "./components/fundamentos/07-DesestArray";


function App() {
  //  console.log(dataProducts)
  return (
    <>
      <MiPrimerComp />

      <VarConstLet />

      <TemplateString />

      <ObjetosLiterales />

      <JsArray /> 

      {/* Aplicación de .map */}
      {/* <CardGrid data={productos}  /> */}

      <JsFunction />

      {/* <DesestObj /> */}
      
      {/* <DesestArray /> */}
      
    </>
  );
}

export default App;
