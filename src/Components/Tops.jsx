import React from 'react'
import Button from './Button'
function Tops({ val }) {
    return (
        <div className='w-full py-20 h-[20rem]'>
            <div className='max-w-screen-xl mx-auto flex justify-between items-center'>
                <h1 className='text-4xl font-medium'>{val.title}</h1>
                <div className='w-1/3 flex flex-col gap-10'>
                    <p>{val.desc}</p>
                    <Button title={"Book  Now"} />
                </div>
            </div>
        </div>
    )
}

export default Tops
