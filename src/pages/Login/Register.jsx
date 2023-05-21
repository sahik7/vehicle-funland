import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { VerificationContext } from '../../providers/AuthenticationProvider';
import DynamicTitle from '../../components/DynamicTitle';

const Register = () => {
    const { EmailPasswordRegister, setImageLinkAndName } = useContext(VerificationContext)
    const [customErrMessage, setCustomErrMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("")

    const manageUserRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const imageLink = e.target.imageLink.value;
        EmailPasswordRegister(email, password)
            .then(userData => {
                e.target.reset()
                setSuccessMessage("Register Successfully !!!")
                if (userData) {
                    setImageLinkAndName(name, imageLink)
                        .then(() => {
                        }).catch((error) => {
                            switch (error.code) {
                                case "auth/invalid-photo-url":
                                    setCustomErrMessage("Invalid photo URL provided. Please provide a valid URL.");
                                    break;
                                case "auth/user-token-expired":
                                    setCustomErrMessage("User token has expired. Please reauthenticate before updating the profile.");
                                    break;
                                case "auth/user-not-found":
                                    setCustomErrMessage("User not found. Please verify the user exists.");
                                    break;
                                case "auth/network-request-failed":
                                    setCustomErrMessage("A network error occurred while updating the profile. Please check your internet connection.");
                                    break;
                                case "auth/too-many-requests":
                                    setCustomErrMessage("Too many requests sent from this device. Please try again later.");
                                    break;
                                default:
                                    setCustomErrMessage("An error occurred during the profile update:", error);
                                    break;
                            }
                        });
                }
            })
            .catch(error => {
                setSuccessMessage("")
                switch (error.code) {
                    case 'auth/weak-password':
                        setCustomErrMessage('The password provided is too weak. Please choose a stronger password.');
                        break;
                    case 'auth/invalid-email':
                        setCustomErrMessage('The email address provided is invalid. Please enter a valid email address.');
                        break;
                    case 'auth/email-already-in-use':
                        setCustomErrMessage('The email address provided is already in use. Please try logging in instead.');
                        break;
                    default:
                        setCustomErrMessage('An error occurred during signup.');
                        break;
                }
            })
    }

    return (
        <div className='py-10'>
            <DynamicTitle title="Register"/>
            <div className="relative">
                <div className="flex justify-end">
                    <img src="https://i.ibb.co/GnYMw7v/login-banner-design.png" alt="" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg border border-gray-300 bg-white w-[29rem] h-[48rem] rounded-lg py-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mt-5">Register</h3>
                        <h5 className="text-light-aqua font-light mt-2">Please enter your details to register</h5>
                        <form onSubmit={manageUserRegister} className='w-10/12 mx-auto space-y-6 mt-10'>
                            {/* Name */}
                            <div>
                                <label className="block font-bold text-left ml-4 text-sm" htmlFor="name">Name</label>
                                <input className='w-full mt-2 py-3 border border-gray-300 px-4 rounded-lg font-light text-sm' type="text" name="name" placeholder="name" id="" />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block font-bold text-left ml-4 text-sm" htmlFor="email">E-Mail Address</label>
                                <input className='w-full mt-2 py-3 border border-gray-300 px-4 rounded-lg font-light text-sm' type="text" name="email" placeholder="email" id="" />
                            </div>
                            {/* Password */}
                            <div>
                                <label className='block text-left font-bold text-sm ml-4' htmlFor="password">Password</label>
                                <input className='w-full mt-2 py-3 border border-gray-300 px-4 rounded-lg font-light text-sm' type="password" name="password" placeholder="password " id="" />
                            </div>
                            {/* Photo URL */}
                            <div>
                                <label className='block text-left font-bold text-sm ml-4' htmlFor="imageLink">Photo URL</label>
                                <input className='w-full mt-2 py-3 border border-gray-300 px-4 rounded-lg font-light text-sm' type="text" name="imageLink" placeholder="photo URL " id="" />
                            </div>
                            {/* Error Message */}
                            <p className="mt-2 text-primary text-start text-sm">{customErrMessage}</p>
                            <p className="mt-2 text-green-600 text-start text-sm">{successMessage}</p>
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