import React, { useContext } from 'react'
import Card from './Card'
import { CarContext } from '../Utils/Context';
import { h2 } from 'motion/react-client';

function Cards({ searchCar,cat,transmission,fuelType,selectedPrice }) {
    const { car } = useContext(CarContext);
    const SearchedCar = car.filter((item,index)=>{
       const itemCheck =   item.title.toLowerCase().includes(searchCar.toLowerCase());
       const matchesCategory = cat.length > 0 ? cat.includes(item.type) : true;
       const matchTransmission = transmission.length >0 ? transmission.includes(item.transmission):true
       const fuel_Type = fuelType.length>0 ? fuelType.includes(item.fuel_type) : true;
       const itemPrice = selectedPrice ? item.price<=selectedPrice: true
       return itemCheck && matchesCategory && matchTransmission && fuel_Type && itemPrice
    })
    return (
        <div className='w-full mt-10 min-h-screen'>
            <div className=' mx-auto'>
                <div className="flex flex-wrap justify-center gap-6">
                   {
                    SearchedCar.length>0?(
                         SearchedCar.map((item, index) => (
                        <Card key={index} val={item} />
                    ))
                    ):(
                        <h2>no available car</h2>
                    )
                   }
                </div>
            </div>
        </div>
    )
}

export default Cards
