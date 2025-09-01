import React, { useContext, useState } from 'react'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { ImCancelCircle } from 'react-icons/im';
import Context, { CarContext } from '../Utils/Context';

function FilterSection({ cat, setCat, transmission, setTransmission,fuelType,setFuelType}) {
    const { category, transm,fuel } = useContext(CarContext)
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

    const handelFuel = (item)=>{
        if (fuelType.includes(item)){
            setFuelType(fuelType.filter((val)=>val!=item))
        }else{
            setFuelType([...fuelType,item])
        }
    }
    return (
        <div>
            {
                (!showFilters) && (
                    <span className='mt-10'>
                        <HiBars3CenterLeft className='mt-10 text-3xl ml-3 cursor-pointer' onClick={() => setShowFilters(true)} />
                    </span>
                )
            }
            {
                showFilters && (
                    <div className='w-64 mt-10 relative'>
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
                                                <input type="checkbox" name="" id="" onChange={() => handleTransmission(item)} className='appearance-none w-3 h-3 border rounded-full checked:bg-blue-500 checked:border-blue-500 ' />
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
                                        fuel.map((item,index)=>{
                                            return(
                                                <li className='flex items-center gap-2 ml-5'>
                                                    <input type="checkbox" name="" id="" onChange={()=>handelFuel(item)} className='appearance-none w-3 h-3 border rounded-full checked:bg-blue-500 checked:border-blue-500'/>
                                                    <label htmlFor="">{item}</label>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                        </div>  
                    </div>
                )
            }
        </div>
    )
}

export default FilterSection
