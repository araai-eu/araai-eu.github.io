import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Move data outside component to prevent re-creation on every render
const getTargetGroups = (t: any) => [
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
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight">
                {t('hero.welcome')} <span className="gradient-text">{t('hero.araai')}</span>,
              </h1>
              
              <h2 className="text-lg md:text-xl lg:text-2xl font-signika font-semibold text-primary-300 mb-4">
                {t('hero.subtitle')}
              </h2>
              
              <p className="text-base md:text-lg font-signika text-gray-300 leading-relaxed">
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
          <div className="w-full">
            <p className="text-xl md:text-2xl lg:text-3xl font-signika text-dark-950 leading-tight">
              <strong>{t('mission.part1')}</strong>
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-signika text-dark-950 leading-tight">
              <strong>{t('mission.part2')}</strong>
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-signika text-dark-950 leading-tight text-center">
              <strong>{t('mission.part3')}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* AI Changes Everything Section */}
      <section className="py-10 bg-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark-950 mb-4 leading-tight">
                {t('aiChanges.title')}
              </h2>
              <p className="text-lg font-signika text-dark-700 leading-relaxed">
                {t('aiChanges.subtitle')}
              </p>
            </div>
            
            {/* Right column - positioned lower */}
            <div className="lg:mt-20">
              <p className="text-lg md:text-xl font-signika text-dark-950 leading-relaxed">
                {t('aiChanges.question')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ARAAI exists Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-8">
              {t('whyAraai.title')}
            </h2>
            <p className="text-lg font-signika text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('whyAraai.description')}
            </p>
          </div>

          {/* Goals grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src={goal.icon} 
                    alt={goal.title}
                    className="w-16 h-16 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="font-signika font-semibold text-white leading-tight">
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
            <div className="px-4 py-2">
              <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-2">
                {targetGroups.map((group, index) => (
                  <button
                    key={group.id}
                    onClick={() => setCurrentSection(index)}
                    className={`px-4 py-2 rounded-full font-montserrat font-semibold text-sm whitespace-nowrap transition-all duration-300 touch-manipulation ${
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
          <div className="lg:hidden bg-white px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-dark-950 mb-4">
                {targetGroups[currentSection].title}
              </h2>
              <div className="w-16 h-1 bg-primary-400 mb-6"></div>
              
              {targetGroups[currentSection].isSpecial ? (
                /* Składki Section - Mobile */
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-montserrat font-semibold text-primary-400 mb-4">
                      {t('sections.fees.annual.title')}
                    </h3>
                    <ul className="space-y-3 text-base font-signika text-dark-950">
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
                    <h3 className="text-lg font-montserrat font-semibold text-primary-400 mb-4">
                      {t('sections.fees.discounts.title')}
                    </h3>
                    <ul className="space-y-3 text-base font-signika text-dark-950">
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
                /* Regular sections - Mobile */
                <>
                  <p className="text-base font-signika text-dark-950 leading-relaxed mb-6">
                    {targetGroups[currentSection].content}
                  </p>
                  
                  {targetGroups[currentSection].points && (
                    <ul className="space-y-3 text-base font-signika text-dark-950">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-signika font-semibold text-gray-300 mb-8">
            {t('cta.text')}
          </h2>
          
          <button className="btn-primary text-lg px-8 py-4">
            {t('cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home; 