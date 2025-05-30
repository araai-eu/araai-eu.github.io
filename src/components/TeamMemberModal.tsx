import { useEffect } from 'react';

interface TeamMember {
  id: string;
  namePL: string;
  nameEN: string;
  titlePL: string;
  titleEN: string;
  imageSrc: string;
  bioPL: string;
  bioEN: string;
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  language: 'pl' | 'en';
}

const TeamMemberModal = ({ member, isOpen, onClose, language }: TeamMemberModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;

  const name = language === 'pl' ? member.namePL : member.nameEN;
  const title = language === 'pl' ? member.titlePL : member.titleEN;
  const bio = language === 'pl' ? member.bioPL : member.bioEN;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <span className="text-2xl text-gray-600">&times;</span>
        </button>
        
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-gradient-to-br from-primary-500 to-primary-600 p-8 flex flex-col items-center justify-center text-white">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl">
              <img
                src={member.imageSrc}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-center mb-2">
              {name}
            </h3>
            <p className="text-primary-100 font-signika text-center">
              {title}
            </p>
          </div>
          
          <div className="lg:w-2/3 p-8 overflow-y-auto">
            <div className="prose prose-lg max-w-none">
              {bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-dark-700 font-signika leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal; 