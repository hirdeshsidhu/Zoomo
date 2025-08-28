import React from 'react'
import Tops from './Tops'

function Top() {
    const data = [
        {
            title:"Mahindra Thar",
            desc:"Mahindra Thar is a rugged SUV designed for adventure, blending off-road capability with modern comfort and style."
        },
        {
            title:"Toyota Fortuner",
            desc:"The Toyota Fortuner is a powerful, stylish SUV offering luxury, reliability, and off-road capability with premium comfort."
        },
        {
            title:"Jeep Compass",
            desc:"The Jeep Compass is a stylish compact SUV blending rugged capability, premium comfort, advanced tech, and everyday practicality.",
        },
        {
            title:"Volkswagen Golf",
            desc:"The Volkswagen Golf is a versatile hatchback offering sporty performance, modern design, advanced tech, and everyday practicality."
        },
        {
            title:"Hyundai Verna",
            desc:"The Hyundai Verna is a sleek sedan combining modern design, advanced features, powerful performance, and premium comfort."
        },
        {
            title:"Mahindra Scorpio N",
            desc:"The Mahindra Scorpio N is a bold SUV offering rugged performance, modern features, premium comfort, and strong road presence."
        }
    ]
    return (
        <div className='mt-32 relative'>
            {
                data.map((item,index)=>{
                    return <Tops key={index} val={item}/>
                })
            }

        </div>
    )
}

export default Top
