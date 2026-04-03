import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col w-1/3 justify-between bg-white'>
        <HeroText/>
        <Arrow/>
    </div>
  )
}

export default LeftContent