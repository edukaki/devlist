import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/icons/logo.png'

const Footer = () => {
  return (
    <footer className='bg-[#FFBD59]'>
      <img className='w-44 sm:w-64' src={logo} alt="Devnote logo" />
      <ul className='pl-6 font-bold text-base'>
        <li className='pt-7 pb-3'><Link to='/contact'>Home</Link></li>
        <li className='pb-3'><Link to='/dashboard'>Dashboard</Link></li>
        <li className='pb-3'><Link to='/about'>About</Link></li>
        <li className='pb-3'><Link to='/contact'>Contact</Link></li>
        <li className='pb-3'><Link to='/faq'>FAQ</Link></li>
      </ul>
      <p className='text-sm text-center py-5'>© Copyright 2023. Made by Edu e Carol</p>
    </footer>
  )
}

export default Footer