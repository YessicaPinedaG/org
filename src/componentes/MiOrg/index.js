import { useState } from "react"
import "./MiOrg.css"


const MiOrg = (props)=> {

    //useState
    //const [nombreVariable, funcionActualiza] = useState (valorInicial)
    
    console.log(props)
    
    // const [mostrar,actualizarMostrar]= useState(true)

    // // const manejarClick =()=>{
    // //     console.log("Mostar/Ocultar elemento")
    // //     actualizarMostrar("hola")//lo que nosotros pongamos dentro del parentesis, es lo que se le va asignar a nuestro estado-"mostrar"
    // // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick ={props.cambiarMostrar}/>

    </section>
}

export default MiOrg