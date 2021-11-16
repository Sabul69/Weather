import React from 'react'

const Information = ({Icon,Temp,Sensacion,Minima, Maxima}) => {

  
    return (
        <div className="bg-color3 card rounded-3xl flex flex-col justify-center items-center">
          <div className="w-full flex justify-end"> 
          <img  src={`https://openweathermap.org/img/wn/${Icon}@2x.png`} alt="" />
          </div> 
          <div className="bg-color5 rounded-3xl py-20 w-56">
          <p className="text-center text-6xl font-bold">{Temp}° C</p>
          </div>
          <div className="flex m-3">
          <p className="font-bold text-color5 text-2xl">Min:</p>
          <p className="text-color5 text-2xl">{{Minima}}</p>
          </div>
          <div className="flex m-3">
          <p className="font-bold text-color5 text-2xl">Max: </p>
          <p className="text-color5 text-2xl">{Maxima}</p>
          </div>
          <div className="flex m-3">
          <p className="font-bold text-color5 text-2xl">Sensacion Termica: </p>
          <p className="text-color5 text-2xl">{Sensacion}</p>
          </div>
        </div>
    )
}

export default Information
