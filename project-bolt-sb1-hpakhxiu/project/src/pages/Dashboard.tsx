import React from 'react';
import { Calendar, Clock, CheckCircle, Star, Trash2, Eye } from 'lucide-react';
import { UserProject } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import EcoImpactMeter from '../components/EcoImpactMeter';

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useLocalStorage<UserProject[]>('refashion-projects', []);

  const totalEcoImpact = projects.reduce((acc, project) => ({
    waterSaved: acc.waterSaved + project.selectedIdea.ecoImpact.waterSaved,
    co2Reduced: acc.co2Reduced + project.selectedIdea.ecoImpact.co2Reduced,
    wasteReduced: projects.length // simplified for demo
  }), { waterSaved: 0, co2Reduced: 0, wasteReduced: 0 });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planned': return 'text-brown-700 bg-brown-100';
      case 'in-progress': return 'text-gold-700 bg-gold-100';
      case 'completed': return 'text-gold-800 bg-gold-200';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'planned': return <Calendar className="h-4 w-4" />;
      case 'in-progress': return <Clock className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const updateProjectStatus = (projectId: string, newStatus: UserProject['status']) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === projectId 
          ? { ...project, status: newStatus }
          : project
      )
    );
  };

  const deleteProject = (projectId: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(project => project.id !== projectId));
    }
  };

  if (projects.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-beige-50 via-gold-50 to-brown-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-12 shadow-xl">
              <Star className="h-16 w-16 text-gold-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-brown-800 mb-4">
                Your Upcycling Journey Starts Here!
              </h1>
              <p className="text-brown-600 text-lg mb-8">
                You haven't saved any projects yet. Upload a garment photo on the home page 
                to get AI-powered upcycling suggestions and start your sustainable fashion journey.
              </p>
              <a
                href="/"
                className="inline-flex items-center bg-brown-600 text-white px-8 py-4 rounded-full font-medium hover:bg-brown-700 transition-colors"
              >
                Start Upcycling
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 via-gold-50 to-brown-50">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-brown-800 mb-4">
            Your Upcycling Dashboard
          </h1>
          <p className="text-brown-600 text-lg">
            Track your sustainable fashion journey and see the positive impact you're making!
          </p>
        </div>

        {/* Total Impact Summary */}
        <EcoImpactMeter
          waterSaved={totalEcoImpact.waterSaved}
          co2Reduced={totalEcoImpact.co2Reduced}
          wasteReduced={`${totalEcoImpact.wasteReduced} garments saved`}
          className="mb-12"
        />

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Total Projects</h3>
              <Star className="h-8 w-8 text-gold-500" />
            </div>
            <p className="text-3xl font-bold text-gold-700">{projects.length}</p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Completed</h3>
              <CheckCircle className="h-8 w-8 text-gold-500" />
            </div>
            <p className="text-3xl font-bold text-gold-700">
              {projects.filter(p => p.status === 'completed').length}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">In Progress</h3>
              <Clock className="h-8 w-8 text-brown-500" />
            </div>
            <p className="text-3xl font-bold text-brown-700">
              {projects.filter(p => p.status === 'in-progress').length}
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Upcycling Projects</h2>
          
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={project.garment.imageUrl}
                      alt={project.garment.type.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {project.selectedIdea.title}
                      </h3>
                      <p className="text-gray-600">
                        {project.garment.type.name} • {project.selectedIdea.difficulty} • {project.selectedIdea.timeRequired}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mt-4 md:mt-0">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)}
                      <span className="capitalize">{project.status.replace('-', ' ')}</span>
                    </span>
                    
                    <div className="flex items-center space-x-2">
                      <select
                        value={project.status}
                        onChange={(e) => updateProjectStatus(project.id, e.target.value as UserProject['status'])}
                        className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-sm"
                      >
                        <option value="planned">Planned</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                      
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete project"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{project.selectedIdea.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center text-brown-600">
                    <span className="font-medium">💧 Water Saved:</span>
                    <span className="ml-2">{project.selectedIdea.ecoImpact.waterSaved.toLocaleString()}L</span>
                  </div>
                  <div className="flex items-center text-gold-600">
                    <span className="font-medium">🌱 CO₂ Reduced:</span>
                    <span className="ml-2">{project.selectedIdea.ecoImpact.co2Reduced}kg</span>
                  </div>
                  <div className="flex items-center text-brown-600">
                    <span className="font-medium">♻️ Waste Diverted:</span>
                    <span className="ml-2">{project.selectedIdea.ecoImpact.wasteReduced}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                  <span>Created: {new Date(project.createdAt).toLocaleDateString()}</span>
                  <a
                    href={project.selectedIdea.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-brown-600 hover:text-brown-700 font-medium"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View Tutorial
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;