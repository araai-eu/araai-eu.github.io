import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { path: '/', label: t('navigation.home') },
    { path: '/o-nas', label: t('navigation.about') },
    { path: '/wydarzenia', label: t('navigation.events') },
    { path: '/aktualnosci', label: t('navigation.news') },
  ];

  const isActive = (path: string) => location.pathname === path;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language || 'pl';

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
    changeLanguage(newLanguage);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950 border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo.JPG" 
              alt="ARAAI Logo" 
              className="w-12 h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full font-signika font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'border border-primary-400 text-primary-400'
                    : 'text-gray-300 hover:text-primary-400 hover:bg-primary-400/10 border border-transparent hover:border-primary-400/30'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 border border-primary-400 rounded-full text-primary-400 font-signika font-medium hover:bg-primary-400/20 transition-colors flex items-center space-x-1"
            >
              <span>🌐</span>
              <span>{currentLanguage.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-dark-800 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-800">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 my-2 rounded-full font-signika font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'border border-primary-400 text-primary-400'
                    : 'text-gray-300 hover:text-primary-400 hover:bg-primary-400/10 border border-transparent hover:border-primary-400/30'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="mt-4 px-4">
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 border border-primary-400 rounded-full text-primary-400 font-signika font-medium hover:bg-primary-400/20 transition-colors flex items-center space-x-1"
              >
                <span>🌐</span>
                <span>{currentLanguage.toUpperCase()}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 