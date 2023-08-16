import React from 'react'

const Navbar = (props) => {

    const modoInicio=()=>{
        props.setInicio(true)
        props.setContador(false)
    }
    const modoContador=()=>{
        props.setInicio(false)
        props.setContador(true)
    }
  return (
    <div>
        <div  class="btn-group">
        <button  class="btn btn-primary" onClick={modoInicio}>Inicio</button>
        <button class="btn btn-primary" onClick={modoContador}>Contador</button>
        </div>
    </div>
  )
}

export default Navbar