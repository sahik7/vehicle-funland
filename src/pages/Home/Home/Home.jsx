import React from 'react';
import CategoryShop from './CategoryShop/CategoryShop';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className="w-9/12 mx-auto">
            <Banner/>
            <CategoryShop/>
        </div>
    );
};

export default Home;