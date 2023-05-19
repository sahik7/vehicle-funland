import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="relative grid grid-cols-10">
                <div className="col-span-4 relative">
                    <img src="https://i.ibb.co/9Tq2QPc/login-banner.png" alt="" />
                    <img className="absolute top-10 right-44" src="https://i.ibb.co/bbhr2mV/logo.png" alt="" />
                </div>
                <div className="col-span-6 flex justify-end">
                    <img src="https://i.ibb.co/BtL0cqY/login-banner-design.png" alt="" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg border border-gray-300 bg-white w-[29rem] h-[45rem] rounded-lg py-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mt-5">Register</h3>
                        <h5 className="text-light-aqua font-light mt-2">Please enter your details to register</h5>
                        <form className='w-10/12 mx-auto space-y-6 mt-10'>
                            {/* Name */}
                            <div>
                                <label className="block font-bold text-left ml-4 text-sm" htmlFor="name">Name</label>
                                <input className='w-full mt-2 py-3 border border-gray-300 px-4 rounded-lg font-light text-sm' type="text" name="name" placeholder="name... " id="" />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block font-bold text-left ml-4 text-sm" htmlFor="email">E-Mail Address</label>
                                <input className='w-full mt-2 py-3 border border-gray-300 px-4 rounded-lg font-light text-sm' type="text" name="email" placeholder="email... " id="" />
                            </div>
                            {/* Password */}
                            <div>
                                <label className='block text-left font-bold text-sm ml-4' htmlFor="password">Password</label>
                                <input className='w-full mt-2 py-3 border border-gray-300 px-4 rounded-lg font-light text-sm' type="password" name="Password" placeholder="password " id="" />
                            </div>
                            {/* Photo URL */}
                            <div>
                                <label className='block text-left font-bold text-sm ml-4' htmlFor="photo">Photo URL</label>
                                <input className='w-full mt-2 py-3 border border-gray-300 px-4 rounded-lg font-light text-sm' type="text" name="photo" placeholder="photo URL " id="" />
                            </div>
                            <input className='w-full bg-black text-white mt-2 py-3 border px-4 rounded-lg font-bold hover:bg-slate-800 btn-animation' type="submit" value="register" />
                        </form>
                        <p className='text-gray-400 text-sm mt-4'>Already have an account ? <Link className='text-black' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;