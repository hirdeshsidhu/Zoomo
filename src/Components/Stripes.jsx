import React from 'react'
import Stripe from './Stripe'


function Stripes() {
    let data = [
        {url:"https://purepng.com/public/uploads/large/purepng.com-porsche-car-logologocar-brand-logoscarsporsche-car-logo-1701527428893puuqz.png"},
        {url:"https://www.freepnglogos.com/uploads/bmw-logo-22.png"},
        {url:"https://purepng.com/public/uploads/large/purepng.com-mercedes-benz-car-logologocar-brand-logoscarsmercedes-benz-car-logo-1701527428463n3kha.png"},
        {url:"https://purepng.com/public/uploads/large/purepng.com-audi-car-logologocar-brand-logoscarsaudi-1701527428038cl0rr.png"},
        {url:"https://purepng.com/public/uploads/large/purepng.com-bentley-motors-logobentleybentley-motorsbritishmanufacturerluxury-carsloho-1701527414300vpbnv.png"},
        {url:"https://purepng.com/public/uploads/large/purepng.com-rolls-royce-car-logorolls-royce-carbritish-car-manufacturerolls-royce-automotiverolls-royce-limitedrolls-royce-car-logo-1701527611220mlkpj.png"}
    ]
    return (
        <div className='mt-35 flex items-center'>
           {
                data.map((item,index)=>{
                    return <Stripe key={index} url={item} />
                })
           }
        </div>
    )
}

export default Stripes
