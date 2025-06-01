const Footer = () => {
  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 font-signika flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <div className="text-sm sm:text-base">© 2025 ARAAI</div>
            <div className="text-xs sm:text-sm">
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
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary-400 transition-colors font-signika text-sm sm:text-base py-2 px-2 min-h-[44px] flex items-center"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary-400 transition-colors font-signika text-sm sm:text-base py-2 px-2 min-h-[44px] flex items-center"
            >
              Cookie settings
            </a>
            <a 
              href="mailto:office@araai.org" 
              className="text-gray-400 hover:text-primary-400 transition-colors font-signika text-sm sm:text-base py-2 px-2 min-h-[44px] flex items-center break-all"
            >
              <span className="hidden sm:inline">Email: </span>office@araai.org
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary-400 transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 