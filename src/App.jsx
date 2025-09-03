import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cars from './Components/Cars'
import About from './Components/About'
import Contact from './Components/Contact'
import LoginSignup from './Components/LoginSignup'
import Cart from './Components/Cart'
import SingleProduct from './Components/SingleProduct'



function App() {
    return (
        <div className='w-full h-screen bg-[#0D0D0D] text-white font-["satoshi"]'>
            <div>
                <div>
                    <Navbar />
                </div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/cars' element={<Cars />} />
                    <Route path='/cars/:id' element={<SingleProduct />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<LoginSignup />} />
                    <Route path='/cart' element={<Cart />} />

                </Routes>
            </div>


        </div>
    )
}

export default App
