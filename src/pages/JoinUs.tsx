import { useTranslation } from 'react-i18next';

const JoinUs = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: '1',
      titleKey: 'joinUs.process.step1.title',
      descriptionKey: 'joinUs.process.step1.description'
    },
    {
      number: '2',
      titleKey: 'joinUs.process.step2.title',
      descriptionKey: 'joinUs.process.step2.description'
    },
    {
      number: '3',
      titleKey: 'joinUs.process.step3.title',
      descriptionKey: 'joinUs.process.step3.description'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold mb-8 text-primary-400">
            {t('joinUs.hero.title')}
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg font-signika text-gray-300 leading-relaxed">
              {t('joinUs.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-dark-950 mb-4">
              {t('joinUs.process.title')}
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-montserrat font-bold text-dark-950">{step.number}</span>
                </div>
                <h3 className="text-lg font-montserrat font-bold text-dark-950 mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="text-dark-700 font-signika">
                  {t(step.descriptionKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://docs.google.com/forms/d/15u2FKUQBhhR_mV65-3D3sRSU2q7oiHzDZ2R-MDpZv8g/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-400 text-dark-950 font-montserrat font-bold px-8 py-4 rounded-full hover:bg-primary-300 hover:scale-105 transition-all duration-200 text-lg"
            >
              {t('joinUs.process.ctaButton')}
            </a>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-dark-950 mb-4">
              {t('joinUs.fees.title')}
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-montserrat font-semibold text-primary-600 mb-6">
                {t('joinUs.fees.annual.title')}
              </h3>
              <ul className="space-y-4 text-lg font-signika text-dark-950">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  {t('joinUs.fees.annual.regular')}
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  {t('joinUs.fees.annual.reduced')}
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  {t('joinUs.fees.annual.honorary')}
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-montserrat font-semibold text-primary-600 mb-6">
                {t('joinUs.fees.discounts.title')}
              </h3>
              <ul className="space-y-4 text-lg font-signika text-dark-950">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  {t('joinUs.fees.discounts.youth')}
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  {t('joinUs.fees.discounts.students')}
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  {t('joinUs.fees.discounts.special')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-dark-950 mb-4">
              {t('joinUs.legal.title')}
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-dark-700 font-signika leading-relaxed mb-6">
              {t('joinUs.legal.description')}
            </p>
            <a 
              href="/polityka-prywatnosci"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <span>{t('joinUs.legal.privacyLink')}</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;