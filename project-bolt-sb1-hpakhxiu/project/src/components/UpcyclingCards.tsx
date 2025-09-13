import React from 'react';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { UpcyclingIdea } from '../types';

interface UpcyclingCardsProps {
  ideas: UpcyclingIdea[];
  onSelectIdea: (idea: UpcyclingIdea) => void;
}

const UpcyclingCards: React.FC<UpcyclingCardsProps> = ({ ideas, onSelectIdea }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-gold-700 bg-gold-100';
      case 'Medium': return 'text-brown-700 bg-brown-100';
      case 'Hard': return 'text-brown-800 bg-brown-200';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ideas.map((idea) => (
        <div
          key={idea.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 cursor-pointer group"
          onClick={() => onSelectIdea(idea)}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-brown-600 transition-colors">
              {idea.title}
            </h3>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gold-500 transition-colors transform group-hover:translate-x-1" />
          </div>

          <p className="text-gray-600 mb-4 line-clamp-3">
            {idea.description}
          </p>

          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(idea.difficulty)}`}>
              {idea.difficulty}
            </span>
            <span className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {idea.timeRequired}
            </span>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="text-sm text-gray-600 mb-2">
              <strong>Environmental Impact:</strong>
            </div>
            <div className="text-sm text-brown-600 space-y-1">
              <div>💧 {idea.ecoImpact.waterSaved.toLocaleString()}L water saved</div>
              <div>🌱 {idea.ecoImpact.co2Reduced}kg CO₂ reduced</div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <button className="w-full bg-beige-100 text-brown-700 py-2 rounded-full font-medium hover:bg-beige-200 transition-colors group-hover:bg-brown-600 group-hover:text-white">
              View Tutorial
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcyclingCards;