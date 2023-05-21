import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="mx-auto mt-10">
                <div className="text-center">
                    <img src="https://i.ibb.co/y43bwLN/lost.jpg" className="mx-auto" alt="" />
                    <h1 className="text-5xl font-bold">Lost Your Way?</h1>
                    <h3 className="text-xl my-3 text-secondary">go back to home</h3>
                    <div className="relative group w-1/4 mx-auto mt-32">
                        <div className='absolute -bottom-3 py-3 duration-300 group-hover:left-40 group-hover:-bottom-4 border-black
                        -translate-x-1/2 left-1/2 px-20 border-4 group-hover:bg-white bg-black text-white'>Home</div>
                        <button onClick={() => navigate("/home")} className='py-3 w-3/5 text-base absolute group-hover:-top-12 -top-10 -translate-x-1/2 left-1/2 px-8 bg-black text-white font-semibold duration-300 
                    '> Let's Shop</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;