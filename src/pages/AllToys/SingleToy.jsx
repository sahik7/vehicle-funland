import React from 'react';

const SingleToy = ({ vehicle }) => {
    const { Image, Seller, ToyName, AvailableQuantity, Price } = vehicle;
    return (
        <div>
            <div className="border-black border-4 single-product-container">
                <div className="grid grid-cols-8">
                    <div className="col-span-3">
                        <img className="" src="for-test.jpg" alt="" />
                    </div>
                    <div className=" col-span-5 p-4">
                        <h4 className='font-semibold text-sm text-secondary'>{Seller}</h4>
                        <h2 className='font-bold text-xl py-2'>{ToyName}</h2>
                        <h2 className=' text-xl py-2'></h2>
                    </div>
                </div>
                <div className='h-12 grid grid-cols-6'>
                    {/* View Details */}
                    <div className=' flex justify-center border items-center col-span-4'>
                        <button className='font-bold w-full h-full bg-black text-white'>View Details</button>
                    </div>
                    {/* Price */}
                    <div className=' col-span-2 flex justify-center items-center'>
                        <p className='font-bold px-12 py-2 '>{Price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;