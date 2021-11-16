import React from 'react'
import Card from './Card';
import Error from './Error';
import "./CityCard.styles.css"

export const CityCard = ({error, ...rest}) => {
    return (
        <div className="rounded-lg box-content mx-3 card bg-color2 mb-28">
        {error? (<Error/>) : <Card rest={rest}/>}
    </div>
    )
}

export default CityCard