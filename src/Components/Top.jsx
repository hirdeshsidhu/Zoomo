import React, { useState } from 'react'
import Tops from './Tops'
import { motion } from 'motion/react'
import thar from "../images/videos/thar.mp4"
import fortuner from "../images/videos/fortuner.mp4"
import jeep from "../images/videos/jeep.mp4"
import golf from "../images/videos/golf.mp4"
import verna from "../images/videos/verna.mp4"
import sn from "../images/videos/sn.mp4"

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
            title:"Scorpio N",
            desc:"The Mahindra Scorpio N is a bold SUV offering rugged performance, modern features, premium comfort, and strong road presence."
        }
    ]
    const [pos,setPos] = useState(0);
    const mover = (val) =>{
        return setPos(val*20);
    }
    return (
        <div className='mt-32 relative'>
            {
                data.map((item,index)=>{
                    return <Tops key={index} val={item} mover={mover} index={index}/>
                })
            }
            <div className='pointer-events-none w-full h-full absolute  top-0'>
                <motion.div className='w-[28rem] h-[20rem]  absolute left-[30%] rounded-3xl overflow-hidden'
                initial={{y:pos}}
                animate={{y:pos+'rem'}}
                >
                    <motion.div animate={{y:-pos+'rem'}} className='w-full h-full over rounded-3xl '>
                        <video autoPlay muted loop className='object-cover absolute w-full h-full' src={thar}></video>
                    </motion.div>
                    <motion.div animate={{y:-pos+'rem'}} className='w-full h-full  rounded-3xl '>
                        <video autoPlay muted loop className='w-full h-full object-cover' src={fortuner}></video>
                    </motion.div>
                    <motion.div animate={{y:-pos+'rem'}} className='w-full h-full rounded-3xl '>
                        <video autoPlay muted loop className='w-full h-full object-cover' src={jeep}></video>
                    </motion.div>
                    <motion.div animate={{y:-pos+'rem'}} className='w-full h-full rounded-3xl '>
                        <video autoPlay loop muted className='w-full h-full object-cover' src={golf}></video>
                    </motion.div>
                    <motion.div animate={{y:-pos+'rem'}} className='w-full h-full rounded-3xl '>
                        <video autoPlay muted loop className='w-full h-full object-cover' src={verna}></video>
                    </motion.div>
                    <motion.div animate={{y:-pos+'rem'}} className='w-full h-full rounded-3xl '>
                        <video autoPlay muted loop className='w-full h-full object-cover' src={sn}></video>
                    </motion.div>
                </motion.div>
            </div>

        </div>
    )
}

export default Top
