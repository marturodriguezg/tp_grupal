import React from "react";
import './Carrousel2.css'

export const Carrousel2 = () => {
    return (
        <div id="carouselExampleIndicators2" class="carousel carousel-dark slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="card mb-3">
                        <div class="row h-100 align-items-center g-0 "> 
                            <div class="col-md-4">
                                <div class="card-body">
                                    <h5 class="card-title">CHUCK TAYLOR HIGH</h5>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <img src="./assets/img/productos/lona/Chuck Taylor High Negras.png" class="img-fluid rounded-start" alt="..."></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card mb-3">
                        <div class="row h-100 align-items-center g-0"> 
                            <div class="col-md-4">
                                <div class="card-body">
                                    <h5 class="card-title">CHUCK TAYLOR ALL STAR CLASSIC</h5>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <img src="./assets/img/productos/lona/Chuck Taylor All Star Classic.jpg" class="img-fluid rounded-start" alt="..."></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card mb-3">
                        <div class="row h-100 align-items-center g-0">
                            <div class="col-md-4">
                                <div class="card-body">
                                    <h5 class="card-title">VANS U OLD SKOOL</h5>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <img src="./assets/img/productos/lona/VANS U OLD SKOOL.jpg" class="img-fluid rounded-start" alt="..."></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    )
}