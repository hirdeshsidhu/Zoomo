
import { motion, useScroll } from 'motion/react'
import React, { useState } from 'react'

function Zoomo() {
    
    const [image,setImage] = useState([
        {
            url: "https://images.pexels.com/photos/17483233/pexels-photo-17483233.jpeg",
            top: "45%",
            left: "47%",
            isActive: false
        },
        {
            url: "https://images.pexels.com/photos/29883937/pexels-photo-29883937.jpeg",
            top: "50%",
            left: "42%",
            isActive: false
        },
        {
            url: "https://images.unsplash.com/photo-1506610654-064fbba4780c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
            top: "40%",
            left: "50%",
            isActive: false
        },
        {
            url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            top: "55%",
            left: "45%",
            isActive: false
        },
        {
            url: "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            top: "41%",
            left: "40%",
            isActive: false
        },
        {
            url: "https://images.pexels.com/photos/31853150/pexels-photo-31853150.jpeg",
            top: "65%",
            left: "53%",
            isActive: false
        }
    ]);
    const {scrollYProgress} = useScroll();

    scrollYProgress.on("change",(value)=>{
        let x = Math.floor((value*100));
        function changeImage(arr){
            setImage((prev)=>{
                return prev.map((item,index)=>{
                    return arr.indexOf(index)===-1 ? {...item,isActive:false}:{...item,isActive:true}
                })
            })
        }
        
        if(x===0){
            changeImage([])   
        }
        if(x===1){
            changeImage([0])   
        }
        if(x===2){
            changeImage([0,1])   
        }
        if(x===3){
            changeImage([0,1,2])   
        }
        if(x===4){
            changeImage([0,1,2,3])   
        }
        if(x===5){
            changeImage([0,1,2,3,4])   
        }
        if(x===6){
            changeImage([0,1,2,3,4,5])   
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
