
import Colaborador from "../Colaborador"
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';


const Equipo = (props)=>{
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like} = props //estoy destrucurando en props, colaboradores, like, todo lo del corchete....
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6) 
    }
    
    
    const estiloTitulo ={ borderColor: colorPrimario}

    
    return <>
        {colaboradores.length > 0 &&
            < section className="equipo" style={obj} >
                <input
                 type = 'color'
                 className="input-color"
                 value={hexToRgba(colorPrimario, 0.6) }        
                 onChange={(event) => {
                    actualizarColor(event.target.value, id)
                 }} 
                
                />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">

                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}//lo estoy recibiendo en equipo y lo estoy mandando a cada uno de los colaboradores
                            like={like}
                        />)
                    }


                </div>

            </section >
   }
   </>
}
export default Equipo