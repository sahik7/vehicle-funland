import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SubCategoryContainer from '../../../../components/SubCategoryContainer';

import Aos from "aos";
import "aos/dist/aos.css";

const CategoryShop = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [subCategory, setSubCategory] = useState("");
  const [vehicles, setVehicles] = useState([])


  const initializeAos = () => {
    Aos.init();
  };
  
  useEffect(() => {
    initializeAos();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://vehicle-funland-server.vercel.app/vehicles?SubCategory=${subCategory}`);
        const data = await response.json();
        const limitedData = data.slice(0, 2);
        setVehicles(limitedData);
      } catch (error) {
      }
    };

    fetchData();
  }, [subCategory]);



  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
    switch (index) {
      case 0:
        setSubCategory('Automobiles');
        break;
      case 1:
        setSubCategory('Construction');
        break;
      case 2:
        setSubCategory("Mini")
        break;
      case 3:
        setSubCategory('Tractor');
        break;
      case 4:
        setSubCategory('Truck');
        break;
      default:
        subCategory = '';
    }
  };
  return (
    <div className="py-20" data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
      <h1 className="text-4xl py-8 pl-4 mb-8 border-secondary border-l-8 border-b-8 font-extrabold w-1/3">Categories</h1>
      <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect} className="lg:flex rounded p-4">
        <div className="">
          <TabList className="space-y-2">
            <Tab className={`border border-black p-1 ${activeTabIndex === 0 ? 'active-tab' : ''}`}>Automobiles Vehicles</Tab>
            <Tab className={`border border-black p-1 ${activeTabIndex === 1 ? 'active-tab' : ''}`}>Construction Vehicles</Tab>
            <Tab className={`border border-black p-1 ${activeTabIndex === 2 ? 'active-tab' : ''}`}>Mini Vehicles</Tab>
            <Tab className={`border border-black p-1 ${activeTabIndex === 3 ? 'active-tab' : ''}`}>Tractor Vehicles</Tab>
            <Tab className={`border border-black p-1 ${activeTabIndex === 4 ? 'active-tab' : ''}`}>Truck Vehicles</Tab>
          </TabList>
        </div>

        <div>
          <TabPanel>
            <SubCategoryContainer vehicles={vehicles} />
          </TabPanel>
          <TabPanel>
            <SubCategoryContainer vehicles={vehicles} />
          </TabPanel>
          <TabPanel>
            <SubCategoryContainer vehicles={vehicles} />
          </TabPanel>
          <TabPanel>
            <SubCategoryContainer vehicles={vehicles} />
          </TabPanel>
          <TabPanel>
            <SubCategoryContainer vehicles={vehicles} />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default CategoryShop;