import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <div className='border border-blue-600'>
            <div className="flex w-3/4 mx-auto justify-between items-center">
                {/* Navbar routes */}
                <div className="space-x-4">
                    <NavLink to="/home" className={`text-blue-500 font-bold ${location.pathname === '/home' ? 'text-red-500' : ''}`}>Home</NavLink>
                    <NavLink to="/allToys" className={`text-blue-500 font-bold ${location.pathname === '/allToys' ? 'text-red-500' : ''}`}>All Toys</NavLink>
                    <NavLink to="/myToys" className={`text-blue-500 font-bold ${location.pathname === '/myToys' ? 'text-red-500' : ''}`}>My Toys</NavLink>
                    <NavLink to="/addToy" className={`text-blue-500 font-bold ${location.pathname === '/addToy' ? 'text-red-500' : ''}`}>Add A Toy</NavLink>
                    <NavLink to="/blogs" className={`text-blue-500 font-bold ${location.pathname === '/blogs' ? 'text-red-500' : ''}`}>Blogs</NavLink>
                </div>
                <img src="https://i.ibb.co/bbhr2mV/logo.png" alt="" />
            </div>
        </div >
    );
};

export default Navbar;