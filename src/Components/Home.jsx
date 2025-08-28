import React from 'react'
import Zoomo from './Zoomo'
import Stripes from './Stripes'
import Top from './Top'
import Marquees from './Marquees'

function Home() {
  return (
    <div className='w-full mt-10'>
      <Zoomo />
      <Stripes />
      <Top />
      <Marquees />
    </div>
  )
}

export default Home
