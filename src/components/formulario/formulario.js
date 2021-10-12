import React, {Component, value, useState, useEffect} from 'react'
import './formulario.css'



export default function Formulario() {
    const [number, setNumber] = useState({one: "", two: "", three: ""})
    const [suma, setSuma] = useState()
    
    
    useEffect(()=>{
        const { one, two, three } = number
        setSuma(Number(one) + Number(two) + Number(three))
        },[number]);
    
    
    const handleInput = (event) => {
        const { name, value } = event.target
        setNumber({...number, [name]: value})
      }  
    
        
        return (
            
            <body>
                <form className="Container">
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
                                        <input className="inputprom"
                                        onChange={handleInput} 
                                        name="one" 
                                        value={number.one} 
                                        placeholder="Ingesar un Numero del (1) al (5)"/>
                                        
                                </div>

                                <div>
                                    <h1 className="h1conteint">¿Tu gerente te comunica las expectativas y te da retroalimentación de manera clara y profesional?</h1>
                                </div>
                                <div className="conteintdesplegables">
                                        <input className="inputprom"
                                        onChange={handleInput} 
                                        name="two" 
                                        value={number.two} 
                                        placeholder="Ingesar un Numero del (1) al (5)" />
                                        
                                </div>

                                <div>
                                    <h1 className="h1conteint">¿Tienes todas las herramientas necesarias para hacer tu mejor trabajo?</h1>
                                </div>
                                <div className="conteintdesplegables">
                                        <input className="inputprom"
                                        onChange={handleInput} 
                                        name="three" 
                                        value={number.three} 
                                        placeholder="Ingesar un Numero del (1) al (5)"/>
                                        
                                </div>

                            </div>

                        </div>

                        <div className="calificacionfinal">
                            <h1 className="calif">Calificacion Final</h1>
                        </div>

                        <div className="contentpromedio">
                            
                            <div className="calificacionprom">
                                <h1 className="calif">Promedio General</h1>
                            </div>
                            <div className="calificacionprom">
                            <input className="inputfinal" value={suma/3}/>
                            </div>

                        </div>

                        <div className="cargoFechaContainer">
                            <div className="cargoContainer">
                                <h2 className="h2container">DNI</h2>
                                <input className="inputcontainerdate" type="numeric"   ></input>
                            </div>
                            <div className="fechaContainer">
                                <h2 className="h2container">ID</h2>
                                <input className="inputcontainerdate" type="numeric" ></input>
                            </div>
                        </div>

                        <button className="buttoncontent">
                                    Enviar
                        </button>
                    </div>
                </form>
            </body>
        );
    
}