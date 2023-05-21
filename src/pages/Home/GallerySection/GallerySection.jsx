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
                console.log(imageUrls);
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
        <div>
            <div className="flex justify-between">
                <div>
                    {images.length > 0 && (
                        <img src={images[currentImageIndex]} alt="Gallery Image" />
                    )}
                </div>
                {/* Small image section */}
                <div className="grid grid-cols-6 border w-8/12">
                    {images.length > 0 &&
                        Array.from({ length: 12 }).map((_, index) => (
                            <img
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