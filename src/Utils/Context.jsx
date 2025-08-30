import axios from 'axios';
import React, {  useContext, useEffect, useState } from 'react'
import { createContext } from 'react';
export const CarContext = createContext();

function Context({children}) {
    const [car,setCar] = useState([]);
    function loader(){
        try {
            axios.get('/cardata.json').then(res=>setCar(res.data))
        } catch (error) {
            console.log(error)
        }
    } 
    useEffect(()=>{
        loader();
    },[])
    const data = {
        car,
        setCar
    }
  return (
    <div>
      <CarContext.Provider value={data}>
        {children}
      </CarContext.Provider>
    </div>
  )
}

export default Context
