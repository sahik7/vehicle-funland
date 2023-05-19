import React from 'react';
import SingleToy from '../pages/AllToys/SingleToy';

const SubCategoryContainer = ({ vehicles }) => {
    return (
        <div className="grid grid-cols-2 px-4 mx-auto gap-4">
                {
                    vehicles.map(vehicle => <SingleToy key={vehicle._id} vehicle={vehicle} />)
                }
            </div>
    );
};

export default SubCategoryContainer;