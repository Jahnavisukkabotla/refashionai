import React, { useCallback, useState } from 'react';
import { Upload, Image as ImageIcon, Loader2 } from 'lucide-react';
import { classifyGarment } from '../utils/garmentClassifier';
import { GarmentType } from '../types';

interface GarmentUploadProps {
  onGarmentDetected: (garmentType: GarmentType, imageUrl: string) => void;
}

const GarmentUpload: React.FC<GarmentUploadProps> = ({ onGarmentDetected }) => {
  const [dragOver, setDragOver] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    setProcessing(true);
    
    try {
      // Create preview URL
      const imageUrl = URL.createObjectURL(file);
      
      // Classify the garment
      const garmentType = await classifyGarment(file);
      
      // Call parent callback
      onGarmentDetected(garmentType, imageUrl);
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Error processing image. Please try again.');
    } finally {
      setProcessing(false);
    }
  }, [onGarmentDetected]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  if (processing) {
    return (
      <div className="border-2 border-dashed border-beige-300 rounded-2xl p-12 text-center bg-beige-50">
        <Loader2 className="h-16 w-16 text-gold-500 mx-auto mb-4 animate-spin" />
        <h3 className="text-xl font-semibold text-brown-700 mb-2">
          AI is analyzing your garment...
        </h3>
        <p className="text-brown-600">
          This may take a moment while we identify the best upcycling options
        </p>
      </div>
    );
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`border-2 border-dashed rounded-2xl p-12 text-center transition-colors cursor-pointer ${
        dragOver
          ? 'border-gold-400 bg-beige-200'
          : 'border-beige-300 bg-beige-50 hover:bg-beige-100'
      }`}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
        id="file-upload"
      />
      
      <label htmlFor="file-upload" className="cursor-pointer">
        <div className="flex flex-col items-center">
          <div className="bg-beige-200 p-6 rounded-full mb-4">
            {dragOver ? (
              <ImageIcon className="h-16 w-16 text-brown-600" />
            ) : (
              <Upload className="h-16 w-16 text-brown-600" />
            )}
          </div>
          
          <h3 className="text-2xl font-semibold text-brown-700 mb-2">
            Upload Your Garment
          </h3>
          
          <p className="text-brown-600 mb-4 max-w-md">
            Drag and drop your clothing photo here, or click to select a file. 
            Our AI will identify the garment and suggest creative upcycling ideas!
          </p>
          
          <div className="bg-brown-600 text-white px-6 py-3 rounded-full font-medium hover:bg-brown-700 transition-colors">
            Choose File
          </div>
        </div>
      </label>
    </div>
  );
};

export default GarmentUpload;