import React, { useState } from "react";
import ImageUploadArea from "./ImageUploadArea";

const ImageUploadExample = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleImagesChange = (images: string[]) => {
    setUploadedImages(images);
    console.log("Uploaded images:", images);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Image Upload Example</h2>

      <ImageUploadArea
        onImagesChange={handleImagesChange}
        maxImages={5}
        className="mb-6"
      />

      {uploadedImages.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">
            Uploaded Images ({uploadedImages.length}):
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {uploadedImages.map((imageUrl, index) => (
              <div key={index} className="relative">
                <img
                  src={imageUrl}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg border"
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                  Image {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploadExample;
