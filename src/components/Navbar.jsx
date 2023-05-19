import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaAlignCenter } from "react-icons/fa";
import { VerificationContext } from '../providers/AuthenticationProvider';


const Navbar = () => {
    const { user, logout } = useContext(VerificationContext)
    const location = useLocation();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    console.log(user);


    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className='my-6'>
            <div className="relative flex lg:flex-row lg:justify-between lg:w-9/12 w-5/6 mx-auto justify-stretch items-center">
                {/* Dropdown menu */}
                <div className="lg:hidden">
                    <button
                        className="focus:outline-none"
                        onClick={toggleDropdown}
                    ><FaAlignCenter /></button>
                    {/* Dropdown items */}
                </div>
                <div className={`absolute right-0 text-center top-20 mt-2 w-full border bg-white rounded-md lg:hidden shadow-lg space-y-1 ${isDropdownOpen ? "block" : "hidden"}`}>
                    <NavLink to="/home" className={` bg-light-aqua  block px-4 py-2 ${location.pathname === '/home' ? 'text-white' : ''}`}>Home</NavLink>
                    <NavLink to="/allToys" className={` bg-light-aqua  block px-4 py-2 ${location.pathname === '/allToys' ? 'text-white' : ''}`}>All Toys</NavLink>
                    <NavLink to="/myToys" className={` bg-light-aqua  block px-4 py-2 ${location.pathname === '/myToys' ? 'text-white' : ''}`}>My Toys</NavLink>
                    <NavLink
                        to="/addToy"
                        className={` bg-light-aqua block px-4 py-2 ${location.pathname === '/addToy' ? 'text-white' : ''}`}
                    >
                        Add A Toy
                    </NavLink>
                    <NavLink
                        to="/blogs"
                        className={` bg-light-aqua block px-4 py-2 ${location.pathname === '/blogs' ? 'text-white' : ''}`}
                    >
                        Blogs
                    </NavLink>

                    <div
                        className='hidden'
                    >
                        <NavLink
                            to="/myToys"
                            className={`block px-4 py-2 ${location.pathname === '/myToys' ? 'text-secondary' : ''}`}
                        >
                            My Toys
                        </NavLink>
                        <NavLink
                            to="/addToy"
                            className={`block px-4 py-2 ${location.pathname === '/addToy' ? 'text-secondary' : ''}`}
                        >
                            Add A Toy
                        </NavLink>
                    </div>
                </div>
                {/* Navbar routes */}
                <div className="space-x-8 lg:flex hidden" >
                    <NavLink to="/home" className={location.pathname === '/home' ? 'text-secondary' : ''}>Home</NavLink>
                    <NavLink to="/allToys" className={location.pathname === '/allToys' ? 'text-secondary' : ''}>All Toys</NavLink>
                    <NavLink to="/blogs" className={location.pathname === '/blogs' ? 'text-secondary' : ''}>Blogs</NavLink>
                </div>
                {/* logo */}
                <img className='mx-auto' src="https://i.ibb.co/QkZHLdW/logo.png" alt="" />
                {user ? <><div className="space-x-8 lg:flex lg:items-center hidden">
                    <NavLink to="/myToys" className={location.pathname === '/myToys' ? 'text-secondary' : ''}>My Toys</NavLink>
                    <NavLink to="/addToy" className={location.pathname === '/addToy' ? 'text-secondary' : ''}>Add A Toy</NavLink>
                    <button onClick={logout} className='py-2 px-2 text-sm bg-primary text-white'>Logout</button>
                </div>
                    <img className='lg:ml-8 w-9 rounded-full' src={user.photoURL} alt="" />
                </> : <button>Login</button>}
            </div>
        </div >
    );
};

export default Navbar;