import { useTranslation } from 'react-i18next';
import { format, parseISO } from 'date-fns';
import { pl, enUS } from 'date-fns/locale';

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  featured: boolean;
}

const News = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as 'pl' | 'en';

  // Get news articles from translations
  const newsArticles: NewsArticle[] = t('news.articlesList', { returnObjects: true }) as NewsArticle[];

  const formatNewsDate = (dateStr: string) => {
    const date = parseISO(dateStr);
    return format(date, 'PPP', { 
      locale: currentLanguage === 'pl' ? pl : enUS 
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-primary-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-montserrat font-bold mb-6 sm:mb-8 leading-tight text-white">
            {t('news.title')}
          </h1>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 sm:space-y-8">
            {newsArticles.map((article) => (
              <article 
                key={article.id} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 border border-gray-200"
              >
                <div className="mb-4">
                  <div className="text-sm font-signika font-semibold mb-2 text-black">
                    {formatNewsDate(article.date)}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-dark-950 mb-4 leading-tight">
                    {article.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 font-signika leading-relaxed mb-6">
                  {article.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News; 