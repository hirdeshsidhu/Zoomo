import React, { useState } from 'react'
import Cards from './Cards'
import SearchBar from './SearchBar'

function Cars() {
    const [searchCar,setSearchCar] = useState("");
    return (
        <div className='overflow-x-hidden'>
            <SearchBar  setSearchCar={setSearchCar}/>
            <Cards searchCar={searchCar} />
        </div>
    )
}

export default Cars
