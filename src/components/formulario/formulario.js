import React from 'react'
import './formulario.css'

export default function Formulario(){
    return (
        <body>
            <div className="Container">
                <div className ="formContainer">
                    <div><img  className="logocontainer" src="logomc.png" ></img></div>
                    <h1 >Satisfacción de Empleados</h1>
                    <div className="instructorContainer">
                        <h2 className="h2containernombre">Nombre Instructor</h2>
                        <div className="nombresContainer">
                            <input className="inputcontainer" type="text"  placeholder = "Apellido 1"></input>
                            <input className="inputcontainer" type="text"  placeholder = "Apellido 2"></input>
                            <input className="inputcontainer" type="text"  placeholder = "Nombres"></input>
                        </div>
                    </div>
                    
                    <div className="cargoFechaContainer">
                        <div className="cargoContainer">
                            <h2 className="h2container">Cargo</h2>
                            <input className="inputcontainerdate" type="text"   ></input>
                        </div>
                        <div className="fechaContainer">
                            <h2 className="h2container">Fecha</h2>
                            <input className="inputcontainerdate" type="date" ></input>
                        </div>
                    </div>

                    <div>
                        <h1 className="valoraciones">Valoraciones</h1>
                        <h1 className="calificaciones">Insuficiente (1) - Regular (2) - Bueno (3) - Muy Bueno (4) - Excelente (5)</h1>
                    </div>

                    <div className="fondoquests">

                    <div className="crecimientoydesarrollo">
                        <h1 className="fontsize"> Crecimiento y Desarrollo </h1>
                    </div>

                        <div className="grindquests">
                            <div>
                                <h1></h1>
                            </div>
                            <div className="contentvaloraciones">
                                <h1 className="valoracionesh1">VALORACIONES</h1>
                            </div>

                            <div>
                                <h1 className="h1conteint">¿Está satisfecho con las oportunidades de crecimiento de tu carrera en esta empresa, y hay un plan claro disponible para hacerlo?</h1>
                            </div>
                            <div className="conteintdesplegables">
                                <h1></h1>
                            </div>

                            <div>
                                <h1 className="h1conteint">¿Tu gerente te comunica las expectativas y te da retroalimentación de manera clara y profesional?</h1>
                            </div>
                            <div className="conteintdesplegables">
                                <h1></h1>
                            </div>

                            <div>
                                <h1 className="h1conteint">¿Tienes todas las herramientas necesarias para hacer tu mejor trabajo?</h1>
                            </div>
                            <div className="conteintdesplegables">
                                <h1></h1>
                            </div>
                            
                        </div>

                    </div>

                    
                </div>
            </div>
        </body>
    );
}