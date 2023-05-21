import React from 'react';
import SubCategoryItem from './SubCategoryItem';

const SubCategoryContainer = ({ vehicles,notify }) => {
    
    return (
        <div className="grid grid-cols-2 px-4 mx-auto gap-14 ">
                {
                    vehicles.map(vehicle => <SubCategoryItem key={vehicle._id} notify={notify} vehicle={vehicle} />)
                }
            </div>
    );
};

export default SubCategoryContainer;