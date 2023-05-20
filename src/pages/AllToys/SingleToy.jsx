import React from 'react';

const SingleToy = ({vehicle}) => {
    const {Image, Seller} = vehicle;
    return (
        <div>
            <div className="border-4 border-black single-product-container grid grid-cols-6">
            <div className="col-span-3">
            <img className="w-2/5 mx-auto" src={Image} alt="" />
            </div>
            <div className="border col-span-3">
                <h4 className='font-light'>{Seller}</h4>
            </div>
            </div>
        </div>
    );
};

export default SingleToy;