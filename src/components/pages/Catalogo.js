import React from "react";
import { snkr, tela } from "../../data/productos";
import { CardGrid } from "../CardGrid/CardGrid";
// import { Snkr, Tela } from "../Product/Product";
import './Catalogo.css'

export const Catalogo = () => {
    return(
        <section class="catalogo">
            <h3 id='subtitulo1' class='text-center'>Sneaker</h3>
            <>
            <CardGrid data={snkr}/>
            {/* <Snkr data={snkr}/> */}
            </>
            <h3 class='text-center'>Tela</h3>
            <>
            <CardGrid data={tela}/>
            {/* <Tela data={tela}/> */}
            </>
        </section>
    )
}