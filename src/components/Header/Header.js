import React from "react";
import { publicidad } from "../../assets";
import './Header.css'

export const Header = () => {
    return (
      <header>
        <div class="overlay"></div>

        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" src={publicidad}></video>
    
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 class="display-3">LORIAN</h1>
            </div>
          </div>
        </div>
      </header>
    )
}