import React from 'react'
import logo from "../images/images/logo.png"
import { NavLink } from 'react-router-dom'
import Button from './Button'
function Navbar() {
    return (
        <div className='max-w-screen-xl mx-auto pt-4 pb-1 flex items-center justify-between border-b-[1px] border-gray-700'>
            <div className='items-center flex'>
                <NavLink to={"/"}><img src={logo} className='h-[80px]' /></NavLink>
                <div className='flex gap-14 ml-20'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/cars"} className='flex items-center gap-1'><span className='inline-block bg-red-500 rounded-full h-1 w-1 shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] animate-pulse'></span>Cars</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                    <NavLink to={"/cart"}>Cart</NavLink>
                    <span className='bg-zinc-700 w-[2px]'></span>
                    <NavLink to={"/about"}>About</NavLink>
                </div>
            </div>
            <div>
                <NavLink to={"/login"}><Button title={"Login / Signup"}  /></NavLink>
            </div>
        </div>
    )
}

export default Navbar
