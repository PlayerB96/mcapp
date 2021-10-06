import React, {Component} from 'react';
import './login.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3000/usuarios";
const cookies = new Cookies();

export default class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
        
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password:this.state.form.password}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/login"})
                cookies.set('apellido', respuesta.apellido, {path: "/login"})
                cookies.set('nombre', respuesta.nombre, {path: "/login"})
                cookies.set('username', respuesta.username, {path: "/login"})
                alert(`Bienvenido ${respuesta.nombre}`);
                window.location.href="./principal";

            }else{
                alert("Usuario o Contraseña Incorrecto")
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {
        return (
            <body>
                <div className="loginContainer">
                    <h1> Login </h1>
                    <div className= "backgroundlogin">
                        <input 
                        className= "backInput" 
                        type="text" 
                        placeholder="Usuario" 
                        name="username"
                        onChange={this.handleChange}></input>
                        <input 
                        className= "backInput" 
                        type="password" 
                        placeholder="Contraseña" 
                        name="password"
                        onChange={this.handleChange}></input>
                        <a className = "botonlogin"
                        onClick={()=> this.iniciarSesion()}> Login </a>
                    </div>
                    <div className="ContenedorRegistro">
                        <p className = "parrafo"> Olvide mi contraseña / </p> 
                        <a href="/registro" 
                        className = "registrate" > Registrar</a>
                    </div>
                </div>
            </body>
        );
    }
}