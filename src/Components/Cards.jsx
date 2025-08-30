import React, { useContext } from 'react'
import Card from './Card'
import { CarContext } from '../Utils/Context';
import { h2 } from 'motion/react-client';

function Cards({ searchCar }) {
    const { car } = useContext(CarContext);
    const SearchedCar = car.filter((item,index)=>{
       return  item.title.toLowerCase().includes(searchCar.toLowerCase());
    })
    return (
        <div className='w-full mt-10'>
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
