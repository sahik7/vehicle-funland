import React, { useContext, useState } from 'react';
import { VerificationContext } from '../../providers/AuthenticationProvider';

const AddToys = () => {
    const { user } = useContext(VerificationContext)
    const [errorMessage, setErrorMessage] = useState('');
    const [toyData, setToyData] = useState({
        name: '',
        photoUrl: '',
        sellerName: user?.displayName || '',
        sellerEmail: user?.email || '',
        subCategory: '',
        price: '',
        rating: '',
        availableQuantity: '',
        details: ''
    });


    // handle Change
    const handleChange = (e) => {
        setToyData({ ...toyData, [e.target.name]: e.target.value });
    };


    // handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!toyData.name || !toyData.photoUrl || !toyData.subCategory || !toyData.price || !toyData.rating || !toyData.availableQuantity || !toyData.details
        ) {
            setErrorMessageMessage('Please fill in all the required fields');
            return;
        }
        try {
            const res = await fetch('http://localhost:5000/vehicles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(toyData)
            });

            if (res.ok) {
                // Successful submission
                console.log('Toy added successfully');
                // Reset form data
                setToyData({
                    name: '',
                    photoUrl: '',
                    sellerName: user?.displayName || '',
                    sellerEmail: user?.email || '',
                    subCategory: '',
                    price: '',
                    rating: '',
                    availableQuantity: '',
                    details: ''
                });
                setErrorMessage('');
            } else {
                // Error occurred
                console.log('Failed to add toy');
                setErrorMessage('Failed to add toy. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.');
        }


    }

    return (
        <div className='border-2 border-black w-9/12 mx-auto p-8 single-product-container my-20'>
            <div className='grid grid-cols-10'>
                <div className='col-span-8'>
                    <form className='w-2/3 space-y-8' onSubmit={handleSubmit}>
                        <div className='flex w-full justify-between'>
                            {/* Name */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='name'
                                placeholder='name'
                                value={toyData.name}
                                onChange={handleChange}
                            />
                            {/* Picture */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='photoUrl'
                                placeholder='photo Url'
                                value={toyData.photoUrl}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Seller Name */}
                        <input
                            className='block py-2 px-5 border border-black w-full'
                            type='text'
                            name='sellerName'
                            placeholder='seller Name'
                            value={toyData.sellerName}
                            onChange={handleChange}
                        />
                        {/* Seller Email */}
                        <input
                            className='block py-2 px-5 border border-black w-full'
                            type='email'
                            name='sellerEmail'
                            placeholder='seller Email'
                            value={toyData.sellerEmail}
                            onChange={handleChange}
                        />
                        <div className='flex w-full justify-between'>
                            {/* Sub-Category */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='subCategory'
                                placeholder='sub Category'
                                value={toyData.subCategory}
                                onChange={handleChange}
                            />
                            {/* Price */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='price'
                                placeholder='price'
                                value={toyData.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex w-full justify-between'>
                            {/* Rating */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='rating'
                                placeholder='rating'
                                value={toyData.rating}
                                onChange={handleChange}
                            />
                            {/* Available Quantity */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='availableQuantity'
                                placeholder='availableQuantity'
                                value={toyData.availableQuantity}
                                onChange={handleChange}
                            />
                        </div>
                        <textarea
                            className='rounded-sm resize-none w-full h-32 border border-black'
                            name='details'
                            value={toyData.details}
                            onChange={handleChange}
                        />
                        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                        <div className='w-full flex justify-end'>
                            <input
                                className='bg-black text-white px-5 py-2'
                                type='submit'
                                value='Add Products'
                            />
                        </div>
                    </form>
                </div>
                <div className='col-span-2'>
                    <img
                        src='https://i.ibb.co/pLL7bX2/add-products-banner.jpg'
                        alt=''
                    />
                </div>
            </div>
            <h1>Add toys</h1>
        </div>
    );
};

export default AddToys;