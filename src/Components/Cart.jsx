import React, { useContext } from 'react'
import { ContextCart } from '../Utils/CartContext'
import { ImBin } from 'react-icons/im';

function Cart() {
    const { cartItm,clearCart,removeFromCart } = useContext(ContextCart)
    const subtotal = cartItm.reduce((acc, item) => acc + item.price * item.days, 0);

    return (
        <div className='w-full'>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-5xl font-semibold mt-5 justify-self-center'>My Bookings</h1>

                <div className='flex mt-10 font-bold text-xl'>
                    <h1 className='w-2/4'>Item</h1>
                    <h1 className='w-1/6'>Price</h1>
                    <h1 className='w-1/6'>Days</h1>
                    <h1 className='w-1/6'>Total</h1>
                </div>
                <hr className='border-t border-zinc-700 mt-4' />

                {cartItm.length === 0 ? (
                    <div>
                        <h1>No available items</h1>
                    </div>
                ) : (
                    <>
                        {cartItm.map((item, index) => (
                            <div key={index} className='flex items-center border-b-[1px] border-zinc-600'>
                                <div className='w-2/4 flex items-center gap-2'>
                                    <div className='w-[100px] my-2'>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className='font-semibold'>{item.title}</h4>
                                    </div>
                                </div>
                                <div className='w-1/6'>
                                    <h4 className='text-red-500 font-semibold'>Rs.{item.price}</h4>
                                </div>
                                <div className='w-1/6'>
                                    <h4>{item.days}</h4>
                                </div>
                                <div className='w-1/6'>
                                    <h3 className='text-red-500 font-semibold'>Rs.{item.days * item.price}</h3>
                                </div>
                                <div>
                                    <button className='text-white active:scale-95 cursor-pointer' onClick={()=>removeFromCart(item.id)}><ImBin /></button>
                                </div>
                            </div>
                        ))}

                        <div className='flex justify-between mt-10'>
                            <button className='px-2 py-1 rounded-3xl cursor-pointer text-sm bg-white text-black ' onClick={()=>clearCart()}>Clear All</button>
                            <div className="text-right  mt-6">
                                <h2 className="text-2xl font-bold">Subtotal : <span className='text-red-500'>Rs.{subtotal}</span></h2>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart
