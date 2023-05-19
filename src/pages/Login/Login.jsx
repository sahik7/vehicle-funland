import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VerificationContext } from '../../providers/AuthenticationProvider';


const Login = () => {
    const { loginGoogle } = useContext(VerificationContext)



    const manageUserLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        
    }


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
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white w-[29rem] h-[38rem] rounded-lg py-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mt-5">Login</h3>
                        <h5 className="text-light-aqua font-light mt-2">Please enter your details to login</h5>
                        <button onClick={loginGoogle} className="mx-auto mt-8 py-3 border border-gray-300 px-20 rounded-lg font-semibold flex items-center btn-animation"> <img className="w-6 mr-4" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" /> Continue with Google</button>
                        <div className="py-6 flex justify-between items-center w-5/6 mx-auto">
                            <hr className='border-1 w-3/6' />
                            <p className="px-2">or</p>
                            <hr className='border-1 w-3/6' />
                        </div>
                        <form onSubmit={manageUserLogin} className='w-10/12 mx-auto space-y-6'>
                            <div>
                                <label className="block font-bold text-left ml-4 text-sm" htmlFor="email">E-Mail Address</label>
                                <input className='w-full border-gray-300 mt-2 py-3 border px-4 rounded-lg font-light text-sm' type="text" name="email" placeholder="email... " id="" />
                            </div>
                            <div className=''>
                                <label className='block text-left font-bold text-sm ml-4' htmlFor="password">Password</label>
                                <input className='w-full border-gray-300 mt-2 py-3 border px-4 rounded-lg font-light text-sm' type="password" name="Password" placeholder="password " id="" />
                            </div>
                            <input className='w-full bg-black text-white mt-2 py-3 border px-4 rounded-lg font-bold hover:bg-slate-800 btn-animation' type="submit" value="login" />
                        </form>
                        <p className='text-gray-400 text-sm mt-4'>Don't have any account ? <Link className='text-black' to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;