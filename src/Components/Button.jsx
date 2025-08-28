import React from 'react'
import { IoIosReturnRight } from 'react-icons/io'

function Button({ title }) {
    return (
        <div>
            <button className='px-3 py-2 cursor-pointer bg-white rounded-full text-black w-40 border-[1px] border-black text-sm flex items-center justify-between'>
                {title}
                <IoIosReturnRight />
            </button>
        </div>
    )
}

export default Button
