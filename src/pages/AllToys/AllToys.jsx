import React, { useEffect, useState } from 'react';
import SingleToy from './SingleToy';

const AllToys = () => {
    const [vehicles, setVehicles] = useState([])
    const [keyword, setKeyword] = useState("")


    function handleInputChange(e) {
        const searchedKeyword = e.target.value;
        setKeyword(searchedKeyword)
    }


    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:5000/vehicles?ToyName=${keyword}`);
            const data = await response.json();
            setVehicles(data);
        })();
    }, [keyword]);


    return (
        <div>
            <input type="text" onChange={handleInputChange} placeholder="search" name="search" id="" />
            <div className="grid grid-cols-2 w-9/12 mx-auto gap-8">
                {
                    vehicles.map(vehicle => <SingleToy key={vehicle._id} vehicle={vehicle} />)
                }
            </div>
        </div>
    );
};

export default AllToys;