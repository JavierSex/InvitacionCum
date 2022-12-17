import { Link } from "react-router-dom"

import "./Menu.css"

export function Menu(){
    return(
        <>
            <header class="header">
                <Link class="logo" to="/">
                    <img src="https://firebasestorage.googleapis.com/v0/b/inviteishon-b3f12.appspot.com/o/icono%2F8498_drip_goku.png?alt=media&token=dfbb7871-9cde-4f4a-853b-8de745d71de2" alt="Logo" className=""/>
                </Link>
                <nav>
                   <ul class="nav-links">
                        <li><Link className="" to="/">Carta</Link></li>
                        <li><Link className="" to="/disculpas">Disculpas</Link></li>
                        <li><Link className="" to="/informacion">Informacion</Link></li>
                        <li><Link className="" to="/renovacion">Renovacion</Link></li>
                        <li><Link className="" to="/resultados">Resultados de la encuesta</Link></li>                        
                   </ul>            
                </nav>                
            </header>
        </>
    )
}