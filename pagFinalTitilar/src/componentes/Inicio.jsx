import React from 'react'
import '../estilos/estilos.css'

function Inicio(props) {
  return (
    <div>
        <main className="container">
    <div className="row">
      <div className="col-12 col-lg-3 mt-4">
        <img src="src\assets\Logo completo.png" width="80px" height="150px" alt=""/>
      </div>
      <div className="menu col-12 col-lg-8 d-flex justify-content-end align-items-center fs-4">
        <nav className="navbar navbar-expand-lg">
          {/* <!-- Menú hamburguesa --> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Menú hamburguesa --> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mt-5">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="./Titilar.html">{props.link1}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Nuestra-marca.html">Nuestra marca</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Juego.html">Juego</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </main>
    </div>
  )
}

export default Inicio