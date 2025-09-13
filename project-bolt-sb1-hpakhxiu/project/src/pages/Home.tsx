import React, { useState } from 'react';
import { Recycle, Leaf, Heart, Users } from 'lucide-react';
import GarmentUpload from '../components/GarmentUpload';
import UpcyclingCards from '../components/UpcyclingCards';
import TutorialModal from '../components/TutorialModal';
import EcoImpactMeter from '../components/EcoImpactMeter';
import { GarmentType, UpcyclingIdea, DetectedGarment, UserProject } from '../types';
import { upcyclingIdeas } from '../data/garmentData';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Home: React.FC = () => {
  const [detectedGarment, setDetectedGarment] = useState<DetectedGarment | null>(null);
  const [selectedIdea, setSelectedIdea] = useState<UpcyclingIdea | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useLocalStorage<UserProject[]>('refashion-projects', []);

  const handleGarmentDetected = (garmentType: GarmentType, imageUrl: string) => {
    const suggestions = upcyclingIdeas[garmentType.id] || [];
    const detected: DetectedGarment = {
      id: Date.now().toString(),
      type: garmentType,
      imageUrl,
      uploadedAt: new Date(),
      suggestions
    };
    setDetectedGarment(detected);
  };

  const handleSelectIdea = (idea: UpcyclingIdea) => {
    setSelectedIdea(idea);
    setShowModal(true);
  };

  const handleSaveProject = (idea: UpcyclingIdea) => {
    if (!detectedGarment) return;

    const project: UserProject = {
      id: Date.now().toString(),
      garment: detectedGarment,
      selectedIdea: idea,
      status: 'planned',
      createdAt: new Date()
    };

    setProjects(prev => [project, ...prev]);
  };

  const resetUpload = () => {
    setDetectedGarment(null);
    setSelectedIdea(null);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 via-gold-50 to-brown-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-brown-800 mb-6">
            ♻️ Turn Your Old Clothes into Something New with AI
          </h1>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
            Join the sustainable fashion revolution! Upload a photo of your old garment and discover 
            creative upcycling ideas powered by AI. Reduce textile waste while creating something beautiful.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-lg">
            <div className="bg-beige-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="h-8 w-8 text-brown-600" />
            </div>
            <h3 className="text-2xl font-bold text-brown-800 mb-2">85 Million Tons</h3>
            <p className="text-brown-600">Textile waste generated globally each year</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-lg">
            <div className="bg-gold-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-gold-700" />
            </div>
            <h3 className="text-2xl font-bold text-gold-800 mb-2">2,700 Liters</h3>
            <p className="text-gold-700">Water used to make one cotton t-shirt</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-lg">
            <div className="bg-brown-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-brown-700" />
            </div>
            <h3 className="text-2xl font-bold text-brown-800 mb-2">95%</h3>
            <p className="text-brown-600">Of textile waste can be recycled or reused</p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="max-w-2xl mx-auto mb-16">
          {!detectedGarment ? (
            <GarmentUpload onGarmentDetected={handleGarmentDetected} />
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={detectedGarment.imageUrl} 
                    alt="Uploaded garment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-emerald-800 mb-2">
                  ✨ AI Detected: {detectedGarment.type.name}
                </h2>
                <p className="text-brown-600">
                  Great choice! Here are some amazing upcycling ideas for your {detectedGarment.type.name.toLowerCase()}:
                </p>
              </div>

              {detectedGarment.suggestions.length > 0 && (
                <UpcyclingCards 
                  ideas={detectedGarment.suggestions}
                  onSelectIdea={handleSelectIdea}
                />
              )}

              <div className="mt-8 text-center">
                <button
                  onClick={resetUpload}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  Upload Another Garment
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <section className="bg-white/80 backdrop-blur rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brown-800 mb-4">
              Why Upcycle Your Clothes?
            </h2>
            <p className="text-brown-600 text-lg max-w-2xl mx-auto">
              Every piece of clothing you upcycle makes a meaningful impact on our environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-beige-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-brown-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Save Water</h3>
              <p className="text-gray-600">
                Reduce water consumption by thousands of liters per garment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10 text-gold-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Reduce CO₂</h3>
              <p className="text-gray-600">
                Lower carbon emissions by avoiding new production
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brown-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-10 w-10 text-brown-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Prevent Waste</h3>
              <p className="text-gray-600">
                Keep textiles out of landfills where they take years to decompose
              </p>
            </div>

            <div className="text-center">
              <div className="bg-beige-300 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-brown-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Express Creativity</h3>
              <p className="text-gray-600">
                Create unique, personalized items that reflect your style
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Tutorial Modal */}
      {selectedIdea && (
        <TutorialModal
          idea={selectedIdea}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSaveProject={handleSaveProject}
        />
      )}
    </div>
  );
};

export default Home;