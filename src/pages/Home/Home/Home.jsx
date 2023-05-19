import React from 'react';
import CategoryShop from './CategoryShop/CategoryShop';

const Home = () => {
    return (
        <div className="w-9/12 mx-auto border border-red-600">
            <h1>This is home</h1>
            <CategoryShop/>
        </div>
    );
};

export default Home;