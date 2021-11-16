import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import Information from "../../Components/City/Information" ;

const City = () => {
    //Hooks
    const { city } = useParams();
    //State
    const [CityInfo, setCityInfo] = useState();
    const [loader, setLoader] = useState(false);
  
    useEffect(() => {
      setLoader(true);
      const handleCityInfo = async () => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b977ff908163121d3db732e620d2012e`
        );
        const result = await response.json();
        setCityInfo(result);
      };
      handleCityInfo();
      setLoader(false);
    }, [city]);
  
    return (
      <div className="">
        <h2 className="pt-12 font-bold text-4xl text-center">{`City: ${city}`}</h2>
        <div className="flex flex-col m-auto justify-center items-center">
          {CityInfo && !loader ? (
              <Information
              Icon={CityInfo.weather[0].icon}
              Temp={((CityInfo.main.temp)-273.15).toFixed(0)}
              Sensacion={((CityInfo.main.feels_like)-273.15).toFixed(2)}
              Min={((CityInfo.main.temp_min)-273.15).toFixed(2)}
              Max={((CityInfo.main.temp_max)-273.15).toFixed(2)}
              />
          ) : (
              <Loader/>
          )}
        </div>
      </div>
    );
}

export default City
