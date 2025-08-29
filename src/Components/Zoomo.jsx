
import { motion, useScroll } from 'motion/react'
import React, { useState } from 'react'
import gg from "..//images/images/gg.jpeg"
import bmw from "..//images/images/bmw.jpeg"
import n from "..//images/images/3.avif"
import four from "..//images/images/four.avif"
import five from "..//images/images/five.avif"
import six from "..//images/images/six.jpeg"
function Zoomo() {

    const [image, setImage] = useState([
        {
            url: gg,
            top: "45%",
            left: "47%",
            isActive: false
        },
        {
            url: bmw,
            top: "50%",
            left: "42%",
            isActive: false
        },
        {
            url: n,
            top: "40%",
            left: "50%",
            isActive: false
        },
        {
            url: four,
            top: "55%",
            left: "45%",
            isActive: false
        },
        {
            url: five,
            top: "41%",
            left: "40%",
            isActive: false
        },
        {
            url: six,
            top: "65%",
            left: "53%",
            isActive: false
        }
    ]);
    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (value) => {
        let x = Math.floor(value * 100);
        function changeImage(arr) {
            setImage((prev) => {
                return prev.map((item, index) => {
                    return arr.indexOf(index) === -1 ? { ...item, isActive: false } : { ...item, isActive: true }
                })
            })
        }
        if (x === 0) {
            changeImage([])
        }
        if (x === 1) {
            changeImage([0])
        }
        if (x === 2) {
            changeImage([0, 1])
        }
        if (x === 3) {
            changeImage([0, 1, 2])
        }
        if (x === 4) {
            changeImage([0, 1, 2, 3])
        }
        if (x === 5) {
            changeImage([0, 1, 2, 3, 4])
        }
        if (x === 6) {
            changeImage([0, 1, 2, 3, 4, 5])
        }

    })

    return (
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[20vw] tight tracking-tight font-medium select-none'>ZOOMO</h1>
            <div className='w-full h-full absolute  top-0'>
                {
                    image.map((item, index) => {
                        return item.isActive && (
                            <img src={item.url} className='w-52 absolute -translate-y-[50%] -translate-x-[50%] rounded-3xl' style={{ top: item.top, left: item.left }}></img>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Zoomo
