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

interface TeamMemberCardProps {
  member: TeamMember;
  onClick: () => void;
  language: 'pl' | 'en';
}

const TeamMemberCard = ({ member, onClick, language }: TeamMemberCardProps) => {
  const name = language === 'pl' ? member.namePL : member.nameEN;
  const title = language === 'pl' ? member.titlePL : member.titleEN;

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 group"
      onClick={onClick}
    >
      <div className="p-6 text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-100 group-hover:border-primary-300 transition-colors">
          <img
            src={member.imageSrc}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <h3 className="text-xl font-montserrat font-bold text-dark-950 mb-2 group-hover:text-primary-600 transition-colors">
          {name}
        </h3>
        <p className="text-dark-600 font-signika text-sm leading-relaxed">
          {title}
        </p>
        <div className="mt-4 text-primary-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          {language === 'pl' ? 'Kliknij, aby poznać biografię' : 'Click to read biography'}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard; 