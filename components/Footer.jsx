import React from 'react'
import Logo from '../assets/dd-logo.png'

const Footer = () => {
  return (
    <footer className='flex item-center justify-center border border-black'>
        <div className='w-screen bg-blue-100 flex justify-between align-center'>
            <img src={Logo} alt="" className='w-20 h-20' />
            <span className=''>Davis K. Dyer</span>
        </div>
    </footer>
  )
}

export default Footer