import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Move data outside component to prevent re-creation on every render
const getTargetGroups = (t: ReturnType<typeof useTranslation>['t']) => [
  {
    id: 'dla-kogo',
    title: t('sections.forWho.title'),
    content: t('sections.forWho.content'),
    bgColor: 'bg-gradient-to-r from-gray-100 to-primary-200',
    barColor: '#70fcfe'  // primary-300
  },
  {
    id: 'eksperci',
    title: t('sections.experts.title'),
    content: t('sections.experts.content'),
    points: t('sections.experts.points', { returnObjects: true }),
    bgColor: 'bg-white',
    barColor: '#85fcfe'  // primary-400
  },
  {
    id: 'biznes',
    title: t('sections.business.title'),
    content: t('sections.business.content'),
    points: t('sections.business.points', { returnObjects: true }),
    bgColor: 'bg-gradient-to-r from-primary-100 to-primary-200',
    barColor: '#2afefe'  // primary-500
  },
  {
    id: 'decydenci',
    title: t('sections.decisionMakers.title'),
    content: t('sections.decisionMakers.content'),
    points: t('sections.decisionMakers.points', { returnObjects: true }),
    bgColor: 'bg-white',
    barColor: '#26e4e7'  // primary-600
  },
  {
    id: 'pasjonaci',
    title: t('sections.enthusiasts.title'),
    content: t('sections.enthusiasts.content'),
    points: t('sections.enthusiasts.points', { returnObjects: true }),
    bgColor: 'bg-gradient-to-r from-primary-100 to-primary-200',
    barColor: '#1ea2b4'  // primary-700
  },
  {
    id: 'skladki',
    title: t('sections.fees.title'),
    content: null,
    bgColor: 'bg-white',
    isSpecial: true,
    barColor: '#1f788c'  // primary-800
  }
];

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const { t } = useTranslation();
  
  const targetGroups = getTargetGroups(t);

  return (
    <div className="pt-16">
      {/* Hero Section with Image */}
      <section className="min-h-screen lg:h-screen flex items-center bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute inset-0 opacity-80">
          <div className="absolute top-20 right-32 w-48 h-48 bg-primary-400 rounded-full"></div>
          <div className="absolute top-40 right-80 w-32 h-32 border-4 border-primary-400 rounded-full"></div>
          <div className="absolute top-60 right-20 w-24 h-24 bg-primary-300 rounded-full"></div>
          <div className="absolute bottom-40 right-60 w-36 h-36 border-4 border-primary-300 rounded-full"></div>
          <div className="absolute bottom-20 right-96 w-20 h-20 bg-primary-400 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-montserrat font-bold mb-4 sm:mb-6 leading-tight">
                {t('hero.welcome')} <span className="gradient-text">{t('hero.araai')}</span>,
              </h1>
              
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-signika font-semibold text-primary-300 mb-3 sm:mb-4">
                {t('hero.subtitle')}
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg font-signika text-gray-300 leading-relaxed break-words">
                {t('hero.description')}
              </p>
            </div>
            
            {/* Right side - Hero image with circular crops */}
            <div className="relative">
              {/* Main hero image positioned within geometric shapes */}
              <div className="relative">
                <img 
                  src="/images/main.JPG" 
                  alt="Zespół ARAAI" 
                  className="w-full h-auto opacity-90"
                  style={{
                    clipPath: 'circle(60% at 50% 50%)',
                    maxHeight: '400px',
                    objectFit: 'cover'
                  }}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Small team icon */}
          <div className="flex justify-center mb-8">
            <img 
              src="/images/ludziki.JPG" 
              alt="Ikona zespołu" 
              className="w-16 h-16 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          {/* Mission text - three parts - full width */}
          <div className="w-full space-y-2 sm:space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-signika text-dark-950 leading-tight break-words">
              <strong>{t('mission.part1')}</strong>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-signika text-dark-950 leading-tight break-words">
              <strong>{t('mission.part2')}</strong>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-signika text-dark-950 leading-tight text-center break-words">
              <strong>{t('mission.part3')}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* AI Changes Everything Section */}
      <section className="py-8 sm:py-10 bg-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left column */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-dark-950 mb-3 sm:mb-4 leading-tight break-words">
                {t('aiChanges.title')}
              </h2>
              <p className="text-base sm:text-lg font-signika text-dark-700 leading-relaxed break-words">
                {t('aiChanges.subtitle')}
              </p>
            </div>
            
            {/* Right column - positioned lower */}
            <div className="lg:mt-20 mt-4 sm:mt-6">
              <p className="text-base sm:text-lg md:text-xl font-signika text-dark-950 leading-relaxed break-words">
                {t('aiChanges.question')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ARAAI exists Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6 sm:mb-8 break-words">
              {t('whyAraai.title')}
            </h2>
            <p className="text-base sm:text-lg font-signika text-gray-300 max-w-4xl mx-auto leading-relaxed break-words">
              {t('whyAraai.description')}
            </p>
          </div>

          {/* Goals grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "/images/ludziki1.JPG",
                title: t('whyAraai.goals.technology')
              },
              {
                icon: "/images/ksiazka.JPG", 
                title: t('whyAraai.goals.knowledge')
              },
              {
                icon: "/images/strzalka.JPG",
                title: t('whyAraai.goals.influence')
              },
              {
                icon: "/images/komentarz.JPG",
                title: t('whyAraai.goals.represent')
              }
            ].map((goal, index) => (
              <div key={index} className="p-4 sm:p-6 text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <img 
                    src={goal.icon} 
                    alt={goal.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="font-signika font-semibold text-white leading-tight text-sm sm:text-base break-words">
                  {goal.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sections with Vertical Navigation */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto">
          {/* Mobile/Tablet Navigation - Horizontal Tabs */}
          <div className="lg:hidden bg-white border-b border-gray-200">
            <div className="px-4 py-3">
              <div className="flex overflow-x-auto scrollbar-hide gap-3 pb-2 -mx-1">
                {targetGroups.map((group, index) => (
                  <button
                    key={group.id}
                    onClick={() => setCurrentSection(index)}
                    className={`flex-shrink-0 px-3 py-2 sm:px-4 sm:py-2 rounded-full font-montserrat font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center ${
                      currentSection === index
                        ? 'bg-primary-400 text-dark-950'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300'
                    }`}
                  >
                    {group.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Vertical Bars */}
          <div className="hidden lg:flex min-h-[600px]">
            {/* Sections BEFORE active - Left Side */}
            <div className="flex">
              {targetGroups.map((group, index) => (
                index < currentSection && (
                  <button
                    key={group.id}
                    onClick={() => setCurrentSection(index)}
                    className="flex items-center justify-center w-[60px] transition-all duration-500 hover:w-[70px] group"
                    style={{
                      backgroundColor: group.barColor
                    }}
                  >
                    <h3 className="text-dark-950 font-montserrat font-bold text-sm transform -rotate-90 whitespace-nowrap group-hover:scale-105 transition-transform">
                      {group.title.toUpperCase()}
                    </h3>
                  </button>
                )
              ))}
            </div>
            
            {/* Active Section - Center */}
            <div className="flex items-center justify-center w-[60px] transition-all duration-500" style={{ backgroundColor: targetGroups[currentSection].barColor }}>
              <h3 className="text-white font-montserrat font-bold text-sm transform -rotate-90 whitespace-nowrap">
                {targetGroups[currentSection].title.toUpperCase()}
              </h3>
            </div>
            
            {/* Content Area - Center */}
            <div className="flex-1 bg-white px-12 py-16 transition-all duration-500">
              <div className="max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark-950 mb-6">
                  {targetGroups[currentSection].title}
                </h2>
                <div className="w-24 h-1 bg-primary-400 mb-8"></div>
                
                {targetGroups[currentSection].isSpecial ? (
                  /* Składki Section */
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-montserrat font-semibold text-primary-400 mb-6">
                        {t('sections.fees.annual.title')}
                      </h3>
                      <ul className="space-y-4 text-lg font-signika text-dark-950">
                        <li className="flex items-start">
                          <span className="text-primary-400 mr-3">•</span>
                          {t('sections.fees.annual.regular')}
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-400 mr-3">•</span>
                          {t('sections.fees.annual.reduced')}
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-400 mr-3">•</span>
                          {t('sections.fees.annual.honorary')}
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-montserrat font-semibold text-primary-400 mb-6">
                        {t('sections.fees.discounts.title')}
                      </h3>
                      <ul className="space-y-4 text-lg font-signika text-dark-950">
                        <li className="flex items-start">
                          <span className="text-primary-400 mr-3">•</span>
                          {t('sections.fees.discounts.youth')}
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-400 mr-3">•</span>
                          {t('sections.fees.discounts.students')}
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-400 mr-3">•</span>
                          {t('sections.fees.discounts.special')}
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  /* Regular sections */
                  <>
                    <p className="text-lg font-signika text-dark-950 max-w-4xl leading-relaxed mb-8">
                      {targetGroups[currentSection].content}
                    </p>
                    
                    {targetGroups[currentSection].points && (
                      <ul className="space-y-4 text-lg font-signika text-dark-950">
                        {(targetGroups[currentSection].points as string[]).map((point: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary-400 mr-3">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
            
            {/* Sections AFTER active - Right Side */}
            <div className="flex">
              {targetGroups.map((group, index) => (
                index > currentSection && (
                  <button
                    key={group.id}
                    onClick={() => setCurrentSection(index)}
                    className="flex items-center justify-center w-[60px] transition-all duration-500 hover:w-[70px] group"
                    style={{
                      backgroundColor: group.barColor
                    }}
                  >
                    <h3 className="text-dark-950 font-montserrat font-bold text-sm transform -rotate-90 whitespace-nowrap group-hover:scale-105 transition-transform">
                      {group.title.toUpperCase()}
                    </h3>
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Mobile Content Area */}
          <div className="lg:hidden bg-white px-4 py-6 sm:py-8">
            <div className="max-w-none">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-dark-950 mb-3 sm:mb-4 break-words">
                {targetGroups[currentSection].title}
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-primary-400 mb-4 sm:mb-6"></div>
              
              {targetGroups[currentSection].isSpecial ? (
                /* Składki Section - Mobile */
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-base sm:text-lg font-montserrat font-semibold text-primary-400 mb-3 sm:mb-4 break-words">
                      {t('sections.fees.annual.title')}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base font-signika text-dark-950">
                      <li className="flex items-start break-words">
                        <span className="text-primary-400 mr-2 sm:mr-3 flex-shrink-0">•</span>
                        <span>{t('sections.fees.annual.regular')}</span>
                      </li>
                      <li className="flex items-start break-words">
                        <span className="text-primary-400 mr-2 sm:mr-3 flex-shrink-0">•</span>
                        <span>{t('sections.fees.annual.reduced')}</span>
                      </li>
                      <li className="flex items-start break-words">
                        <span className="text-primary-400 mr-2 sm:mr-3 flex-shrink-0">•</span>
                        <span>{t('sections.fees.annual.honorary')}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-montserrat font-semibold text-primary-400 mb-3 sm:mb-4 break-words">
                      {t('sections.fees.discounts.title')}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base font-signika text-dark-950">
                      <li className="flex items-start break-words">
                        <span className="text-primary-400 mr-2 sm:mr-3 flex-shrink-0">•</span>
                        <span>{t('sections.fees.discounts.youth')}</span>
                      </li>
                      <li className="flex items-start break-words">
                        <span className="text-primary-400 mr-2 sm:mr-3 flex-shrink-0">•</span>
                        <span>{t('sections.fees.discounts.students')}</span>
                      </li>
                      <li className="flex items-start break-words">
                        <span className="text-primary-400 mr-2 sm:mr-3 flex-shrink-0">•</span>
                        <span>{t('sections.fees.discounts.special')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                /* Regular sections - Mobile */
                <>
                  <p className="text-sm sm:text-base font-signika text-dark-950 leading-relaxed mb-4 sm:mb-6 break-words">
                    {targetGroups[currentSection].content}
                  </p>
                  
                  {targetGroups[currentSection].points && (
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base font-signika text-dark-950">
                      {(targetGroups[currentSection].points as string[]).map((point: string, index: number) => (
                        <li key={index} className="flex items-start break-words">
                          <span className="text-primary-400 mr-2 sm:mr-3 flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-signika font-semibold text-gray-300 mb-6 sm:mb-8 break-words">
            {t('cta.text')}
          </h2>
          
          <a 
            href="https://docs.google.com/forms/d/15u2FKUQBhhR_mV65-3D3sRSU2q7oiHzDZ2R-MDpZv8g/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 min-h-[44px] w-auto max-w-[280px] sm:max-w-full mx-auto whitespace-normal text-center leading-tight inline-block"
          >
            <span className="hidden sm:inline">{t('cta.button')}</span>
            <span className="sm:hidden">Wypełnij formularz</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home; 