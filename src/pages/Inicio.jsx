import { useContext } from 'react'
import React from 'react'
import { Contexto } from '../contexto/Contexto'


const Inicio = () => {

    const { count,texto } = useContext(Contexto)
    return (
        <div>
            <h3>Inicio</h3>
            <h4>Contador:{count}</h4>
            <h5> {texto}</h5>
        </div>
    )
}

export default Inicio