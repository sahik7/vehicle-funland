import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/yk2Ctxj/home-banner.png')] bg-no-repeat bg-cover flex justify-center items-center h-[35rem] mb-32">
                <div className='text-center '>
                    <h2 className="text-6xl w-3/4 font-extrabold mx-auto">Explore the Thrilling
                        World of  Vehicle Toys!</h2>
                    <div className="relative group w-1/4 mx-auto mt-32">
                        <div className='absolute left-9 -bottom-3 duration-300 group-hover:left-8 group-hover:-bottom-4 border-black py-3 px-8 border-4 bg-white text-white'>Let's Shop</div>
                        <button onClick={() => navigate("/allToys")} className='py-3 absolute group-hover:-top-12 group-hover:left-12 -top-10 left-10 px-8 bg-black text-white font-semibold duration-300 
                    '> Let's Shop</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;