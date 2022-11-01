import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
    <section class="footer-top">
      <p>NUESTRAS REDES SOCIALES</p>
      <div class="redes-sociales text-center">
        <a href="https://es-la.facebook.com/adidasAR/"><img src="./assets/img/branding/facebook_blanco.png" alt="Facebook"></img></a>
        <a href="https://www.tiktok.com/@puma"><img src="./assets/img/branding/tiktok_blanco.png" alt="Tiktok"></img></a>
        <a href="https://www.instagram.com/nike/?hl=es"><img src="./assets/img/branding/instagram_blanco.png" alt="Instagram"></img></a>
      </div>
    </section>
    <section class="footer-bottom">
      <div class="legal container-fluid">
        <div class="row align-items-center">
          <div class="col-6">
            <span class="">© 2022 Lorian. Todos los derechos reservados.</span>
          </div>
          <div class="col-3">
            <a class="d-flex" href="https://agreementservice.svs.nike.com/ar/es_la/rest/agreement?agreementType=termsOfUse&uxId=com.nike.commerce.nikedotcom.web&country=AR&language=es&requestType=redirect">Términos y Condiciones</a>
          </div>
          <div class="col-3">
            <a class="d-flex" href="https://agreementservice.svs.nike.com/ar/es_la/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.commerce.nikedotcom.web&country=AR&language=es&requestType=redirect">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </section>
  </footer>
  )
}
