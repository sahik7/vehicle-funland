import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { default as Ratings } from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    const { Image, Seller, ToyName, Price, Rating, Details } = useLoaderData()
    return (
        <div className="my-32 w-9/12 mx-auto">
            <div className="flex justify-between">
                <div className="border-4 w-1/2 border-black p-6 m-4 single-product-container">
                    <h1 className="text-xl font-semibold text-secondary">{Seller}</h1>
                    <h2 className="text-4xl  font-bold py-2">{ToyName}</h2>
                    <Ratings
                        placeholderRating={Rating}
                        emptySymbol={<FaRegStar className='text-gray-200' />}
                        readonly
                        fullSymbol={<FaStar />}
                        placeholderSymbol={<FaStar className='text-secondary' />}
                    />
                    <div className="flex items-center space-x-3 ">
                        <p className="text-black font-bold text-xl">Starting At: </p>
                        <h3 className="text-3xl py-2 text-primary">${Price}</h3>
                    </div>
                    <div>
                        <p className="border-b-2 border-b-light-aqua text-light-aqua mt-8 w-1/6">Details</p>
                        <p className="text-light text-gray-600 mt-4">{Details}</p>
                    </div>
                </div>
                <div className="flex border-4 w-1/2 m-4 single-product-container border-black justify-center items-center">
                <img className="" src={Image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;