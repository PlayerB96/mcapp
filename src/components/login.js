import React from 'react'
import './login.css'

export default function Login(){
    return (
        <body>
            <div className="loginContainer">
                <h1> Login </h1>
                <div className= "backgroundlogin">
                    <input className= "backInput" type="text" placeholder="Usuario"></input>
                    <input className= "backInput" type="password" placeholder="Contraseña"></input>
                    <a className = "botonlogin"> Login </a>
                </div>
                <div className="ContenedorRegistro">
                    <p className = "parrafo"> Olvide mi contraseña / </p> 
                    <a className = "registrate">  Registrar</a>
                </div>
            </div>
        </body>
    );
}