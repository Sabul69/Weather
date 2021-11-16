import React, { useState } from 'react'
import Form from '../../Components/Home/Form'
import CityCard from '../../Components/Home/CityCard'
import Loader from '../../Components/Loader/Loader'

const Home = () => {
    const [City, setCity] = useState()
    const [loader, setLoader] = useState(false)
    const [Information, setInformation] = useState(null)
    
    const handleSearch=async()=>{
        setInformation(null)
        setLoader(true)
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=b977ff908163121d3db732e620d2012e`;
        const response = await fetch(API);
        const result = await response.json();
        setInformation(result)
        setLoader(false)
    }

    const handleCity=(e)=>{
        setCity(e.target.value);
    }

    return (
        <div className="h-screen ">
        <div className=" altura box">
            <Form
            handleCity={handleCity}
            handleSearch={handleSearch}
            />
            <div className="flex place-content-center">
        {Information &&
            (<CityCard
                City={Information.name}
                error={Information.message}
                Temperatura={!Information.message && Information.main.temp}
            /> )
        }
        </div>
        {loader && <Loader />}
        </div>
        </div>
    )
}

export default Home
