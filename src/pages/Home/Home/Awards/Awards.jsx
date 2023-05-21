import React from 'react';

const Awards = () => {
    return (
        <div>
            <div className="border rounded py-8">
                <h1 className='text-3xl text-center font-bold mx-auto border-b-4 pb-4 lg:w-1/5 w-4/6 border-b-secondary'>Our Awards</h1>
                <div className='lg:flex  w-3/4 mx-auto my-10 justify-between'>
                    <div><img className='lg:w-28 lg:mx-none mx-auto' src="https://i.ibb.co/8PZTnBD/award3.jpg" alt="" /><p className='text-gray-400 text-center mt-4 mb-4 lg:mb-0'>Parents & Child</p></div>
                    <div><img className='lg:w-36 lg:mx-none mx-auto' src="https://i.ibb.co/kDdHsWq/award2.jpg" alt="" /><p className='text-gray-400 text-center mt-4 mb-4 lg:mb-0'>Best Toys</p></div>
                    <div><img className='lg:w-36 lg:mx-none mx-auto' src="https://i.ibb.co/smHptvz/award1.jpg" alt="" /><p className='text-gray-400 text-center mt-4 mb-4 lg:mb-0'>TOTY</p></div>
                    <div><img className='lg:w-28 lg:mx-none mx-auto' src="https://i.ibb.co/J36pG26/award4.jpg" alt="" /><p className='text-gray-400 text-center mt-4 mb-4 lg:mb-0'>Toy Mendous</p></div>
                </div>
            </div>
        </div>
    );
};

export default Awards;