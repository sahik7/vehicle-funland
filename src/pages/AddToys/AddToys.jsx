import React from 'react';

const AddToys = () => {
    return (
        <div className='border-2 border-black w-9/12 mx-auto p-8 single-product-container my-20'>
            <div className='grid grid-cols-10'>
                <div className='col-span-8'>
                    <form className='w-2/3 space-y-8'>
                        <div className='flex w-full justify-between'>
                            {/* Name */}
                            <input className='rounded-sm border py-2 px-5 border-black' type="text" name="name" id="" placeholder='name' />
                            {/* Picture */}
                            <input className='rounded-sm border py-2 px-5 border-black' type="text" name="photoUrl" id="" placeholder='photo Url' />
                        </div>
                        {/* Seller Name */}
                        <input className="block py-2 px-5 border border-black w-full" type="text" name="sellerName" id="" placeholder='seller Name' />
                        {/* Seller Email */}
                        <input className="block py-2 px-5 border border-black w-full" type="email" name="sellerEmail" id="" placeholder='seller Email' />
                        <div  className="flex w-full justify-between">
                            {/* Sub-Category */}
                            <input className='rounded-sm border py-2 px-5 border-black' type="text" name="subCategory" id="" placeholder='sub Category' />
                            {/* Price */}
                            <input className='rounded-sm border py-2 px-5 border-black' type="text" name="price" id="" placeholder='price' />
                        </div>
                        <div  className="flex w-full justify-between">
                            {/* Rating */}
                            <input className='rounded-sm border py-2 px-5 border-black' type="text" name="rating" id="" placeholder='rating' />
                            {/* Available Quantity */}
                            <input className='rounded-sm border py-2 px-5 border-black' type="text" name="availableQuantity" id="" placeholder='availableQuantity' />
                        </div>
                            <textarea className='rounded-sm resize-none w-full h-32 border border-black' name="details"/>
                            <div className='w-full flex justify-end'>
                            <input className='bg-black text-white px-5 py-2' type="submit" value="Add Products" />
                            </div>
                    </form>
                </div>
                <div className='col-span-2'>
<img src="https://i.ibb.co/pLL7bX2/add-products-banner.jpg" alt="" />
                </div>
            </div>
            <h1>Add toys</h1>
        </div>
    );
};

export default AddToys;