import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SubCategoryContainer from '../../../../components/SubCategoryContainer';

const CategoryShop = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [subCategory, setSubCategory] = useState("");
  const [vehicles, setVehicles] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/vehicles?SubCategory=${subCategory}`);
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
      }
    };

    fetchData();
  }, [subCategory]);


  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
    switch (index) {
      case 0:
        setSubCategory('Flying');
        break;
      case 1:
        setSubCategory('Sailing');
        break;
      case 2:
        setSubCategory('Automobiles');
        break;
      case 3:
        setSubCategory('Construction');
        break;
      case 4:
        setSubCategory('Tractor');
        break;
      case 5:
        setSubCategory('Cargo');
        break;
      default:
        subCategory = '';
    }
  };
  return (
    <div>
      <h1 className="text-4xl py-8 pl-4 mb-8 border-secondary border-l-8 border-b-8 font-extrabold w-1/3">Categories</h1>
      <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect} className="flex rounded p-4">
        <div className="">
          <TabList className="space-y-2">
            <Tab className={`border border-black p-1 ${activeTabIndex === 0 ? 'active-tab' : ''}`}>Flying Vehicles</Tab>
            <Tab className={`border border-black p-1 ${activeTabIndex === 1 ? 'active-tab' : ''}`}>Sailing Vehicles</Tab>
            <Tab className={`border border-black p-1 ${activeTabIndex === 2 ? 'active-tab' : ''}`}>Automobile Vehicles</Tab>
            <Tab className={`border border-black p-1 ${activeTabIndex === 3 ? 'active-tab' : ''}`}>Construction Vehicles</Tab>
            <Tab className={`border border-black p-1 ${activeTabIndex === 4 ? 'active-tab' : ''}`}>Tractor Vehicles</Tab>
            <Tab className={`border border-black p-1 ${activeTabIndex === 5 ? 'active-tab' : ''}`}>Cargo Vehicles</Tab>
          </TabList>
        </div>

        <div>
          <TabPanel>
            <SubCategoryContainer vehicles={vehicles}/>
          </TabPanel>
          <TabPanel>
          <SubCategoryContainer vehicles={vehicles}/>
          </TabPanel>
          <TabPanel>
            <SubCategoryContainer vehicles={vehicles}/>
          </TabPanel>
          <TabPanel>
            <SubCategoryContainer vehicles={vehicles}/>
          </TabPanel>
          <TabPanel>
            <SubCategoryContainer vehicles={vehicles}/>
          </TabPanel>
          <TabPanel>
            <SubCategoryContainer vehicles={vehicles}/>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default CategoryShop;