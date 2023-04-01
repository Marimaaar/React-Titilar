import React from 'react'
import '../estilos/estilos.css'

function Historia(props) {
  return (
    <div>
        <div className="historia-semaforo mt-4">
    <h1>Historia del semáforo</h1>
  </div>
  <div className="parrafo-historia col-12 p-4">
    <p>{props.historia1}</p>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 mt-5">
          <h1 className="cards">Semáforo Humano</h1>
          <img className="img1" src="src\assets\Semáforo humano.jpg" alt=""/>
          {/* <!-- Inicio menú modal -->
          <!-- Button trigger modal --> */}
          <button type="button" className="btn btn-danger mt-2" data-bs-toggle="modal" data-bs-target="#semaforo">
            Más información
          </button>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="semaforo" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Semáforo Humano</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  El primer semáforo del mundo del cual se tiene constancia se colocó frente al parlamento británico de
                  Westminster, su autor fue un ingeniero llamado J.P. Knight. Su funcionamiento era manual, por lo que
                  un
                  policía debía estar permanentemente abriendo y cerrando el paso. Al ser un semáforo de gas, las
                  cuestiones de seguridad no estaban muy avanzadas, y en pocos meses este semáforo explotó matando al
                  policía encargado de su funcionamiento.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 mt-5">
          <h1 className="cards">Semáforo eléctrico</h1>
          <img className="img1" src="src\assets\Semáforo eléctrico.png" height="250px" alt=""/>
          {/* <!-- Inicio menú modal -->
          <!-- Button trigger modal --> */}
          <button type="button" className="btn btn-warning mt-2" data-bs-toggle="modal" data-bs-target="#electrico">
            Más información
          </button>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="electrico" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Semáforo Eléctrico</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  El primer semáforo del mundo del cual se tiene constancia se colocó frente al parlamento británico de
                  Westminster, su autor fue un ingeniero llamado J.P. Knight. Su funcionamiento era manual, por lo que
                  un
                  policía debía estar permanentemente abriendo y cerrando el paso. Al ser un semáforo de gas, las
                  cuestiones de seguridad no estaban muy avanzadas, y en pocos meses este semáforo explotó matando al
                  policía encargado de su funcionamiento.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 mt-5">
          <h1 className="cards">Dato Curioso</h1>
          <img className="img3" src="src\assets\Ampelmann.png" alt=""/>
          {/* <!-- Menú modal -->
          <!-- Button trigger modal --> */}
          <button type="button" className="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#dato">
            Más información
          </button>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="dato" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Ampelmann</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Ampelmann es el nombre del “hombrecillo del semáforo y nació en octubre de 1961 en la Berlín Oriental
                  gracias al psicólogo Karl Peglau quien trabajaba en el Servicio de Transportes y Comunicaciones. El
                  objetivo del psicólogo, era cambiar los diseños de la señalética para los autos con el fin de ayudar a
                  las personas que tenían problemas para diferenciar los colores. Así, los colores seguirían siendo
                  rojo, amarillo y verde, pero realizaría un cambio en las formas geométricas. El Ampelmann se hizo
                  conocido en casi toda la Berlín Oriental e incluso las escuelas lo utilizaban para la educación vial
                  de los niños.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Historia