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

            {/* Social media icons */}
            <div className="flex items-center space-x-2 sm:space-x-4 sm:ml-2">
              <a
                href="https://www.facebook.com/araai.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-[#1877F2] transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/araai-eu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-[#0A66C2] transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
