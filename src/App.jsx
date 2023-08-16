import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './Components/Navbar'
import Contador from './pages/Contador'
import Inicio from './pages/Inicio'
import { Contexto,Datos } from './contexto/Contexto'


function App() {
  const [contador, setContador] = useState(false)
  const [inicio,setInicio] = useState(true)

  return (
    <Datos>
      <div>
    <header>

    <Navbar setInicio={setInicio} setContador={setContador}/>
    </header>
    {
      inicio? <Inicio/>: <Contador/>
    }
      </div>

    </Datos>
  )
}

export default App
