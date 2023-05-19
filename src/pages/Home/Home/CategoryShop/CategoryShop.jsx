import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const CategoryShop = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [subCategory, setSubCategory] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/vehicles?SubCategory=${subCategory}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [subCategory]);


  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
    let subCategory;
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
      <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect} className="flex">
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

        <div className="border flex-grow-1">
          <TabPanel>
            <h2>Any content 1 {subCategory}</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2 {subCategory}</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3 {subCategory}</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4 {subCategory}</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 5 {subCategory}</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 6 {subCategory}</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default CategoryShop;