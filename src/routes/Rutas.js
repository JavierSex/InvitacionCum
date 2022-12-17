import { Route, Routes } from "react-router-dom"

import { Home } from "../Home/Home"
import { Menu } from "../shaders/Menu/Menu"
import { Disculpas } from "../Disculpas/Disculpas"
import { Informacion } from "../Informacion/Informacion"
import { Renovacion } from "../Renovacion/Renovacion"
import { Resultados_Encuesta } from "../Resultados_Encuesta/Resultados_Encuesta"


export function Rutas(){
    return (
        <>  
            <Menu/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/disculpas" element={<Disculpas/>}/>
              <Route path="/informacion" element={<Informacion/>}/>
              <Route path="/renovacion" element={<Renovacion/>}/>
              <Route path="/resultados" element={<Resultados_Encuesta/>}/>              
            </Routes>
        </>//all this are path, rutas.
    )
    
}