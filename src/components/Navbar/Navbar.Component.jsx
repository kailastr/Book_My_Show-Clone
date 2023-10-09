import React from 'react'
//import icons required
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi"

//NavBar for small screen
function NavSm() {
    return (
        <>
            <div className='text-white flex items-center justify-between'>
                <div>
                    <h3 className='text-xl font-bold'>
                        It All Starts Here !!
                    </h3>
                    <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-white'>
                        Kochi <BiChevronDown />
                    </span>
                </div>
                <div className='h-8 w-8'>
                    <BiSearch className='w-full h-full' />
                </div>
            </div>
        </>
    )
}

//NavBar for medium screen
function NavMd() {
    return (
        <>
            <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
                <BiSearch />
                <input
                    type="search"
                    className='w-full bg-transparent border-none focus:outline-none'
                    placeholder='Search for movies, events, plays, sports and activities'
                />
            </div>
        </>
    )
}

//NavBar for large screen
function NavLg() {
    return (
        <>
            <div className='container flex mx-auto px-4 items-center justify-between'>
                <div className='flex items-center w-1/2 gap-3'>
                    <div className='w-10 h-10'>
                        <img
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="BookMyShow Logo"
                            className='w-full h-full'
                        />
                    </div>
                    <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
                        <BiSearch />
                        <input
                            type="search"
                            className='w-full bg-transparent border-none focus:outline-none'
                            placeholder='Search for movies, events, plays, sports and activities'
                        />
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <span className='text-gray-200 text-base flex items-center cursor-pointer hover:text-white'>
                        Kochi<BiChevronDown />
                    </span>
                    <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>
                        Sign In
                    </button>
                    <div className='w-8 h-8 text-white'>
                        <BiMenu className='w-full h-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

//main component
const Navbar = () => {
    return (
        <nav className='bg-darkBackground-700 px-4 py-3'>
            {/* smaller screen */}
            <div className='md:hidden'>
                <NavSm />
            </div>

            {/* medium screen */}
            <div className='hidden md:flex lg:hidden'>
                <NavMd />
            </div>

            {/* large screen */}
            <div className=' hidden md:hidden lg:flex'>
                <NavLg />
            </div>
        </nav>
    )
}

export default Navbar