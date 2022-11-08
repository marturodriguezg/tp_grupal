import React from "react";
import './Form.css'

export const Form = () => {
    return (
        <div class="formulario-container">
            <h3 class="text-center">Contactanos</h3>
            <form>
                <h4>Introduzca los siguientes datos:</h4>
                <form>
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Nombre"></input>
                    <label for="floatingInput">Nombre</label>
                    </div>
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="ejemplo@ejemplo.com"></input>
                    <label for="floatingInput">Correo Electrónico</label>
                    </div>
                    <div class="form-floating">
                    <textarea class="form-control" placeholder="Deje su comentario" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Comentarios</label>
                    </div>
                    <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Deseo recibir noticias y ofertas sobre nuestros poductos</label>
                    </div>
                    <div class="form-button d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary btn-dark">Enviar</button>
                    </div>
                </form>
            </form>
        </div>
    )
}