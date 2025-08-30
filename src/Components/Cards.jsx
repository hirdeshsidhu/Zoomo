import React, { useContext } from 'react'
import Card from './Card'
import { CarContext } from '../Utils/Context';

function Cards() {
    const { car } = useContext(CarContext);
    return (
        <div className='w-full mt-10'>
            <div className=' mx-auto'>
                <div className="flex flex-wrap justify-center gap-6">
                    {car.map((item, index) => (
                        <Card key={index} val={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards
