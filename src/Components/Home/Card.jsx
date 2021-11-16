import React, {useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Frio from "../../Iconos/frio.png"
import Medio from "../../Iconos/medio.png"
import Caliente from "../../Iconos/caliente.png"

const Card = ({rest}) => {
    const [Imagen, setImagen] = useState()
    const {City} = rest
    const Temperatura = rest.Temperatura-273.15
    const {pathname} = useLocation();

    useEffect(() => {
  
        if (Temperatura<15) {
            setImagen(Frio)
        } 
        if (Temperatura>30) {
            setImagen(Caliente)
        } if(Temperatura>15 && Temperatura<30) {
            setImagen(Medio)
        }
        
    }, [Temperatura, Imagen])

    return (
        <>
        <h2 className="text-center text-3xl font-bold mb-6" >{City}</h2>
            <div className="w-36 mx-auto">
            <img src={Imagen} alt="Temperatura" className="rounded-sm " />
        </div>
            <div className="text-center my-12">
                <p className="" >
                <span className=" text-xl	font-bold"> Temperatura: </span>{`${Temperatura.toFixed(2)}° C`}
                
                </p>
                <p className={`mr-8 hover:text-color2 ${pathname!=="/" ? "hidden" :""}`}>
               
                </p>
            </div>
            <div className="mt-5 text-center">
            <button className={`rounded-xl bg-color1 text-color4 border-solid border-2 border-black p-2 font-bold hover:bg-color4 hover:text-color1 transition`}><Link to={`/City/${City}`} >Ver Más...</Link></button>
            </div>
            <div className="flex flex-col justify-center items-center">
            </div>
        </>
    )
}

export default Card
