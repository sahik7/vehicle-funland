import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryShop = () => {
    return (
        <div>
  <Tabs className="grid grid-cols-6">
    <div className="col-span-1">
      <TabList className="">    
        <Tab className="">Car Toys</Tab>
        <Tab className="">Airplane Toys</Tab>
        <Tab className="">Ship Toys</Tab>
      </TabList>
    </div>

    <div className="col-span-5 border">
      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </div>
  </Tabs>
</div>
    );
};

export default CategoryShop;