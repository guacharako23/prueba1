import React, { useState, useContext } from 'react'
import { Contexto } from '../contexto/Contexto'


const Contador = () => {
    const { count, setCount } = useContext(Contexto)
    return (
        <div>
            <h3>Contador: {count}</h3>
            <button className='btn btn-outline-dark' onClick={()=>setCount(e=>e+1)}>Aumentar</button>
            <button className='btn btn-outline-dark' onClick={()=>setCount(e=>e-1)}>Disminuir</button>
            <button className='btn btn-outline-dark' onClick={()=>setCount(e=>e*0)}>Resetear</button>
        </div>
    )
}

export default Contador