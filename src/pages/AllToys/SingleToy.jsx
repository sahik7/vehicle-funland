import React from 'react';

const SingleToy = ({vehicle}) => {
    const {Image} = vehicle;
    console.log(vehicle);
    return (
        <div>
            <div className="border-4 border-black single-product-container">
            <img className="w-1/2 mx-auto" src={Image} alt="" />
            </div>
        </div>
    );
};

export default SingleToy;