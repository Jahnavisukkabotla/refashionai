import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Recycle, Home, BarChart3 } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-beige-50 border-b border-beige-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-brown-700">
            <Recycle className="h-8 w-8" />
            <span className="text-2xl font-bold">ReFashionAI</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                isActive('/') 
                  ? 'bg-beige-200 text-brown-700' 
                  : 'text-brown-600 hover:bg-beige-100'
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>

            <Link
              to="/dashboard"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                isActive('/dashboard') 
                  ? 'bg-beige-200 text-brown-700' 
                  : 'text-brown-600 hover:bg-beige-100'
              }`}
            >
              <BarChart3 className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;