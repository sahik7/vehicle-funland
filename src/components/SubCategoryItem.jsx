import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const SubCategoryItem = ({ vehicle }) => {
    const { ToyName, AvailableQuantity, Price } = vehicle;
    return (
        <div>
            <div className="border-black border-4 h-[25rem] single-product-container flex flex-col justify-between">
                <div>
                    <div>
                        <img className="mx-auto w-1/2" src="for-test.jpg" alt="" />
                    </div>
                    <div className=" col-span-4 p-4 flex flex-col justify-between ">
                        <div>
                            <h2 className='font-bold text-3xl py-2'>{ToyName}</h2>
                        </div>
                        <div className='flex justify-between items-center space-x-3 mt-2'>
                            <p className='text-xl font-bold my-2 border-l-primary border-l-4 pl-4'>{Price}</p>
                            <div className='pr-4 flex space-x-2'>
                                <Rating
                                    placeholderRating={3.5}
                                    emptySymbol={<FaRegStar className='text-gray-200' />}
                                    readonly
                                    fullSymbol={<FaStar />}
                                    placeholderSymbol={<FaStar className='text-secondary' />}
                                />
                                <p className='text-sm text-gray-500'>&#40; 3.5 &#41;</p>
                            </div>

                        </div>

                    </div>
                </div>
                {/* View Details */}
                <button className='font-bold bg-black border-2 border-white py-2 text-white'>View Details</button>

            </div>
        </div>
    );
};

export default SubCategoryItem;