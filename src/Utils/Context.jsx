import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react';
export const CarContext = createContext();

function Context({ children }) {
    const [car, setCar] = useState([]);
    function loader() {
        try {
            axios.get('/cardata.json').then(res => setCar(res.data))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        loader();
    }, [])
    const category = [...new Set(car.map((item) => item.type))]
    const transm = [...new Set(car.map((item,index)=>item.transmission))]
    const fuel = [...new Set(car.map((item)=>item.fuel_type))]
    const prices = car.map(item=>item.price);
    const minPrice = prices.length>0 ? Math.min(...prices):0;
    const maxPrice = prices.length>0 ? Math.max(...prices):0;
    const data = {
        car,
        setCar,
        category,
        transm,
        fuel,
        minPrice,
        maxPrice
    }
    return (
        <div>
            <CarContext.Provider value={data}>
                {children}
            </CarContext.Provider>
        </div>
    )
}

export default Context
