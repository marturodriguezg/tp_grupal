import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import { Cart } from "../cart/Cart";
import './NavBar.css'

export const NavBar = () => {
        return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                                <Link class="navbar-brand" aria-current="page" to="/">
                                        <img src={Logo} alt="Logo"></img>
                                </Link>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                                        <ul class="navbar-nav">
                                                <li class="nav-item">
                                                        <Link class="nav-link" aria-current="page" to="/catalogo">CATÁLOGO</Link>
                                                </li>
                                                <li class="nav-item">
                                                        <Link class="nav-link" aria-current="page" to="/tiendas">TIENDAS</Link>
                                                </li>
                                                <li class="nav-item">
                                                        <Link class="nav-link" aria-current="page" to='/contactanos'>CONTACTANOS</Link>
                                                </li>
                                                <li class="nav-item">
                                                        <Link class="nav-link" aria-current="page" to='/sobre_nosotros'>SOBRE NOSOTROS</Link>
                                                </li>
                                                <li>                                
                                                        <Cart />
                                                </li>
                                        </ul>
                                        
                                </div>
                        </div>
                </nav>
        )
}