import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { VerificationContext } from '../../providers/AuthenticationProvider';


const Login = () => {
    const { loginGoogle, EmailPasswordLogin } = useContext(VerificationContext)
    const [customErrMessage, setCustomErrMessage] = useState("");
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/home';



    const manageUserLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        EmailPasswordLogin(email, password)
        .then(() => {
            navigate(from, { replace: true })
        })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/user-not-found':
                        setCustomErrMessage('User not found. Please Register')
                        break;
                    case 'auth/invalid-email':
                        setCustomErrMessage('Invalid email address.');
                        break;
                    case 'auth/wrong-password':
                        setCustomErrMessage('Wrong Password.')
                        break;
                }
            });

    }


    const manageGoogleLogin = () => {
        loginGoogle()
        .then(() => {
            navigate(from, { replace: true })
        })
    }


    return (
        <div>
            <div className="relative">
                <div className="flex justify-end">
                    <img src="https://i.ibb.co/GnYMw7v/login-banner-design.png" alt="" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 shadow-lg bg-white w-[29rem] h-[38rem] rounded-lg py-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mt-5">Login</h3>
                        <h5 className="text-light-aqua font-light mt-2">Please enter your details to login</h5>
                        <button onClick={manageGoogleLogin} className="mx-auto mt-8 py-3 border border-gray-300 px-20 rounded-lg font-semibold flex items-center btn-animation"> <img className="w-6 mr-4" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" /> Continue with Google</button>
                        <div className="py-6 flex justify-between items-center w-5/6 mx-auto">
                            <hr className='border-1 w-3/6' />
                            <p className="px-2">or</p>
                            <hr className='border-1 w-3/6' />
                        </div>
                        <form onSubmit={manageUserLogin} className='w-10/12 mx-auto space-y-6'>
                            <div>
                                <label className="block font-bold text-left ml-4 text-sm" htmlFor="email">E-Mail Address</label>
                                <input className='w-full border-gray-300 mt-2 py-3 border px-4 rounded-lg font-light text-sm' type="text" name="email" placeholder="email... " id="" required />
                            </div>
                            <div className=''>
                                <label className='block text-left font-bold text-sm ml-4' htmlFor="password">Password</label>
                                <input className='w-full border-gray-300 mt-2 py-3 border px-4 rounded-lg font-light text-sm' type="password" name="password" placeholder="password " id="" required />
                                {/* Error Message */}
                                <p className="mt-2 text-primary text-start text-sm">{customErrMessage}</p>
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