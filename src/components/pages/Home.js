import React from "react";
import { HeroBanner } from "../HeroBanner/HeroBanner";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { productos } from "./data/productos";


export const Home = () => {
    return(
        <>
        <HeroBanner />
        <CardGrid data={productos} />
        </>  
    )   
}