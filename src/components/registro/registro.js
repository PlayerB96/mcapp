import React from 'react'
import './registro.css'

export default function Registro(){
    return (
        <body>
            <div className="loginContainer">
                <h1> Registro </h1>
                <div className= "backgroundlogin">
                    <input className= "backInput" type="text" placeholder="Nombres"></input>
                    <input className= "backInput" type="text" placeholder="Apellidos"></input>
                    <input className= "backInput" type="email" placeholder="Email"></input>
                    <input className= "backInput" type="password" placeholder="Contraseña"></input>
                    <input className= "backInput" type="password" placeholder="Confirmar Contraseña"></input>
                    <div className ="contenedorBotones">
                        <a href="/login" className = "botonBack"> Back </a> <a className = "botonlogin"> Registrar </a>
                    </div>
                </div>
                
            </div>
        </body>
    );
}