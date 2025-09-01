import React, { useState } from 'react'
import Cards from './Cards'
import SearchBar from './SearchBar'
import FilterSection from './FilterSection';

function Cars() {
    const [searchCar,setSearchCar] = useState("");
    const [cat,setCat] = useState([])
    const [transmission,setTransmission] = useState([])
    const [fuelType,setFuelType] = useState([])
    return (
        <div className='overflow-x-hidden'>
            <SearchBar  setSearchCar={setSearchCar}/>
            <div className='flex w-full'>
                <FilterSection setCat = {setCat} cat = {cat} transmission={transmission} setTransmission = {setTransmission} fuelType={fuelType} setFuelType={setFuelType}/>
                <Cards searchCar={searchCar} cat={cat} transmission={transmission} fuelType={fuelType}/>
            </div>
        </div>
    )
}

export default Cars
