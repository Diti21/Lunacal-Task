
import React, { useState, useRef }  from 'react';
import { Button } from '@mui/material';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  // Function to handle the image upload
  const handleImageUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    const newImages = uploadedFiles.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]); 
  };
  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };
  // Function to delete an image
  const handleDeleteImage = (index) => {
    const filteredImages = images.filter((_, i) => i !== index);
    setImages(filteredImages);
  };

  return (
    <div className=" mt-8 bg-gray-700 p-4 rounded-md">
      <div className=" relative flex justify-between items-center ">
       <div> <button className=" bg-black rounded-lg  text-white font-bold py-2 px-4 rounded-xl text-white text-lg">
          Gallery
          </button>
          <input
            type="file"
            multiple
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
          
           <button
           onClick={handleAddImageClick} 
           className=" absolute flex bg-gray-600 rounded-full text-{.1} p-4 px-2 py-2 top-1 right-40 hover:bg-gray-200 text-white  text-xs font-bold p-4 py-2 px-2 rounded-full text-white text-lg">
              + ADD IMAGE
          </button> 
           {/* Navigation Buttons */}
      <div className=" absolute top-0 right-0 flex space-x-4">
        
        <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 text-lg shadow-lg hover:bg-gray-600">
          ←
        </button>

        
        <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 text-lg  shadow-lg hover:bg-gray-600">
          →
        </button>
      </div>
          </div>
          
        
      </div>
      <div className="flex flex-column gap-4 mt-6">
        {Array(3)
          .fill()
          .map((_, index) => (
            <div key={index} className="w-32 h-28 bg-gray-500 rounded-lg"></div>
          ))}
      </div>
    {/* Gallery Display */}
    <div className="flex gap-4 mt-6 flex-wrap">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="relative w-32 h-28">
              <img src={image} alt={`uploaded-${index}`} className="w-full h-full object-cover rounded-lg" />
              {/* Delete button on each image */}
              <button
                onClick={() => handleDeleteImage(index)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-300"></p>
        )}
      </div>

    </div>
  );
};

export default Gallery;
