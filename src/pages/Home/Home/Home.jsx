import React from 'react';
import CategoryShop from './CategoryShop/CategoryShop';
import Banner from '../Banner/Banner';
import GallerySection from '../GallerySection/GallerySection';
import OurTeam from '../OurTeam/OurTeam';
import Awards from './Awards/Awards';
import DynamicTitle from '../../../components/DynamicTitle';


const Home = () => {
    return (
        <div className="w-9/12 mx-auto">
            <DynamicTitle title="Homepage"/>
            <Banner/>
            <GallerySection/>
            <OurTeam/>
            <CategoryShop/>
            <Awards/>
        </div>
    );
};

export default Home;