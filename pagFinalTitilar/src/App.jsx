import React from 'react'
import Inicio from './componentes/Inicio'
import Carrusel from './componentes/Carrusel'
import Hisotria from './componentes/Historia'
import Footer from './componentes/Footer'


function App() {
  return (
    <div>
      <Inicio
      link1="Titilar"/>
      <Carrusel
      info1="Estableció un código de señales para orientar al viajero a través de los millarios que
      eran grandes
      columnas labradas con cincel."/>
      <Hisotria
      historia1="¿Sabes por qué se le llama semáforo al semáforo? El término viene de unión de dos palabras griegas; por un lado,
      sema “σῆμα”, que significa señal, mientras que foros “φόρος” quiere decir portador, por lo tanto, la palabra
      semáforo significaría algo así como “el portador de señales”."/>
      <Footer
      textabajo="Todos los derechos reservados"/>
    </div>
  )
}

export default App