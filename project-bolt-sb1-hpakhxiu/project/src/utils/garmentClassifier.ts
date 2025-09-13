import { garmentTypes, GarmentType } from '../data/garmentData';

// Mock AI classifier - in a real app, this would call an AI service
export const classifyGarment = (imageFile: File): Promise<GarmentType> => {
  return new Promise((resolve) => {
    // Simulate AI processing time
    setTimeout(() => {
      const fileName = imageFile.name.toLowerCase();
      
      // Simple keyword matching for demo
      let detectedType = garmentTypes[0]; // default to t-shirt
      
      if (fileName.includes('jean') || fileName.includes('denim')) {
        detectedType = garmentTypes.find(g => g.id === 'jeans') || detectedType;
      } else if (fileName.includes('saree') || fileName.includes('sari')) {
        detectedType = garmentTypes.find(g => g.id === 'saree') || detectedType;
      } else if (fileName.includes('kurta')) {
        detectedType = garmentTypes.find(g => g.id === 'kurta') || detectedType;
      } else if (fileName.includes('shirt') && !fileName.includes('t-shirt')) {
        detectedType = garmentTypes.find(g => g.id === 'shirt') || detectedType;
      } else if (fileName.includes('dress')) {
        detectedType = garmentTypes.find(g => g.id === 'dress') || detectedType;
      } else if (fileName.includes('jacket')) {
        detectedType = garmentTypes.find(g => g.id === 'jacket') || detectedType;
      } else if (fileName.includes('scarf')) {
        detectedType = garmentTypes.find(g => g.id === 'scarf') || detectedType;
      }
      
      // If no keywords match, randomly select a type for demo
      if (detectedType === garmentTypes[0] && !fileName.includes('shirt')) {
        const randomIndex = Math.floor(Math.random() * garmentTypes.length);
        detectedType = garmentTypes[randomIndex];
      }
      
      resolve(detectedType);
    }, 1500); // Simulate processing delay
  });
};