import "./Home.css"

import { Footer1,Footer2,Footer3,Footer4,Footer5 } from "../shaders/Footer/Footer"


let pipol=[
    {
        nombre:"JAVIER ANDRES NARVAEZ GALIANO",
        foto:"https://firebasestorage.googleapis.com/v0/b/inviteishon-b3f12.appspot.com/o/persons%2FJavierPoto.jpg?alt=media&token=9741cbd5-8923-4fd5-a09d-1ff12f53252a"
    },
    {
        nombre:"JOSE MIGUEL MUÑOZ CARVAJAL",
        foto:"https://firebasestorage.googleapis.com/v0/b/inviteishon-b3f12.appspot.com/o/persons%2FJosePoto.jpg?alt=media&token=e2238b33-1e31-4d92-bebb-3f0eb96b3b12"
    },
    {
        nombre:"LAURA ACEVEDO ZAPATA",
        foto:"https://firebasestorage.googleapis.com/v0/b/inviteishon-b3f12.appspot.com/o/persons%2FLauraPoto.jpg?alt=media&token=46075a2e-7220-4ed6-8d05-5dd1db1ea735"
    },
    {
        nombre:"JUAN DAVID VILLADA",
        foto:"https://firebasestorage.googleapis.com/v0/b/inviteishon-b3f12.appspot.com/o/persons%2FRacrinPoto.jpg?alt=media&token=bbfa881a-86d3-4518-9a18-68956e8b58a9"
    },
]


export function Home(){

    return(
        <>
            <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md8 fondo-letter">
                        <h1 className="fw-bold Timptulom">Invitacion</h1>                        

                        <p>
                            Buenos días, tardes o noches es de mi sumo agrado realizarle está redacción en impuno y cordial respeto, aclarando primero que su tiempo de vida en este y en un futuro evento no le serán robados puesto quien afirme que el tiempo es suyo, en muchos aspectos de su vida ha de estar fallando, todo claro está que sin ánimo de ofender "que miras bobo?" O "anda pa aya" palabras sabias muy bien dichas fueron por el múltiples veces campeón de la copa pistón de basquetbol leo Messi hijo putatibo de René descartes y ahora en busca de dejar de alargar está carta.
                            <br/>
                            <br/>
                            Esta usted cordialmente invitado a la celebración del C.U.M conjunto de:
                        </p>                                                

                    </div>                    

                </div>
                <div className="row row-cols-2 g-4">
                    
                    {
                        pipol.map(function(pipo,id){//producto es una variable auxiliar
                            return(
                                //aqui se crean muchos fragmentos puesto que se esta recorriendo un map
                                //y el primer caso para el problema del key es cambiar el fragmento a <></> a un div <div><div/>
                                <div key={id}/**aqui se interpolo lo cual tengo que investigar*/>
                                    <div className="col">

                                        <div className="card shadow">

                                            <div className="row row-col-1 text-center">
                                                <img src={pipo.foto} alt="foto" className="img-fluid image"/>
                                            </div>
                                            <div className="row text-center pt-5">
                                                <h1 className="mt-5">{pipo.nombre}</h1>    
                                            </div>                                            

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }                    

                </div>
            </div>
            
        </section>

            <Footer1/>
        </>
    )

}