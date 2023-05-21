import React, { useEffect, useState } from 'react';
import SingleToy from './SingleToy';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const [vehicles, setVehicles] = useState([])
    const [keyword, setKeyword] = useState("")
    const [presentPage, setPresentPage] = useState(0)
    const { productCount } = useLoaderData()


    const productLimit = 10;
    const pageCount = Math.ceil(productCount / productLimit)

    const pageNumbers = [...Array(pageCount).keys()];
    console.log(pageNumbers)

    function handleInputChange(e) {
        const searchedKeyword = e.target.value;
        setKeyword(searchedKeyword)
    }


    useEffect(() => {
        (async () => {
            const response = await fetch(`https://vehicle-funland-server-sahik7.vercel.app/vehicles?ToyName=${keyword}`);
            const data = await response.json();
            setVehicles(data);
        })();
    }, [keyword]);


    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-center my-20 text-4xl font-bold border-x-primary
            border-y-black py-10 border-8 w-1/2 mx-auto'>FIND YOUR FAVORITE PRODUCTS</h1>
            <div className=' border-pink-600 text-center py-10'>
                <input className=' border-4 rounded-sm text-center w-1/2 py-3 px-4  border-black' type="text" onChange={handleInputChange} placeholder="search" name="search" id="" />
            </div>
            <div className="grid grid-cols-2 gap-10 my-20">
                {
                    vehicles.map(vehicle => <SingleToy key={vehicle._id} vehicle={vehicle} />)
                }
            </div>
            {/* Pagination */}
            <div className="flex justify-between w-2/12 mx-auto my-20">
                {pageNumbers.map((num) => {
                    const isCurrentPage = presentPage === num;
                    const buttonClasses = `btn-animation border-2 border-black px-5 rounded py-2 ${isCurrentPage ? 'rounded-none font-bold' : ''
                        }`;

                    return (
                        <button
                            onClick={() => setPresentPage(num)}
                            className={buttonClasses}
                            key={num}
                        >
                            {num}
                        </button>
                    );
                })}
            </div>

        </div>
    );
};

export default AllToys;