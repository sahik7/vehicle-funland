import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const UpdateData = () => {
    const location = useLocation();
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState("")
    const [updateData, setUpdateData] = useState({
        Price: '',
        AvailableQuantity: '',
        Details: ''
    });

    const id = location.state.id;
    console.log(id)


    // handle Change
    const handleChange = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };


    // handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!updateData.Price || !updateData.AvailableQuantity || !updateData.Details
        ) {
            setErrorMessage('Please fill in all the required fields');
            return;
        }
        try {
            const res = await fetch(`https://vehicle-funland-server.vercel.app/vehicles/vehicles/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateData)
            }).then(response => response.json()).then(data => {
                setSuccessMessage('Toy added successfully !!');
                // Reset form data
                setUpdateData({
                    Price: '',
                    AvailableQuantity: '',
                    Details: ''
                });
                setErrorMessage('');
            })

        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.');
            setSuccessMessage("")
        }


    }

    return (
        <div className='border-2 border-black w-9/12 mx-auto p-8 single-product-container my-20'>
            <h1 className=' mb-10 text-3xl font-bold'>Update Toy Information</h1>
            <div className='grid grid-cols-10'>
                <div className='col-span-8'>
                    <form className='w-2/3 space-y-8' onSubmit={handleSubmit}>
                        <div className='flex w-full justify-between'>
                            {/* Price */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='Price'
                                placeholder='Price'
                                value={updateData.Price}
                                onChange={handleChange}
                            />

                            {/* Available Quantity */}
                            <input
                                className='rounded-sm border py-2 px-5 border-black'
                                type='text'
                                name='AvailableQuantity'
                                placeholder='AvailableQuantity'
                                value={updateData.AvailableQuantity}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Details */}
                        <textarea
                            className='rounded-sm resize-none w-full h-32 border border-black p-4'
                            name='Details'
                            placeholder='Details...'
                            value={updateData.Details}
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
                    <img className='img-responsive'
                        src='https://i.ibb.co/pLL7bX2/add-products-banner.jpg'
                        alt=''
                    />
                </div>
            </div>

        </div>
    );
};

export default UpdateData;