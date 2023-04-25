import React, { useEffect, useState } from "react";
import images from "./images";

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0].url);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkIndex = (index) => {
    if (index < 0) {
      return images.length - 1;
    }
    if (index > images.length - 1) {
      return 0;
    }
    return index;
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex) => checkIndex(currentIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex) => checkIndex(currentIndex - 1));
  };

  const handleImageClick = (image) => {
    setSelectedImage(image.url);
    setCurrentIndex(image.id - 1);
  };

  useEffect(() => {
    setSelectedImage(images[currentIndex].url);
  }, [currentIndex]);

  return (
    <>
      <div className="w-full ">
        <img src={selectedImage} alt="" className="object-cover mx-auto h-32" />
      </div>
      <div className="flex mt-8">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 "
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-5 gap-4 m-8">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt="images"
            className="w-full h-48 object-cover cursor-pointer"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </>
  );
};
