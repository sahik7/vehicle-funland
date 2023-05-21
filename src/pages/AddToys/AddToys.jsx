import React, { useContext, useState } from 'react';
import { VerificationContext } from '../../providers/AuthenticationProvider';
import DynamicTitle from '../../components/DynamicTitle';

const AddToys = () => {
    const { user } = useContext(VerificationContext)
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState("")
    const [toyData, setToyData] = useState({
        ToyName: '',
        Image: '',
        Seller: user?.displayName || '',
        SellerEmail: user?.email || '',
        SubCategory: '',
        Price: '',
        Rating: '',
        AvailableQuantity: '',
        Details: ''
    });


    // handle Change
    const handleChange = (e) => {
        setToyData({ ...toyData, [e.target.name]: e.target.value });
    };


    // handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!toyData.ToyName || !toyData.Image || !toyData.SubCategory || !toyData.Price || !toyData.Rating || !toyData.AvailableQuantity || !toyData.Details
        ) {
            setErrorMessage('Please fill in all the required fields');
            return;
        }
        try {
            const res = await fetch('https://vehicle-funland-server.vercel.app/vehicles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(toyData)
            });

            if (res.ok) {
                // Successful submission
                setSuccessMessage('Toy added successfully');
                // Reset form data
                setToyData({
                    ToyName: '',
                    Image: '',
                    Seller: user?.displayName || '',
                    SellerEmail: user?.email || '',
                    SubCategory: '',
                    Price: '',
                    Rating: '',
                    AvailableQuantity: '',
                    Details: ''
                });
                setErrorMessage('');
            } else {
                // Error occurred
                console.log('Failed to add toy');
                setErrorMessage('Failed to add toy. Please try again.');
                setSuccessMessage("")
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.');
            setSuccessMessage("")
        }


    }

    return (
        <div className='border-2 border-black w-9/12 mx-auto p-8 single-product-container my-20'>
            <DynamicTitle title="Add A Toys"/>
            <h1 className=' mb-10 text-3xl font-bold'>Add toys</h1>
            <div className='grid grid-cols-10'>
                <div className='col-span-8'>
                    <form className='w-2/3 space-y-8' onSubmit={handleSubmit}>
                        <div className='flex w-full justify-between'>
                            {/* Name */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='ToyName'
                                placeholder='Toy Name'
                                value={toyData.ToyName}
                                onChange={handleChange}
                            />
                            {/* Picture */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='Image'
                                placeholder='photo Url'
                                value={toyData.Image}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Seller Name */}
                        <input
                            className='block py-2 px-5 border border-black w-full'
                            type='text'
                            name='Seller'
                            placeholder='Seller Name'
                            value={toyData.Seller}
                            onChange={handleChange}
                        />
                        {/* Seller Email */}
                        <input
                            className='block py-2 px-5 border border-black w-full'
                            type='Email'
                            name='SellerEmail'
                            placeholder='seller Email'
                            value={toyData.SellerEmail}
                            onChange={handleChange}
                        />
                        <div className='flex w-full justify-between'>
                            {/* Sub-Category */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='SubCategory'
                                placeholder='sub Category'
                                value={toyData.SubCategory}
                                onChange={handleChange}
                            />
                            {/* Price */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='Price'
                                placeholder='Price'
                                value={toyData.Price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex w-full justify-between'>
                            {/* Rating */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='Rating'
                                placeholder='Rating'
                                value={toyData.Rating}
                                onChange={handleChange}
                            />
                            {/* Available Quantity */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='AvailableQuantity'
                                placeholder='AvailableQuantity'
                                value={toyData.AvailableQuantity}
                                onChange={handleChange}
                            />
                        </div>
                        <textarea
                            className='rounded-sm resize-none w-full h-32 border border-black p-4'
                            name='Details'
                            placeholder='Details...'
                            value={toyData.Details}
                            onChange={handleChange}
                        />
                        {successMessage && <p className='text-green-500'>{successMessage}</p>}
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

        </div>
    );
};

export default AddToys;