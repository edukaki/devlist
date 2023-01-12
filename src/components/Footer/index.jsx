import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/icons/logo.png'

const Footer = () => {
  return (
    	<footer className='bg-logoGray'>
            <img src={logo} alt="Devnote logo" />
            <ul className='pl-6 font-bold'>
                <li className='py-10 '><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <p className='text-center py-5'>© Copyright 2023. Made by Edu e Carol</p>
        </footer>
  )
}

export default Footer