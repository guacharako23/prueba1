import { createContext, useState } from "react";

export const Contexto=createContext()

export const Datos=({children})=>{

    const [count,setCount] = useState(0)

    const texto="hola"


    return(
        <Contexto.Provider value={{count,setCount,texto}}>
            {children}
        </Contexto.Provider>
    )

}