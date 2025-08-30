import React from 'react'
import { FaCarSide, FaGasPump } from 'react-icons/fa'
import { MdOutlineLocationOn, MdOutlinePeopleOutline } from 'react-icons/md'
import Button from './Button'
import { IoIosReturnRight } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function Card({val}) {
    const playSound = ()=>{
        const audio  = new Audio("/audio.mp3.mp3");
        audio.play();
    }
    const navigate = useNavigate();
  return (
    <div className='relative cursor-pointer w-80 h-[420px] bg-zinc-900 rounded-3xl py-3 px-4 overflow-hidden  border-[#FF1E56] hover:shadow-[0_0_15px_#FF1E56] hover:scale-105 transition-all duration-500' onClick={()=>navigate(`/cars/${val.id}`)}>
      <div className='h-48 w-full'>
        <img src={val.image} className='w-full h-full object-cover rounded-2xl' />
      </div>
      <span className='absolute px-3 py-1 bg-[#000000CC] rounded-md top-[38%] left-[68%]'>₹{val.price}</span>
      <div className='mt-5'>
        <h1 className='text-xl font-semibold'>{val.title}</h1>
        <h3 className='text-zinc-600'>{val.type}</h3>
        <div className='text-zinc-600 px-2 mt-2'>
            <div className='flex justify-between '>
                <h3 className='flex gap-2 items-center'><span className='inline-block'><MdOutlinePeopleOutline /></span>7</h3>
                <h3 className='flex items-center gap-2'><FaGasPump /> {val.fuel_type}</h3>
            </div>
            <div className='flex justify-between'>
                <h3 className='flex items-center gap-2'><FaCarSide />{val.transmission}</h3>
                <h3 className='flex items-center gap-2'><MdOutlineLocationOn />{val.location}</h3>
            </div>
        </div>
      </div>
      <button onClick={()=>{
        playSound();
      }} className='w-full bg-white text-black rounded-full py-2 mt-5 flex items-center justify-between px-3 cursor-pointer active:scale-95'>
        Book Now
        <IoIosReturnRight />
      </button>
    </div>
  )
}


export default Card