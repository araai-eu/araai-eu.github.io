import { useTranslation } from 'react-i18next';

const Activity = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      id: 'ai-public',
      titleKey: 'activity.achievements.aiPublic.title',
      descriptionKey: 'activity.achievements.aiPublic.description'
    },
    {
      id: 'publication',
      titleKey: 'activity.achievements.publication.title',
      descriptionKey: 'activity.achievements.publication.description',
      link: 'https://arxiv.org/pdf/2503.01859',
      linkText: 'activity.achievements.publication.linkText'
    },
    {
      id: 'conference-materials',
      titleKey: 'activity.achievements.materials.title',
      descriptionKey: 'activity.achievements.materials.description'
    },
    {
      id: 'cooperation',
      titleKey: 'activity.achievements.cooperation.title',
      descriptionKey: 'activity.achievements.cooperation.description'
    },
    {
      id: 'presentations',
      titleKey: 'activity.achievements.presentations.title',
      descriptionKey: 'activity.achievements.presentations.description'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold mb-8 text-primary-400">
            {t('activity.hero.title')}
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg font-signika text-gray-300 leading-relaxed">
              {t('activity.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-dark-950 mb-4">
              {t('activity.achievements.title')}
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-primary-400"
              >
                <h3 className="text-lg font-montserrat font-bold text-dark-950 mb-3">
                  {t(achievement.titleKey)}
                </h3>
                <p className="text-dark-700 font-signika leading-relaxed mb-4">
                  {t(achievement.descriptionKey)}
                </p>
                {achievement.link && (
                  <a 
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    <span>{t(achievement.linkText!)}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activity;