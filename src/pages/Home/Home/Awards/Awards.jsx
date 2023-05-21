import React from 'react';

const Awards = () => {
    return (
        <div>
            <div className="border rounded py-8">
                <h1 className='text-3xl font-bold mx-auto border-b-4 pb-4 w-1/5 border-b-secondary'>Our Awards</h1>
                <div className='flex  w-3/4 mx-auto my-10 justify-between'>
                    <div><img className='w-28' src="https://i.ibb.co/8PZTnBD/award3.jpg" alt="" /><p className='text-gray-400 text-center mt-4'>Parents & Child</p></div>
                    <div><img className='w-36' src="https://i.ibb.co/kDdHsWq/award2.jpg" alt="" /><p className='text-gray-400 text-center mt-4'>Best Toys</p></div>
                    <div><img className='w-36' src="https://i.ibb.co/smHptvz/award1.jpg" alt="" /><p className='text-gray-400 text-center mt-4'>TOTY</p></div>
                    <div><img className='w-28' src="https://i.ibb.co/J36pG26/award4.jpg" alt="" /><p className='text-gray-400 text-center mt-4'>Toy Mendous</p></div>
                </div>
            </div>
        </div>
    );
};

export default Awards;