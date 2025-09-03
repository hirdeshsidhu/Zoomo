import React, { useContext, useEffect, useState } from 'react'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { ImCancelCircle } from 'react-icons/im';
import Context, { CarContext } from '../Utils/Context';
import { div } from 'motion/react-client';

function FilterSection({ cat, setCat, transmission, setTransmission, fuelType, setFuelType, selectedPrice, setSelectedPrice }) {
    const { category, transm, fuel, minPrice, maxPrice } = useContext(CarContext)
    const [showFilters, setShowFilters] = useState(false);
    const handleClick = (item) => {
        if (cat.includes(item)) {
            setCat(cat.filter((val) => item !== val))
        } else {
            setCat([...cat, item])
        }
    }
    const handleTransmission = (item) => {
        if (transmission.includes(item)) {
            setTransmission(transmission.filter((val) => val != item))
        } else {
            setTransmission([...transmission, item])
        }
    }

    const handelFuel = (item) => {
        if (fuelType.includes(item)) {
            setFuelType(fuelType.filter((val) => val != item))
        } else {
            setFuelType([...fuelType, item])
        }
    }
    const priceRange = [minPrice, maxPrice];
    useEffect(() => {
        setSelectedPrice(maxPrice)
    }, [maxPrice, setSelectedPrice])
    const handleChange = (e) => {
        setSelectedPrice(Number(e.target.value))
    }
    return (
        <div className='relative'>
            <div className='mt-10'>
                {
                    (!showFilters) && (
                        <span className='mt-10'>
                            <HiBars3CenterLeft className='mt-10 text-3xl ml-3 cursor-pointer' onClick={() => setShowFilters(true)} />
                        </span>
                    )
                }
                {
                    showFilters && (
                        <div className='w-52 mt-10 relative rounded-3xl bg-black/80  h-full'>
                            <button className='absolute text-lg cursor-pointer top-0 right-5' onClick={() => setShowFilters(false)}><ImCancelCircle /></button>
                            <h1 className='text-center text-2xl underline font-semibold'>Filter</h1>

                            <div>
                                <h3 className='text-md font-medium mt-10'>Category</h3>
                                <ul className='space-y-2 mt-3'>
                                    {
                                        category && category.length > 0 ? (
                                            category.map((item, index) => {
                                                return <li key={index} className='flex items-center gap-2 ml-5'>
                                                    <input type="checkbox"
                                                        onChange={() => handleClick(item)}
                                                        checked={cat.includes(item)}
                                                        className="appearance-none w-3 h-3 border border-gray-400 rounded-full checked:bg-blue-500 checked:border-blue-500 cursor-pointer"
                                                    />


                                                    <label htmlFor="" className='cursor-pointer text-sm'>{item}</label>

                                                </li>
                                            })
                                        ) : (
                                            <p>no available cars</p>
                                        )
                                    }
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-md font-md mt-10'>Transmission</h3>
                                <ul>
                                    {
                                        transm.map((item, index) => {
                                            return (
                                                <li key={index} className='flex items-center gap-2 ml-5'>
                                                    <input type="checkbox" name="" id="" onChange={() => handleTransmission(item)} checked={transmission.includes(item)} className='appearance-none w-3 h-3 border rounded-full checked:bg-blue-500 checked:border-blue-500 ' />
                                                    <label htmlFor="" className='cursor-pointer text-sm'>{item}</label>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-md font-md mt-10'>Fuel Type</h3>
                                <ul>
                                    {
                                        fuel.map((item, index) => {
                                            return (
                                                <li className='flex items-center gap-2 ml-5'>
                                                    <input type="checkbox" name="" id="" onChange={() => handelFuel(item)} className='appearance-none w-3 h-3 border rounded-full checked:bg-blue-500 checked:border-blue-500' checked={fuelType.includes(item)} />
                                                    <label htmlFor="">{item}</label>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-md font-md mt-10'>Price Range</h3>
                                <div className='ml-5'>
                                    <input type="range" name="" id="" min={minPrice} max={maxPrice} value={selectedPrice ?? maxPrice} onChange={handleChange} />
                                    <p className='text-sm mt-2'>Price : {minPrice} - {selectedPrice ?? maxPrice}</p>
                                </div>
                            </div>
                            <div>
                                <button className='px-3 text-sm cursor-pointer active:scale-95 mt-2 ml-16 py-1 bg-white text-black rounded-full mb-5' onClick={
                                    () => {
                                        setCat([])
                                        setFuelType([])
                                        setTransmission([])
                                        setSelectedPrice(maxPrice)
                                    }
                                }>Reset</button>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FilterSection
