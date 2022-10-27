import React from "react";
import { Carrousel1 } from "../Carrousel1/Carrousel1";
import { Carrousel2 } from "../Carrousel2/Carrousel2";

export const Catalogo_LP = () => {
    return (
       <section class="catalogo-lp">
            <h3>Nuevos Modelos</h3>
            <>
            <Carrousel1 />
            <Carrousel2 />
            </>
       </section>
    )
}