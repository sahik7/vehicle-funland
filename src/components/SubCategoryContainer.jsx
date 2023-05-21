import React, { useEffect } from 'react';
import SubCategoryItem from './SubCategoryItem';
import Aos from "aos";
import "aos/dist/aos.css";

const SubCategoryContainer = ({ vehicles,notify }) => {
    const initializeAos = () => {
        Aos.init();
      };
      
      useEffect(() => {
        initializeAos();
      }, []);
    
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-4 mt-5 lg:mt-0 mx-auto gap-10 lg:gap-14 " data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
                {
                    vehicles.map(vehicle => <SubCategoryItem key={vehicle._id} notify={notify} vehicle={vehicle} />)
                }
            </div>
    );
};

export default SubCategoryContainer;