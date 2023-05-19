import React, { useEffect, useState } from 'react';
import SingleToy from './SingleToy';

const AllToys = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        (async () => {
            const response = await fetch('https://vehicle-funland-server-sahik7.vercel.app/vehicles');
            const data = await response.json();
            setVehicles(data);
        })();
      }, []);


    return (
        <div>
            <input type="text" />
            <div className="grid grid-cols-3 w-9/12 mx-auto gap-8">
{
    vehicles.map(vehicle => <SingleToy key={vehicle._id} vehicle={vehicle}/>)
}
            </div>
        </div>
    );
};

export default AllToys;