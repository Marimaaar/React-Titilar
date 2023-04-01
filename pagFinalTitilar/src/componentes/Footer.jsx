import React from 'react'
import '../estilos/estilos.css'

function Footer(props) {
    return (
        <div>
            <footer>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-4 mt-3 d-flex justify-content-center">
                    <img src="src\assets\Logo-facebook.png" width="35px" height="35px" alt="" />
                </div>
                <div className="col-4 mt-3 d-flex justify-content-center">
                    <img src="src\assets\Logo-instagram.png" width="35px" height="35px" alt="" />
                </div>
                <div className="col-4 mt-3 d-flex justify-content-center">
                    <img src="src\assets\Logo-youtube.png" width="35px" height="35px" alt="" />
                </div>
            </div>
            <p className="text-abajo justify-content-center align-items-center">{props.textabajo}</p>
            </footer>
        </div>
    )
}

export default Footer