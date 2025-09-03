import React, { createContext, useState } from 'react'

export const ContextCart = createContext();

function CartContext({children}) {
    const [cartItm,setCartItm] = useState([]);
    const addToCart = (car,day=1)=>{
        setCartItm((prev)=>{
            const existing = prev.find((item)=>item.id===car.id);
            if(existing){
                return prev.map((item)=>{
                    return item.id===car.id ? {...item,days:item.days+day}:item
                })
            }else{
                return [...prev,{...car,days:day}]
            }
        })
    }
    const removeFromCart = (id)=>{
        setCartItm((prev)=>{
            return prev.filter((item)=>item.id!==id)
        })
    }
    const clearCart = ()=>{
        setCartItm([])
    }
    const data={
        cartItm,
        addToCart,
        removeFromCart,
        clearCart

    }
  return (
    <div>
      <ContextCart.Provider value={data}>
        {children}
      </ContextCart.Provider>
    </div>
  )
}

export default CartContext
