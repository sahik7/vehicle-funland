import React from 'react';

const SingleToy = ({ vehicle }) => {
    const { Image, Seller, ToyName, AvailableQuantity, Price, SubCategory } = vehicle;

    console.log(vehicle)
    return (
        <div>
            <div className="border-black border-4 h-[21rem] single-product-container flex flex-col justify-between">
                <div className="grid grid-cols-8">
                    <div className="col-span-4">
                        <img className="" src="for-test.jpg" alt="" />
                    </div>
                    <div className=" col-span-4 p-4 flex flex-col justify-between ">
                        <div>
                        <h2 className='font-bold text-2xl py-2'>{ToyName}</h2>
                        <h4 className='font-medium text-sm text-secondary mt-2'>{Seller}</h4>
                            <p className='mt-4 font-light text-sm'>In Stock -  {AvailableQuantity}</p>
                        </div>
                        <div className='flex items-center space-x-3'><p className='font-bold text-'>Category</p>
                            <p className='bg-red-100 my-2 text-center text-[13px] py-1 w-[45%] text-primary'>{SubCategory}</p>
                        </div>
                    </div>
                </div>
                <div className='h-12 mt-8 grid grid-cols-6'>
                    {/* View Details */}
                    <div className=' flex justify-center border-4 border-white items-center col-span-4'>
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