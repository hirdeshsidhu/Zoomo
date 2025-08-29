import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    const data = [
        [
            "https://purepng.com/public/uploads/large/purepng.com-rolls-royce-car-logorolls-royce-carbritish-car-manufacturerolls-royce-automotiverolls-royce-limitedrolls-royce-car-logo-1701527611220mlkpj.png",
            "https://purepng.com/public/uploads/large/purepng.com-jeep-car-logologocar-brand-logoscarsjeep-car-logo-1701527428216gctx3.png",
            "https://purepng.com/public/uploads/large/purepng.com-mercedes-benz-car-logologocar-brand-logoscarsmercedes-benz-car-logo-1701527428643swnyk.png",
            "https://purepng.com/public/uploads/large/purepng.com-porsche-car-logologocar-brand-logoscarsporsche-car-logo-1701527428893puuqz.png",
            "https://purepng.com/public/uploads/large/purepng.com-land-rover-car-logologocar-brand-logoscarsland-rover-car-logo-1701527428368smzsp.png",
            "https://purepng.com/public/uploads/large/purepng.com-car-logologocar-brand-logoscars-1701527429081tvuwc.png",
            "https://purepng.com/public/uploads/large/purepng.com-volvo-car-logologocar-brand-logoscarsvolvo-car-logo-1701527429026kbtdt.png",
            "https://purepng.com/public/uploads/large/purepng.com-lamborghinilamborghinilamborghini-automobilelamborghini-carssports-car-1701527505296g4gdl.png",
            "https://purepng.com/public/uploads/large/purepng.com-alfa-romeo-car-logologocar-brand-logosalfaromeo-1701527427995a1sth.png",
            "https://purepng.com/public/uploads/large/purepng.com-jaguar-car-logologocar-brand-logoscarsjaguar-car-logo-1701527428194ju6al.png"
        ],
        [
            "https://purepng.com/public/uploads/large/purepng.com-honda-car-logologocar-brand-logoscarshonda-car-logo-1701527428101lhn2z.png",
            "https://purepng.com/public/uploads/large/purepng.com-chevrolet-car-logologocar-brand-logoscarschevrolet-car-logo-17015274281233ju5a.png",
            "https://purepng.com/public/uploads/large/purepng.com-nissan-car-logologocar-brand-logoscarsnissan-car-logo-1701527428763eoz9z.png",
            "https://purepng.com/public/uploads/large/purepng.com-chevrolet-car-logologocar-brand-logoscarschevrolet-car-logo-1701527428146le9xj.png",
            "https://purepng.com/public/uploads/large/purepng.com-mazda-car-logologocar-brand-logoscarsmazda-car-logo-1701527428428lf8zo.png",
            "https://purepng.com/public/uploads/large/purepng.com-mitsubishi-benz-car-logologocar-brand-logoscarsmitsubishi-benz-car-logo-1701527428675tgdon.png",
            "https://purepng.com/public/uploads/large/purepng.com-renault-car-logologocar-brand-logoscarsrenault-car-logo-1701527428836f7q1u.png",
            "https://purepng.com/public/uploads/large/purepng.com-skoda-car-logologocar-brand-logoscarsskoda-car-logo-1701527428920cnpp6.png",
            "https://purepng.com/public/uploads/large/purepng.com-toyota-car-logologocar-brand-logoscarstoyota-car-logo-1701527428948tj6m0.png",
            "https://purepng.com/public/uploads/large/purepng.com-subaru-car-logologocar-brand-logoscarssubaru-car-logo-1701527429058uzj6e.png",
            "https://purepng.com/public/uploads/large/purepng.com-volkswagen-car-logologocar-brand-logoscarsvolkswagen-car-logo-17015274290007mtte.png",


        ]
    ]
    return (
        <div className='mt-32 py-20 w-full relative'>
            {
                data.map((item, index) => {
                    return <Marquee key={index} ImageUrl={item} direction={index===0 ?'left':"right"}/>
                })
            }
        </div>
    )
}

export default Marquees
