import React from 'react'
import './principal.css'

function Principal() {
    return (
        <div className="main">
            <div className="container">
                <div className="title">
                    <h1 className="megacursos_inc">FORMS MEGACURSOS INC</h1>
                </div>
                <a href="/" className="cerrar_s">Cerrar Sesión</a>
                <div className="Cards">
                    <div className="Colaboradores">
                        <h1 className="card_colab"> Colaboradores </h1>
                        <p className="card_colab_p">Formulario diseñado para medir y mejorar el indice de satisfaccion de nuestros Colaboradores</p>
                        <a href="/formulario" className="card_colab_a"> INICIAR FORMULARIO </a>
                    </div>
                    <div className="Megacursos">
                        <h1 className="card_megac"> Megacursos.Com </h1>
                        <p className="card_megac_p">Visita nuestra Página con todos nuestros cursos disponibles en Megacursos.Com</p>
                        <a href="#" className="card_megac_a"> IR A SITIO WEB</a>
                    </div>
                    <div className="Estudiantes">
                        <h1 className="card_estud"> Estudiantes </h1>
                        <p className="card_estud_p">Formulario diseñado para medir y mejorar el indice de ventas en los Cursos de Megacursos.Com</p>
                        <a href="#" className="card_estud_a"> INICIAR FORMULARIO </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Principal
