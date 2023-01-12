import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext';

const Navbar = () => {

    const { user } = UserAuth()
    console.log(user)

    return (

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to='/' className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap">DevNote</span>
                </Link>
                {!user ?
                    <div className="flex items-center md:order-2">
                    <Link to='/signin'>
                        Sign in
                    </Link>
                    </div>
                    : 
                    <div className="flex items-center md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <img className="w-8 h-8 rounded-full" src={user.photoURL} alt="user" />
                        </button>
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow" id="user-dropdown">
                            <ul className="py-1" aria-labelledby="user-menu-button">
                                <li>
                                    <Link to='' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to='' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                                </li>
                                <li>
                                    <Link to='' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                }
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <Link to='/' className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to={
                                !user ? '/signin' :
                                `/projects/user?:${user.uid}`} 
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Projects</Link>
                        </li>
                        <li>
                            <Link to='/about' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</Link>
                        </li>
                        <li>
                            <Link to='' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
