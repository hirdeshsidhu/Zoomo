import React from 'react'

function SearchBar() {
    return (
        <div className='w-screen mt-10'>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-center text-5xl font-semibold'>Available Cars</h1>
                <h3 className='mt-2 text-center text-xl text-zinc-600'>Browse our selection of premium vehicles available for your next adventure</h3>
                <div className='flex justify-center items-center mt-10'>
                    <input className='w-full px-3 py-2 rounded-full border-[1px] outline-none' type="text" placeholder='Search by model or company' />
                </div>
            </div>

        </div>
    )
}

export default SearchBar
