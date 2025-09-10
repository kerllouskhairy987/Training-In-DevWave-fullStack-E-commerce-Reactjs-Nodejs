/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import UploadButton from "../UploadButton.tsx";
import { Button } from "../ui/button";
import { Card } from "./../../components/ui/card";
import { X, Upload, Image as ImageIcon } from "lucide-react";

interface ImageUploadAreaProps {
  onImagesChange: (images: string[]) => void;
  maxImages?: number;
  className?: string;
}


const ImageUploadArea: React.FC<ImageUploadAreaProps> = ({
  onImagesChange,
  maxImages = 5,
  className = "",
}) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadComplete = (res: any) => {
    setIsUploading(false);
    if (res && res.length > 0) {
      const newImages = res.map((file: any) => file.url);
      const updatedImages = [...uploadedImages, ...newImages].slice(
        0,
        maxImages
      );
      setUploadedImages(updatedImages);
      onImagesChange(updatedImages);
    }
  };

  const handleUploadError = (error: Error) => {
    setIsUploading(false);
    console.error("Upload error:", error);
  };

  const handleUploadBegin = () => {
    setIsUploading(true);
  };

  const removeImage = (index: number) => {
    const updatedImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(updatedImages);
    onImagesChange(updatedImages);
  };

  const canUploadMore = uploadedImages.length < maxImages;

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-2">
        <ImageIcon className="h-5 w-5" />
        <span className="text-sm font-medium">Product Images</span>
        <span className="text-xs text-gray-500">
          ({uploadedImages.length}/{maxImages})
        </span>
      </div>

      {/* Upload Button */}
      {canUploadMore && (
        <Card className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
          <div className="p-6 text-center">
            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-sm text-gray-600 mb-4">
              Click to upload images or drag and drop
            </p>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={handleUploadComplete}
              onUploadError={handleUploadError}
              onUploadBegin={handleUploadBegin}
              appearance={{
                button:
                  "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors",
                allowedContent: "text-xs text-gray-500 mt-2",
              }}
              content={{
                button: isUploading ? "Uploading..." : "Choose Images",
                allowedContent: "Images up to 4MB (PNG, JPG, GIF)",
              }}
            />
          </div>
        </Card>
      )}

      {/* Uploaded Images Preview */}
      {uploadedImages.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Uploaded Images:</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {uploadedImages.map((imageUrl, index) => (
              <div key={index} className="relative group">
                <Card className="overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeImage(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}

      {!canUploadMore && (
        <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-md">
          Maximum {maxImages} images allowed. Remove an image to upload more.
        </p>
      )}
    </div>
  );
};

export default ImageUploadArea;
