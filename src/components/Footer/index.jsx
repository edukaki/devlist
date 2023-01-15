import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/icons/logo.png'

const Footer = () => {
  return (
    <footer className='bg-[#FFBD59] p-4'>

      <ul className='grid grid-flow-row font-bold text-lg md:grid-cols-4 2xl:grid-cols-6'>
        <li className='flex flex-row justify-between p-4 border-b md:border-none md:flex-col 2xl:col-start-2'>
          <Link to='/'>
            <img className='w-36' src={logo} alt="Devnote logo" />
          </Link>
          <Link><div>Log In</div></Link>
        </li>
        <li className='flex flex-col h-full p-4 border-b md:border-none md:hover:bg-slate-200/30'>
          <Link to='/about'>
            <div className='pb-2'>About</div>
            <div className='font-normal text-sm'>Get to know the masterminds and history behind DevNote</div>
          </Link>
        </li>
        <li className='flex flex-col h-full p-4 border-b md:border-none md:hover:bg-slate-200/30'>
          <Link to='/contact'>
            <div className='pb-2'>Contact us</div>
            <div className='font-normal text-sm'>Need anything? Send us a message!</div>
          </Link>
        </li>
        <li className='flex flex-col h-full p-4 border-b md:border-none md:hover:bg-slate-200/30'>
          <Link to='/faq'>
            <div className='pb-2'>FAQ</div>
            <div className='font-normal text-sm'>Your questions answered</div>
          </Link>
        </li>
      </ul>
      <p className='text-sm text-center py-5'>© Copyright 2023. Made by Edu e Carol</p>
    </footer>
  )
}

export default Footer