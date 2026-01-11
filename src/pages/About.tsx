import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  roleEN: string;
  image: string;
  bio: string;
  bioEN: string;
  linkedinUrl?: string;
}

const About = () => {
  const { t, i18n } = useTranslation();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const leftGoals = t('about.goals.left', { returnObjects: true }) as string[];
  const rightGoals = t('about.goals.right', { returnObjects: true }) as string[];
  
  const currentLanguage = i18n.language || 'pl';

  const boardMembers = [
    { 
      name: 'Maria Jędrzejczak', 
      role: 'Dr nauk prawnych, UAM', 
      roleEN: 'PhD in Law, AMU',
      image: '/team/Maria_Jedrzejczak.jpg',
      bio: 'Doktor nauk prawnych; adiunkt w Zakładzie Prawa Administracyjnego i Nauki o Administracji oraz Lokalny Administrator Bezpieczeństwa Informacji na Wydziale Prawa i Administracji Uniwersytetu im. Adama Mickiewicza w Poznaniu. Członek Rady Naukowej Instytutu Prawa Ochrony Danych Osobowych przy Urzędzie Ochrony Danych Osobowych.\n\nOpiekun naukowy Koła Prawa Ochrony Danych Osobowych i Sztucznej Inteligencji "Salus Populi". Kierownik grantu Narodowego Centrum Nauki pt. "Ochrona danych osobowych w Specjalnym Regionie Administracyjnym Hongkong". Laureatka konkursu IDUB "50 x 50: pięćdziesiąt grantów dla 50 młodych naukowców" z projektem "Personal Data Protection and AI: Comparative Study of US and EU".',
      bioEN: 'Doctor of Legal Sciences; Assistant Professor at the Department of Administrative Law and Administration Science and Local Information Security Administrator at the Faculty of Law and Administration of Adam Mickiewicz University in Poznań. Member of the Scientific Council of the Institute of Personal Data Protection Law at the Personal Data Protection Office.\n\nScientific supervisor of the "Salus Populi" Personal Data Protection and Artificial Intelligence Law Circle. Head of the National Science Center grant entitled "Personal Data Protection in the Hong Kong Special Administrative Region". Winner of the IDUB competition "50 x 50: fifty grants for 50 young scientists" with the project "Personal Data Protection and AI: Comparative Study of US and EU".'
    },
    { 
      name: 'Piotr Brzyski', 
      role: 'Zetatech', 
      roleEN: 'Zetatech',
      image: '/team/Piotr_Brzyski.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/pbrzyski/',
      bio: 'Założyciel Zetatech, firmy wdrażającej innowacyjne rozwiązania AI dla klientów korporacyjnych. Z ponad 16-letnim doświadczeniem w branży IT, koncentruję się na odpowiedzialnym wdrażaniu AI i etyce. Jako doradca polskiego Ministerstwa Cyfryzacji poprzez GRAI oraz uczestnik konsultacji Aktu w sprawie AI na poziomie UE, pomagam kształtować przyszłość regulacji AI na poziomie krajowym i europejskim. Moja specjalizacja obejmuje etyczną AI, zarządzanie i nowe technologie. Aktywnie wspieram społeczność AI_Devs, łącząc się z ponad 3000 deweloperami rozwijających ekosystem AI w Polsce. Pasjonuję się wykorzystywaniem technologii do napędzania transformacji biznesowej i innowacji.',
      bioEN: "Founder of Zetatech, implementing innovative AI solutions for corporate clients. With over 16 years of IT experience, I focus on responsible AI implementation and ethics. As an advisor to the Polish Ministry of Digital Affairs through GRAI and a contributor to EU-level AI Act consultations, I help shape the future of AI regulation at national and European levels. My expertise spans ethical AI, governance, and emerging technologies. I'm an active supporter of the AI_Devs community, connecting with 3,000+ developers advancing the AI ecosystem in Poland. Passionate about leveraging technology to drive business transformation and innovation."
    },
    { 
      name: 'Paweł Dudko', 
      role: 'Radca Prawny', 
      roleEN: 'Attorney-at-law',
      image: '/team/Pawel_Dudko.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/pawe%C5%82-dudko-1b99481b3/',
      bio: 'Współpracuje z STX Next oraz Trenda Group. Od 8 lat związany z branżą nowych technologii, w tym jako prawnik wewnętrzny w spółce programistycznej. Aktualnie pełni obowiązki Head of Legal. Świadczy pomoc prawną w m.in. następujących obszarach: negocjowanie umów dotyczących rozwoju oprogramowania, tworzenie wewnętrznych polityk z zakresu compliance, bieżące doradztwo i opiniowanie nowatorskich rozwiązań technologicznych. Autor licznych publikacji popularnonaukowych (IT Professional, Rzeczpospolita).',
      bioEN: 'He collaborates with STX Next and Trenda Group. He has been involved in the new technologies sector for eight years, including working as in-house counsel at a software development company. He currently serves as Head of Legal. He provides legal support in areas such as negotiating software development agreements, drafting internal compliance policies, and offering ongoing advice and opinions on innovative technological solutions. He is the author of numerous popular science publications (IT Professional, Rzeczpospolita).'
    },
    { 
      name: 'Łukasz Grzybowski', 
      role: 'AI & Innovation Lead', 
      roleEN: 'AI & Innovation Lead',
      image: '/team/Lukasz_Grzybowski.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/lukasz-grzybowski/',
      bio: 'Lider w obszarze sztucznej inteligencji i strateg innowacji z bogatym doświadczeniem w tworzeniu i skalowaniu rozwiązań opartych na AI w sektorach cyberbezpieczeństwa, marketplace i usług IT. Jest współautorem interdyscyplinarnych badań z zakresu sztucznej inteligencji, modelowania wiedzy medycznej oraz technologii chemicznych, w tym opatentowanej innowacji z zakresu zielonej chemii, nagrodzonej na arenie międzynarodowej. Jako współzałożyciel ARAAI i Product Cafe promuje etyczne wykorzystanie AI oraz buduje społeczności łączące świat produktu, technologii i biznesu w całej Polsce.',
      bioEN: 'He is an AI leader and innovation strategist with a strong track record in building and scaling AI-driven solutions across cybersecurity, online marketplaces, and IT services. He has co-authored interdisciplinary research in artificial intelligence, medical knowledge modeling, and sustainable chemical technologies, including a patented green-chemistry innovation recognized internationally. As co-founder of ARAAI and Product Cafe, he fosters ethical AI adoption and builds communities that connect product, technology, and business across Poland.'
    },
    { 
      name: 'Jędrzej Jakubowicz', 
      role: 'Dr nauk prawnych, Adwokat', 
      roleEN: 'PhD in Law, Attorney-at-law',
      image: '/team/Jedrzej_Jakubowicz.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/dr-j%C4%99drzej-jakubowicz-7101613b/',
      bio: 'Adwokat, wspólnik w Trenda Group. Specjalizuje się w konstruowaniu, negocjowaniu, wykładni oraz wykonaniu umów, ze szczególnym uwzględnieniem umów związanych z transakcjami, IT, projektami wieloaspektowymi oraz projektami związanymi z komercjalizacją know-how.\n\nDoradza strategicznie na każdym etapie biznesu, w tym przy analizie prawnej możliwości komercjalizacji danego przedsięwzięcia. Posiada bogate doświadczenie zawodowe w obszarze transakcji zarówno po stronie kupujących jak i sprzedających. Zajmuje się doradztwem zarządom spółek, radom nadzorczym oraz udziałowcom. Jest wieloletnim doradcą rad nadzorczych spółek, w tym spółek publicznych i z udziałem jednostek publicznych. Wykładowca z zakresu prawa spółek, prawa rynków kapitałowych, prawa cywilnego i prawa podatkowego.',
      bioEN: 'Attorney-at-law, partner at Trenda Group. Specializes in constructing, negotiating, interpreting, and executing contracts, with a particular focus on agreements related to transactions, IT, multi-faceted projects, and know-how commercialization projects.\n\nProvides strategic advice at every stage of business, including legal analysis of the commercialization potential of specific ventures. Has extensive professional experience in transactions, working with both buyers and sellers. Advises company boards, supervisory boards, and shareholders. A long-time advisor to company supervisory boards, including public companies and those with public entity participation. Lecturer in corporate law, capital market law, civil law, and tax law.'
    },
    { 
      name: 'Krzysztof Jędrzejewski',
      role: 'Ekspert, lider i twórca społeczności AI', 
      roleEN: 'AI expert, leader and community builder',
      image: '/team/Krzysztof_Jedrzejewski.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/kjedrzejewski/',
      bio: 'Posiada ponad 10-letnie doświadczenie w dziedzinach Data Science, ML i AI, zbudowane na solidnym fundamencie 5 lat w rozwoju oprogramowania. Obecnie kieruje jednostką badawczo-rozwojową AI w Pearson. Jego zespół rozwija innowacyjne algorytmy AI, które wzbogacają platformy i aplikacje e-learningowe o nowe, zaawansowane funkcjonalności.\n\nOprócz roli zawodowej, aktywnie działa w społeczności akademickiej jako wykładowca studiów podyplomowych na Uniwersytecie im. Adama Mickiewicza w Poznaniu. Jest również założycielem Horyzontu Danych, inicjatywy mającej na celu wspieranie lokalnej społeczności technologicznej w zakresie AI, ML, inżynierii danych i MLOps. Ponadto uczestniczy w projekcie Bielik, społeczności skupionej na budowaniu polskiego LLM.',
      bioEN: 'Has over 10 years of experience in Data Science, ML, and AI, built on a solid foundation of 5 years in software development. Currently leads the AI R&D unit at Pearson. His team develops innovative AI algorithms that enhance e-learning platforms and applications with new, advanced functionalities.\n\nBeyond his professional role, he actively contributes to the academic community as a lecturer for postgraduate studies at Adam Mickiewicz University in Poznań. He is also the founder of Poznan Data Horizon, an initiative aimed at supporting the local technology community in AI, ML, data engineering, and MLOps. Additionally, he participates in the Bielik project, a community focused on building a Polish LLM.'
    },
    {
      name: 'Adam Karolewski',
      role: 'Forecasting Manager / AIrrival',
      roleEN: 'Forecasting Manager / AIrrival',
      image: '/team/Adam_Karolewski.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/adam-karolewski/',
      bio: 'Projektant procesów uczenia maszynowego, Data Scientist i programista R. Specjalizuje się we wdrażaniu uczenia maszynowego w zarządzaniu łańcuchem dostaw. Wykładowca na lokalnych uniwersytetach w zakresie uczenia maszynowego dla łańcucha dostaw i logistyki.\n\nWnosi innowacje poprzez łączenie prognozowania opartego na uczeniu maszynowym z teorią zarządzania zapasami. Tłumaczy prognozowanie szeregów czasowych na poziom zapasów, który najlepiej służy procesom sprzedaży. Zajmuje się projektowaniem i realizacją aplikacji. Koncentruje się na uczeniu maszynowym, modelowaniu statystycznym, wizualizacji danych i eksploracji danych, osadzając zaawansowaną analitykę w organizacji z podejściem opartym na danych.',
      bioEN: 'Machine Learning Process Designer, Data Scientist, and R programmer. Specializes in implementing machine learning in supply chain management. Lecturer at local universities on machine learning for supply chain and logistics.\n\nInnovates by combining machine learning-based forecasting with inventory management theory. Translates time series forecasting into inventory levels that best serve sales processes. Focuses on application design and implementation. Concentrates on machine learning, statistical modeling, data visualization, and data exploration, embedding advanced analytics in organizations with a data-driven approach.'
    }
  ];

  const auditCommittee = [
    { 
      name: 'Anna Proch', 
      role: 'Członek Komisji Rewizyjnej', 
      roleEN: 'Audit Committee Member',
      image: '/team/Anna_Proch.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/annaproch/',
      bio: 'Anna Proch specjalizuje się w doradztwie biznesowym i AI, walidacji koncepcji, projektowaniu rozwiązań cyfrowych oraz strategiach marketingowych, łącząc innowacyjność z praktycznością. Anna pasjonuje się upraszczaniem skomplikowanych zagadnień i inspiruje ją praca z produktami, które kwestionują status quo. Jej portfolio obejmuje współpracę z firmami takimi jak Amazon, Mercedes oraz wieloma dynamicznymi startupami.',
      bioEN: 'Anna Proch specializes in business and AI consulting, concept validation, digital solution design, and marketing strategies, combining innovation with practicality. Anna is passionate about simplifying complicated issues and is inspired by working with products that challenge the status quo. Her portfolio includes collaboration with companies like Amazon, Mercedes, and multiple dynamic startups.'
    },
    { 
      name: 'Jędrzej Wydra', 
      role: 'Członek Komisji Rewizyjnej, UAM', 
      roleEN: 'Audit Committee Member, AMU',
      image: '/team/Jedrzej_Wydra.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/j%C4%99drzej-wydra-3b12b4232/',
      bio: 'Jako "podwójny magister" prawa i matematyki, zajmuję się naukami sądowymi. Moje badania skupiają się na szacowaniu czasu zgonu i narzędziach wspomagających ekspertów sądowych. Jako data scientist, wdrażam AI w praktyce prawniczej.',
      bioEN: 'As a "double master" in law and mathematics, I focus on forensic science, particularly on time of death estimation tools for judges and forensic experts. As a data scientist, I work on integrating AI into legal practice.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Full Name Section */}
      <section className="py-8 sm:py-12 bg-white border-b-2 border-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-dark-950">
            {currentLanguage === 'en' ? t('about.fullName.english') : t('about.fullName.polish')}
          </h1>
        </div>
      </section>

      {/* Nasza Wizja Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-8 text-primary-400">
            {t('about.vision.title')}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg font-signika text-gray-300 leading-relaxed">
              {t('about.vision.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Cele stowarzyszenia Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-dark-950 mb-8">
              {t('about.goals.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6">
              {leftGoals.map((goal: string, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-primary-400 mt-0 flex-shrink-0 text-3xl font-black leading-none">→</div>
                  <p className="text-dark-700 font-signika leading-relaxed text-base sm:text-lg">
                    {goal}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {rightGoals.map((goal: string, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-primary-400 mt-0 flex-shrink-0 text-3xl font-black leading-none">→</div>
                  <p className="text-dark-700 font-signika leading-relaxed text-base sm:text-lg">
                    {goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zarząd ARAAI Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with same width as grid */}
          <div className="w-full bg-primary-400 text-dark-950 py-4 mb-12 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-center">
              {t('about.team.board.title')}
            </h2>
          </div>

          {/* First row - 4 people */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {boardMembers.slice(0, 4).map((member, index) => (
              <div 
                key={index} 
                className="text-center cursor-pointer bg-white rounded-lg p-4 hover:bg-dark-950 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/team/placeholder.png';
                    }}
                  />
                </div>
                <h3 className="font-montserrat font-bold text-dark-950 group-hover:text-white text-xl sm:text-2xl transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-signika text-primary-400 group-hover:text-primary-300 text-xs sm:text-sm transition-colors duration-300">
                  {currentLanguage === 'en' ? member.roleEN : member.role}
                </p>
              </div>
            ))}
          </div>

          {/* Second row - 3 people */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {boardMembers.slice(4, 7).map((member, index) => (
              <div
                key={index + 4}
                className="text-center cursor-pointer bg-white rounded-lg p-4 hover:bg-dark-950 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/team/placeholder.png';
                    }}
                  />
                </div>
                <h3 className="font-montserrat font-bold text-dark-950 group-hover:text-white text-xl sm:text-2xl transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-signika text-primary-400 group-hover:text-primary-300 text-xs sm:text-sm transition-colors duration-300">
                  {currentLanguage === 'en' ? member.roleEN : member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Komisja Rewizyjna Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with same width as grid */}
          <div className="w-full bg-primary-400 text-dark-950 py-4 mb-12 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-center">
              {t('about.team.audit.title')}
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-8 sm:gap-12 max-w-md">
              {auditCommittee.map((member, index) => (
                <div 
                  key={index} 
                  className="text-center cursor-pointer bg-white rounded-lg p-6 hover:bg-dark-950 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl group"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/team/placeholder.png';
                      }}
                    />
                  </div>
                  <h3 className="font-montserrat font-bold text-dark-950 group-hover:text-white text-xl sm:text-2xl transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="font-signika text-primary-400 group-hover:text-primary-300 text-xs sm:text-sm transition-colors duration-300">
                    {currentLanguage === 'en' ? member.roleEN : member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-950 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              {/* Close button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="float-right text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
              
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-48 h-48 object-cover rounded-lg mx-auto md:mx-0"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/team/placeholder.png';
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-white">
                      {selectedMember.name}
                    </h3>
                    {/* LinkedIn Icon */}
                    {selectedMember.linkedinUrl && (
                      <a 
                        href={selectedMember.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-500 transition-colors duration-200"
                        style={{ color: '#0077B5' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#005885'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#0077B5'}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-primary-300 font-signika font-semibold mb-4">
                    {currentLanguage === 'en' ? selectedMember.roleEN : selectedMember.role}
                  </p>
                  <p className="text-gray-300 font-signika leading-relaxed whitespace-pre-line text-base sm:text-lg">
                    {currentLanguage === 'en' ? selectedMember.bioEN : selectedMember.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About; 
