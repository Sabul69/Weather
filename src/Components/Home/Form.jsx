import React from 'react'

const Form = ({handleSearch, handleCity}) => {
    return (
        <div>
        <div className="text-center">
        <input required onChange={(e)=>handleCity(e)} className="text-2xl p-2 mt-20 border-solid border-2 border-r-0 rounded-r-none rounded-xl" type="text" name="username" id="username" placeholder="City Name" />
        <button onClick={handleSearch} className="text-2xl p-2 bg-color1 font-bold border-solid border-l-0 border-2 rounded-l-none rounded-xl border-black hover:text-color4 transition">Search</button>
    </div>
        </div>
    )
}

export default Form
