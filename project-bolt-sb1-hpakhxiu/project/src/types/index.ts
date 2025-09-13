export interface GarmentType {
  id: string;
  name: string;
  category: 'tops' | 'bottoms' | 'traditional' | 'accessories';
}

export interface UpcyclingIdea {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeRequired: string;
  materials: string[];
  steps: string[];
  videoUrl: string;
  ecoImpact: {
    waterSaved: number;
    co2Reduced: number;
    wasteReduced: string;
  };
}

export interface DetectedGarment {
  id: string;
  type: GarmentType;
  imageUrl: string;
  uploadedAt: Date;
  suggestions: UpcyclingIdea[];
}

export interface UserProject {
  id: string;
  garment: DetectedGarment;
  selectedIdea: UpcyclingIdea;
  status: 'planned' | 'in-progress' | 'completed';
  createdAt: Date;
}