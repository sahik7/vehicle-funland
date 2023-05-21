import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { default as Ratings } from 'react-rating';
import { Link } from 'react-router-dom';

const SubCategoryItem = ({ vehicle,notify }) => {
    const { _id, ToyName, Rating, Price, Image } = vehicle;

    const toast = () => {
        notify()
    }
    return (
        <div>
            <div className="border-black border-4 h-[25rem] single-product-container flex flex-col justify-between">
                <div>
                    <div>
                        <img className="mx-auto w-1/2" src={Image} alt="" />
                    </div>
                    <div className=" col-span-4 p-4 flex flex-col justify-between ">
                        <div>
                            <h2 className='font-bold text-3xl py-2'>{ToyName}</h2>
                        </div>
                        <div className='flex justify-between items-center space-x-3 mt-2'>
                            <p className='text-xl font-bold my-2 border-l-primary border-l-4 pl-4'>{Price}</p>
                            <div className='pr-4 flex space-x-2'>
                                <Ratings
                                    placeholderRating={Rating}
                                    emptySymbol={<FaRegStar className='text-gray-200' />}
                                    readonly
                                    fullSymbol={<FaStar />}
                                    placeholderSymbol={<FaStar className='text-secondary' />}
                                />
                                <p className='text-sm text-gray-500'>&#40; {Rating} &#41;</p>
                            </div>

                        </div>

                    </div>
                </div>
                {/* View Details */}
                <Link onClick={toast} to={`/vehicles/${_id}`} className='font-bold text-center bg-black border-2 border-white py-2 text-white'><button >View Details</button></Link>

            </div>
        </div>
    );
};

export default SubCategoryItem;