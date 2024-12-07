"use client";

import React, { useState, useEffect } from "react";

const FileUpload = ({ setImages, imageList = [] }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  // Create object URLs for selected files
  useEffect(() => {
    const objectUrls = selectedFiles.map(file => URL.createObjectURL(file));
    setPreviews(objectUrls);

    // Free memory when component unmounts
    return () => objectUrls.forEach(url => URL.revokeObjectURL(url));
  }, [selectedFiles]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    
    // Combine new files with existing images from the list
    const updatedFiles = [...files];
    
    // Update local state
    setSelectedFiles(updatedFiles);
    
    // Call setImages prop to update parent component's state
    setImages(updatedFiles);
  };

  const removeImage = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    setImages(updatedFiles);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        accept="image/*"
        className="mb-4"
      />
      
      <div className="flex flex-wrap gap-4">
        {/* Existing images from the list */}
        {imageList?.map((image, index) => (
          <div key={`existing-${index}`} className="relative">
            <img 
              src={image.url} 
              alt={`Existing image ${index + 1}`} 
              className="w-24 h-24 object-cover rounded"
            />
          </div>
        ))}
        
        {/* Newly selected files */}
        {previews.map((preview, index) => (
          <div key={`new-${index}`} className="relative">
            <img 
              src={preview} 
              alt={`Selected image ${index + 1}`} 
              className="w-24 h-24 object-cover rounded"
            />
            <button 
              onClick={() => removeImage(index)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;