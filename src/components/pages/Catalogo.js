import React from "react";
import { CardGrid1 } from "../CardGrid1/CardGrid1";
import { CardGrid2 } from "../CardGrid2/CardGrid2";
import { Product } from "../Product/Product";
import './Catalogo.css'

export const Catalogo = () => {
    return(
        <section class="catalogo">
            <>
            <Product />
            {/* <CardGrid1 />
            <CardGrid2 /> */}
            </>
        </section>
    )
}