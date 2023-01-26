import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext';
import logo from '../../img/icons/logo.png'

const Navbar = () => {

    const { user, logOut } = UserAuth()
    const [avatarMenu, setAvatarMenu] = useState(false)
    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    console.log(user)

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <nav className="z-50 bg-white border-gray-200 px-2 w-full fixed sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to='/' className="flex items-center">
                    <img className='w-44' src={logo} alt="Devnote logo" />

                </Link>
                <div className='flex flex-row gap-5'>
                {!user ?
                    <div className="flex items-center md:order-2 text-base text-gray-700 font-bold hover:text-orange">
                        <Link to='/signin'>
                            Log In
                        </Link>
                    </div>
                    :
                    <div className="flex items-center md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-orange" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom"
                            onClick={() => {
                                setAvatarMenu(!avatarMenu)
                                setHamburgerMenu(false)
                            }}
                            onBlur={() => setAvatarMenu(false)}
                            >
                            <img className="w-8 h-8 rounded-full" src={user.photoURL} alt="user" />
                        </button>
                        <div className={`${avatarMenu ? '' : 'hidden'} z-50 flex flex-col absolute justify-between w-full top-11 left-0 my-4 text-center list-none bg-white divide-y divide-gray-100 rounded`} id="user-dropdown">
                            <ul className="py-1 text-base text-gray-700 font-bold">
                                <li>
                                    <Link to={
                                        !user ? '/signin' :
                                        `/dashboard/user?:${user.uid}`}
                                        className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to='/settings' className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                                </li>
                                <li>
                                    <div className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer"
                                        onClick={() => handleSignOut()}>Sign out</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
                <button type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange"
                    onClick={() => {
                        setHamburgerMenu(!hamburgerMenu)
                        setAvatarMenu(false)
                    }}
                    onBlur={() => setHamburgerMenu(false)}>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={`${hamburgerMenu ? '' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1 ${hamburgerMenu? 'absolute top-14 left-0 text-center  bg-white divide-y divide-gray-100 rounded' : ''}`}>
                    <ul className="flex flex-col p-4 mt-4 font-bold text-base md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <Link to='/' className="block py-2 pl-3 pr-4 hover:text-orange text-gray-700 md:p-0" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to={
                                !user ? '/signin' :
                                `/dashboard/user?:${user.uid}`}
                                className="block py-2 pl-3 pr-4 hover:text-orange text-gray-700 md:p-0">Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/about' className="block py-2 pl-3 pr-4 hover:text-orange text-gray-700 md:p-0">About</Link>
                        </li>
                        <li>
                            <Link to='/contact' className="block py-2 pl-3 pr-4 hover:text-orange text-gray-700 md:p-0">Contact</Link>
                        </li>
                        <li>
                            <Link to='/faq' className="block py-2 pl-3 pr-4 hover:text-orange text-gray-700 md:p-0">FAQ</Link>
                        </li>
                    </ul>
                                </div>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
