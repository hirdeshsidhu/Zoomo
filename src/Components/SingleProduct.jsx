import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CarContext } from '../Utils/Context';
import { MdOutlinePeople } from "react-icons/md";
import { BsArrowLeft } from 'react-icons/bs';
import { FaGasPump } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { IoPinSharp } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { ContextCart } from '../Utils/CartContext';
function SingleProduct() {
    const { id } = useParams();
    const { car } = useContext(CarContext);
    const navigate = useNavigate();
    const { addToCart } = useContext(ContextCart)

    const singleCar = car.find((item) => item.id === parseInt(id))
    if (!singleCar) {
        return (
            <p className='text-2xl font-bold text-red-500'>Car not found</p>
        )
    }
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const getDays = () => {
        if (!pickupDate || !returnDate) return 0;
        const start = new Date(pickupDate);
        const end = new Date(returnDate)
        const diff = Math.max(end - start, 0)
        return Math.ceil(diff / (1000 * 60 * 60 * 24)) || 1;
    }
    return (
        <div className='w-full'>
            <div className='max-w-screen-xl mt-10 mx-auto'>
                <button className='text-2xl cursor-pointer active:scale-95 hover:text-zinc-700 font-bold' onClick={() => navigate(`/cars`)}><BsArrowLeft /></button>
                <div className='mt-10'>
                    <div>
                        <div className='flex gap-10 items-start'>
                            <div className='w-2/3'>
                                <img src={singleCar.image} className='rounded-lg w-full h-[400px] object-cover' alt="" />
                                <div className='mt-10'>
                                    <h1 className='text-2xl font-semibold'>{singleCar.title}</h1>
                                    <h4 className='text-zinc-700 mt-2 mb-5'>{singleCar.type}</h4>
                                </div>
                                <hr className='text-zinc-700' />
                                <div className='flex mt-5 gap-9'>
                                    <div className='py-5 px-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                                        <MdOutlinePeople className='text-3xl mb-2' />
                                        <p className='text-center'><span className="font-bold text-2xl">{singleCar.seats}</span><br /><span className="text-sm opacity-90">Seats</span></p>
                                    </div>
                                    <div className='py-5 px-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                                        <FaGasPump className='text-3xl mb-2' />
                                        <p className='text-center font-semibold'>{singleCar.fuel_type}</p>
                                    </div>
                                    <div className='py-5 px-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                                        <FaCarAlt className='text-3xl mb-2' />
                                        <p className='text-center font-semibold'>{singleCar.transmission}</p>
                                    </div>
                                    <div className='py-5 px-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                                        <IoPinSharp className='text-3xl mb-2' />
                                        <p className='text-center font-semibold'>{singleCar.location}</p>
                                    </div>
                                </div>
                                <div className=' mt-5'>
                                    <h2 className='text-2xl font-semibold'>Description</h2>
                                    <p className='mt-2 text-zinc-700'>{singleCar.description}</p>
                                </div>
                                <div className='relative'>
                                    <h1 className='text-xl font-semibold mt-10'>Features</h1>
                                    <div className='mt-5 w-2/3'>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-3'>
                                                <SiTicktick className='text-blue-500' />
                                                <p>360 Camera</p>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <SiTicktick className='text-blue-500' />
                                                <p>360 Camera</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-2 w-2/3'>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-3'>
                                                <SiTicktick className='text-blue-500' />
                                                <p>360 Camera</p>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <SiTicktick className='text-blue-500' />
                                                <p>360 Camera</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-2 w-2/3'>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-3'>
                                                <SiTicktick className='text-blue-500' />
                                                <p>360 Camera</p>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <SiTicktick className='text-blue-500' />
                                                <p>360 Camera</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-5 bg-black/80 w-1/3 rounded-3xl sticky  self-start top-20'>
                                <div className='flex justify-between items-center pb-5  mb-2 border-b border-zinc-700'>
                                    <h1 className='text-2xl font-semibold'>₹{singleCar.price}</h1>
                                    <h3 className='text-zinc-600'>per day</h3>
                                </div>
                                <div className='mt-5'>
                                    <h2 className='text-xl text-zinc-700'>Pickup Date</h2>
                                    <input type="date" name="" id="" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} className='w-full mt-2 border-[1px] outline-none border-zinc-700 px-3 py-2 rounded-lg' />
                                </div>
                                <div className='mt-5'>
                                    <h2 className='text-xl text-zinc-700'>Return Date</h2>
                                    <input type="date" name="" id="" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className='w-full mt-2 border-[1px] outline-none border-zinc-700 px-3 py-2 rounded-lg ' />
                                </div>
                                <div>
                                    <button className='w-full rounded-2xl mt-10 bg-blue-500 cursor-pointer active:scale-95 hover:bg-blue-600 py-3'
                                        onClick={() => {
                                            const days = getDays();
                                            if (days > 0) {
                                                addToCart({ ...singleCar }, days)
                                                navigate("/cart")
                                            }else{
                                                alert("Select a valid day")
                                            }
                                        }}
                                    >Book Now</button>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className='text-zinc-700 mt-3'>No credit card required to reserve</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default SingleProduct
