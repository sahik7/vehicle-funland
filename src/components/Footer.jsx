import React from 'react';
import { FaPhoneAlt, FaMailBulk, FaLocationArrow, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="text-white bg-[url('https://i.ibb.co/Z1wMSnc/footer-banner.png')] bg-no-repeat bg-cover border">

                <div className='relative w-10/12 mx-auto lg:flex lg:justify-center lg:items-start py-28'>
                    {/* Logo */}
                    <div className='lg:absolute left-0 top-14'>
                        <img src="https://i.ibb.co/Dgwh1H2/footer-logo.png" alt="" />
                        {/* Social Media */}
                        <div className='flex lg:justify-evenly lg:space-x-0 space-x-4 w-1/4 lg:w-4/5 mt-10 lg:ml-0 ml-4'>
                            <Link className=' text-2xl'><FaInstagram /></Link>
                            <Link className=' text-2xl'><FaTwitter /></Link>
                            <Link className=' text-2xl'><FaFacebook /></Link>
                        </div>
                    </div>





                    <div className='lg:mt-0 mt-20 lg:ml-0 ml-4'>
                        {/* Useful Links */}
                        <h1 className='text-2xl font-semibold mb-5 lg:ml-40'>Useful Links</h1>
                        <hr className='py-2 w-1/4 border-primary lg:ml-40' />
                        <div className='flex'>
                            <div className='text-sm  space-y-2 font-light lg:ml-40'>
                                <Link to="/allToys" className='flex items-center'>All Toys</Link>
                                <Link to="/myToys" className='flex items-center'>My Toys</Link>
                                <Link to="/addToy" className='flex items-center'>Add A Toys</Link>
                            </div>
                            <div className='text-sm  space-y-2 font-light lg:ml-20'>
                                <Link to="/home" className='flex items-center'>Home</Link>
                                <Link to="/blogs" className='flex items-center'>Blogs</Link>
                            </div>

                        </div>
                    </div>



                    {/* Contact Information */}
                    <div className='text-sm  space-y-2 font-light lg:ml-40 lg:mt-0 mt-20 ml-4'>
                        <h1 className='text-2xl font-semibold mb-5'>Contact Information</h1>
                        <hr className='py-2 w-1/3 border-primary' />
                        <p className='flex items-center'><FaMailBulk className='mr-2 w-3' />vehicle@funland.com</p>
                        <p className='flex items-center'><FaPhoneAlt className='mr-2 w-3' />123-456-7890</p>
                        <p className='flex items-center'><FaLocationArrow className='mr-2 w-3' />123 Main Street, City, State, Country</p>
                    </div>
                </div>
                <p className=' text-sm font-light text-center py-6'>&copy; 2023 VehicleLand. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;