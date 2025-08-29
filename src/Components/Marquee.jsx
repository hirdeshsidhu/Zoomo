import { motion } from 'motion/react'
import React from 'react'

function Marquee({ ImageUrl, direction }) {

    return (
        <div className='flex overflow-hidden w-full'>
            <motion.div className='flex items-center gap-20 flex-shrink-0 overflow-hidden py-8 whitespace-nowrap'
                initial={{ x: direction === 'left' ? 0 : "-100%" }}
                animate={{ x: direction === 'left' ? "-100%" : 0 }}
                transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            >
                {
                    ImageUrl.map((item, index) => {
                        return (
                            <>
                                <img src={item} className='w-[5vw] flex-shrink-0' key={index} />
                            </>
                        )
                    })
                }

            </motion.div>
            <motion.div className='flex items-center gap-20 flex-shrink-0 overflow-hidden py-8 whitespace-nowrap'
                initial={{ x: direction === 'left' ? 0 : "-100%" }}
                animate={{ x: direction === 'left' ? "-100%" : 0 }}
                transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            >
                {
                    ImageUrl.map((item, index) => {
                        return (
                            <>
                                <img src={item} className='w-[5vw] flex-shrink-0' key={index} />
                            </>
                        )
                    })
                }

            </motion.div>
        </div>
    )
}

export default Marquee
