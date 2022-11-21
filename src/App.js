

import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './components/pages/Home';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Catalogo } from './components/pages/Catalogo';
import { Tiendas } from './components/pages/Tiendas';
import { Contactanos } from './components/pages/Contactanos';
import { Sobre_Nosotros } from './components/pages/Sobre_Nosotros';
import { CartProvider } from './components/context/CartContext';


function App() {
  //  console.log(dataProducts)
  return (
    <>
      <CartProvider>
      <NavBar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/tiendas' element={<Tiendas />} />
          <Route path='/contactanos' element={<Contactanos />} />
          <Route path='/sobre_nosotros' element={<Sobre_Nosotros />} />

        </Routes>
      </CartProvider>

      <Footer />
    </>
  );
}

export default App;
