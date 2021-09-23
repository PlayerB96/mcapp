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
                            <input className="inputcontainerdate" type="text"  placeholder = "Apellido 1"></input>
                        </div>
                        <div className="fechaContainer">
                            <h2 className="h2container">Fecha</h2>
                            <input className="inputcontainerdate" type="date"  placeholder = "Apellido 1"></input>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}