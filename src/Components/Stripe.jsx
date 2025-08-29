import React from 'react'

function Stripe({ url }) {
    return (
        <div className='w-[16.8%] p-4 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex items-center justify-center'>
            <img className='h-[50px]' src={url.url} alt="" />
        </div>
    )
}

export default Stripe
