import React, { useState } from 'react'
import Cards from './Cards'
import SearchBar from './SearchBar'
import FilterSection from './FilterSection';

function Cars() {

    const [searchCar, setSearchCar] = useState("");
    const [cat, setCat] = useState([])
    const [transmission, setTransmission] = useState([])
    const [fuelType, setFuelType] = useState([])
    const [selectedPrice, setSelectedPrice] = useState([])
    return (
        <div className=' min-h-screen'>
            <SearchBar setSearchCar={setSearchCar} />
            <div className='flex w-full'>
                <div>
                    <div className='sticky top-20'>
                        <FilterSection setCat={setCat} cat={cat} transmission={transmission} setTransmission={setTransmission} fuelType={fuelType} setFuelType={setFuelType} selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} />
                    </div>
                </div>
                <div className='flex-1'>
                    <Cards searchCar={searchCar} cat={cat} transmission={transmission} fuelType={fuelType} selectedPrice={selectedPrice} />

                </div>
            </div>
        </div>
    )
}

export default Cars
