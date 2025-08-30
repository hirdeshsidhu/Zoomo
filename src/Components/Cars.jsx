import React from 'react'
import Cards from './Cards'
import SearchBar from './SearchBar'

function Cars() {
    return (
        <div className='overflow-x-hidden'>
            <SearchBar />
            <Cards />
        </div>
    )
}

export default Cars
