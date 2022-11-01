import React from "react";
import './NavBar.css'

export const NavBar = () => {
        return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                                <a class="navbar-brand" href="./index.html">
                                        <img src="./assets/img/branding/Logo Lorian.png" alt="Logo"></img>
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                                        <ul class="navbar-nav">
                                                <li class="nav-item">
                                                        <a class="nav-link" aria-current="page" href="./catalogo.html">CATÁLOGO</a>
                                                </li>
                                                <li class="nav-item">
                                                        <a class="nav-link" aria-current="page" href="./tiendas.html">TIENDAS</a>
                                                </li>
                                                <li class="nav-item">
                                                        <a class="nav-link" href="./contactanos.html" target="_blank">CONTACTANOS</a>
                                                </li>
                                                <li class="nav-item">
                                                        <a class="nav-link" href="./sobre nosotros.html">SOBRE NOSOTROS</a>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        )
}