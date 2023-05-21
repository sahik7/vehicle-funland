import React from 'react';
import CategoryShop from './CategoryShop/CategoryShop';
import Banner from '../Banner/Banner';
import GallerySection from '../GallerySection/GallerySection';

const Home = () => {
    return (
        <div className="w-9/12 mx-auto">
            <Banner/>
            <GallerySection/>
            <CategoryShop/>
        </div>
    );
};

export default Home;