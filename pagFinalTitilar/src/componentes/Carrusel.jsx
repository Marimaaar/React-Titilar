import React from 'react'


function Carrusel(props) {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="src\assets\Imperio-Romano.jpg" className="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h2>El Imperio Romano</h2>
          <p className="carrusel">{props.info1}</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="src\assets\Ciudad.jpg" class="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h2>En la actualidad</h2>
          <p className="carrusel">Esto ha servido para establecer una organización y control en las grandes ciudades en las
            que la
            accidentalidad suele ser una gran problemática. </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="src\assets\Peatones2.jpg" class="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h2>Titilar</h2>
          <p className="carrusel">Es un proyecto que quiere concientizar sobre la prudencia en conductores y peatones acerca
            del cruce de
            semáforo. </p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
  )
}

export default Carrusel