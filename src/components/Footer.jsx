import React from 'react';
import { FaPhoneAlt,FaMailBulk, FaLocationArrow,FaInstagram,FaTwitter,FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/Z1wMSnc/footer-banner.png')] bg-no-repeat bg-cover border">

                <div className='relative w-11/12 mx-auto flex justify-center items-start py-28'>
                    <div className='absolute left-0 top-10'>
                        <img src="https://i.ibb.co/Dgwh1H2/footer-logo.png" alt="" />
                        <div className='flex justify-evenly w-4/5 mt-10'>
                            <Link className='text-white text-2xl'><FaInstagram/></Link>
                            <Link className='text-white text-2xl'><FaTwitter/></Link>
                            <Link className='text-white text-2xl'><FaFacebook/></Link>
                        </div>
                    </div>
                    <div className='text-sm text-white space-y-2 font-light ml-40'>
                        <Link to="/home" className='flex items-center'>Home</Link>
                        <Link to="/blogs" className='flex items-center'>Blogs</Link>
                    </div>
                    <div className='text-sm text-white space-y-2 font-light ml-40'>
                        <Link to="/allToys" className='flex items-center'>All Toys</Link>
                        <Link to="/myToys" className='flex items-center'>My Toys</Link>
                        <Link to="/addToy" className='flex items-center'>Add A Toys</Link>
                    </div>
                    <div className='text-sm text-white space-y-2 font-light ml-40'>
                        <p className='flex items-center'><FaMailBulk className='mr-2 w-3' />vehicle@funland.com</p>
                        <p className='flex items-center'><FaPhoneAlt className='mr-2 w-3' />123-456-7890</p>
                        <p className='flex items-center'><FaLocationArrow className='mr-2 w-3' />123 Main Street, City, State, Country</p>
                    </div>
                </div>
            <p className='text-white text-sm font-light text-center py-6'>&copy; 2023 VehicleLand. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;