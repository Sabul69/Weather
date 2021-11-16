import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Header = () => {
    return (
        <>
        <header className="bg-color3 w-auto flex justify-between">
        <p className ="p-8 bg-color1 text-color text-3xl text-center  font-bold rounded-t-full mt-1 ml-1 w-auto">S</p>
        <h1 className="text-center text-color1 font-bold text-5xl py-6 w-11/12"><Link to="/">Weather</Link></h1>
        </header>
        <Outlet/>
        </>
    )
}

export default Header
