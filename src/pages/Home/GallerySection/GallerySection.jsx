import React, { useEffect, useState } from 'react';

const GallerySection = () => {
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('https://vehicle-funland-server-sahik7.vercel.app/vehicles');
                const data = await response.json();
                const imageUrls = data.map((item) => item.Image);
                setImages(imageUrls);
            } catch (error) {
                console.error(error);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [images]);

    return (
        <div className="my-32">
            <h1 className="text-4xl py-8 pl-4 mb-8 border-secondary border-l-8 border-b-8 font-extrabold w-1/3">Gallery</h1>
            <div className="lg:flex lg:justify-between">
                <div>
                    {images.length > 0 && (
                        <img className="mx-auto" src={images[currentImageIndex]} />
                    )}
                </div>
                {/* Small image section */}
                <div className="grid lg:grid-cols-6 grid-cols-2 lg:gap-4 gap-2 border mx-auto w-8/12">
                    {images.length > 0 &&
                        Array.from({ length: 12 }).map((_, index) => (
                            <img
                                className='lg:border-4 border border-black lg:single-product-container single-product-container-sm'
                                key={index}
                                src={images[(currentImageIndex + index) % images.length]}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default GallerySection;