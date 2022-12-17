import { Footer1,Footer2,Footer3,Footer4,Footer5 } from "../shaders/Footer/Footer"

export function Resultados_Encuesta(){
    return(
        <>
            <div className="row col-md8">
                <img src="https://firebasestorage.googleapis.com/v0/b/inviteishon-b3f12.appspot.com/o/icono%2Fyoxd.jpg?alt=media&token=b148bfbf-fe29-45bf-add2-8d2c4a0a3574" className="col-2 me-5 ms-5 mt-5 h-100"/>
                <img src="https://firebasestorage.googleapis.com/v0/b/inviteishon-b3f12.appspot.com/o/icono%2Fencuesta.jpg?alt=media&token=83e79a30-2a8e-44e4-a5f2-8180950be7f5" className="col-4 mt-5"/>
                <div className="col-5">
                    <p className="fondo-letter col-2 mt-5 ms-5">Resultados:</p>                    
                    <p className="fondo-letter-E col-2 mt-5 ms-5">COMIDA PREPARADA<i class="bi bi-check2-square"></i></p>
                    <br/>                    
                    <br/>
                    <p className="fondo-letter-E col-2 mt-5 ms-5">HELADO<i class="bi bi-check2-square"></i></p>
                </div>                    
            </div>               
            <Footer5/>
        </>
    )
}