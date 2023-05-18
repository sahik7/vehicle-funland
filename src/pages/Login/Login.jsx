import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="relative border-4 border-primary grid grid-cols-10">
                <div className="col-span-4 relative">
                    <img src="https://i.ibb.co/9Tq2QPc/login-banner.png" alt="" />
                    <img className="absolute top-10 right-44" src="https://i.ibb.co/bbhr2mV/logo.png" alt="" />
                </div>
                <div className="col-span-6 border-2 border-blue-600 flex justify-end">
                    <img  src="https://i.ibb.co/BtL0cqY/login-banner-design.png" alt="" />
                </div>
                <div className=" border-pink-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white w-[29rem] h-[36rem]">
                    <div className="py-8">
                    <h3 className="text-2xl font-bold text-center mt-5">Login</h3>
                    <h5 className="text-light-aqua font-light text-center mt-2">Please enter your details to login</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;