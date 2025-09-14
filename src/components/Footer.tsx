import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();
  
  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 font-signika flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <div className="text-base sm:text-lg">© 2025 ARAAI</div>
            <div className="text-sm sm:text-base">
              <a 
                href="https://www.ux-zoom.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors break-words"
              >
                @designed by ux-zoom
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 text-center">
            <Link 
              to="/polityka-prywatnosci" 
              className="text-gray-400 hover:text-primary-400 transition-colors font-signika text-base sm:text-lg py-2 px-2 min-h-[44px] flex items-center"
            >
              {i18n.language === 'pl' ? 'Klauzula informacyjna' : 'Information clause'}
            </Link>
            <a 
              href="/pdf/ARAAI_statut.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors font-signika text-base sm:text-lg py-2 px-2 min-h-[44px] flex items-center"
            >
              {i18n.language === 'pl' ? 'Statut' : 'Statute'}
            </a>
            <a 
              href="mailto:office@araai.org" 
              className="text-gray-400 hover:text-primary-400 transition-colors font-signika text-base sm:text-lg py-2 px-2 min-h-[44px] flex items-center break-all"
            >
              <span className="hidden sm:inline">Email: </span>office@araai.org
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer; 
