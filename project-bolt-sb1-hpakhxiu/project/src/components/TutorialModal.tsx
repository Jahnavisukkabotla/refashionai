import React from 'react';
import { X, Clock, Star, CheckCircle } from 'lucide-react';
import { UpcyclingIdea } from '../types';
import EcoImpactMeter from './EcoImpactMeter';

interface TutorialModalProps {
  idea: UpcyclingIdea;
  isOpen: boolean;
  onClose: () => void;
  onSaveProject: (idea: UpcyclingIdea) => void;
}

const TutorialModal: React.FC<TutorialModalProps> = ({ 
  idea, 
  isOpen, 
  onClose, 
  onSaveProject 
}) => {
  if (!isOpen) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-gold-700 bg-gold-100';
      case 'Medium': return 'text-brown-700 bg-brown-100';
      case 'Hard': return 'text-brown-800 bg-brown-200';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const handleSaveProject = () => {
    onSaveProject(idea);
    onClose();
  };

  // Extract video ID from YouTube URL for embedding
  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(idea.videoUrl);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{idea.title}</h2>
            <div className="flex items-center space-x-4 mt-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(idea.difficulty)}`}>
                {idea.difficulty}
              </span>
              <span className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-1" />
                {idea.timeRequired}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-700 text-lg leading-relaxed">{idea.description}</p>
          </div>

          {videoId && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📹 Video Tutorial</h3>
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`${idea.title} Tutorial`}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🧰 Materials Needed</h3>
              <ul className="space-y-2">
                {idea.materials.map((material, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                    {material}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📝 Step-by-Step Guide</h3>
              <ol className="space-y-3">
                {idea.steps.map((step, index) => (
                  <li key={index} className="flex text-gray-700">
                    <span className="bg-beige-200 text-brown-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <EcoImpactMeter
            waterSaved={idea.ecoImpact.waterSaved}
            co2Reduced={idea.ecoImpact.co2Reduced}
            wasteReduced={idea.ecoImpact.wasteReduced}
            className="mb-8"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleSaveProject}
              className="bg-brown-600 text-white px-8 py-3 rounded-full font-medium hover:bg-brown-700 transition-colors flex items-center justify-center"
            >
              <Star className="h-5 w-5 mr-2" />
              Save to My Projects
            </button>
            <button
              onClick={onClose}
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Close Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialModal;