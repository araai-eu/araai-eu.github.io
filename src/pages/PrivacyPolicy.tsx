import { useTranslation } from 'react-i18next';

function PrivacyPolicy() {
  const { i18n } = useTranslation();
  const isPolish = i18n.language === 'pl';

  return (
    <div className="min-h-screen bg-dark-950 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-12 text-white">
          {isPolish ? 'Klauzula informacyjna' : 'Information clause'}
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {isPolish ? (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Klauzula informacyjna</h2>
              
              <p className="mb-4 text-gray-700 leading-relaxed">
                Zgodnie z art. 13 ust. 1 i 2 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dz. Urz. UE L z 2016 r. Nr 119, s. 1 z późn. zm.) – dalej: „RODO" – informujemy, że:
              </p>

              <ol className="space-y-4 text-gray-700">
                <li className="leading-relaxed">
                  <strong>1.</strong> Administratorem danych osobowych jest Stowarzyszenie Badań i Zastosowań Sztucznej Inteligencji (Association for Research and Applications of Artificial Intelligence; dalej: „Stowarzyszenie") z siedzibą przy ul. Młyńskiej 14/3, 61-730 Poznań, e-mail: <a href="mailto:office@araai.org" className="text-primary-600 hover:text-primary-700 underline">office@araai.org</a>.
                </li>
                
                <li className="leading-relaxed">
                  <strong>2.</strong> Administrator danych będzie przetwarzał dane osobowe pochodzące bezpośrednio od osób wypełniających formularz zgłoszeniowy w celu przystąpienia do Stowarzyszenia, w szczególności: imię i nazwisko, numer telefonu oraz adres e-mail.
                </li>
                
                <li className="leading-relaxed">
                  <strong>3.</strong> Dane osobowe będą przetwarzane w celu realizacji praw i obowiązków wynikających z członkostwa w Stowarzyszeniu. Podanie tych danych jest konieczne w celu realizacji statusu członka Stowarzyszenia.
                </li>
                
                <li className="leading-relaxed">
                  <strong>4.</strong> Podstawą prawną do przetwarzania danych osobowych jest:
                  <ul className="mt-2 ml-6 space-y-2">
                    <li>• art. 6 ust. 1 lit. c RODO, tj. obowiązek prawny ciążący na Stowarzyszeniu w postaci obowiązku archiwizacji dokumentacji na podstawie obowiązujących przepisów dla celów podatkowych i rachunkowych;</li>
                    <li>• art. 6 ust. 1 lit. f RODO, tj. prawnie uzasadniony interes Stowarzyszenia polegający na realizacji jego działalności statutowej.</li>
                  </ul>
                </li>
                
                <li className="leading-relaxed">
                  <strong>5.</strong> Administrator nie pozyskuje danych osobowych od podmiotów trzecich lub ze źródeł powszechnie dostępnych i przetwarza wyłącznie dane podane przez Panią/Pana w celu realizacji celu opisanego w pkt. 3 powyżej.
                </li>
                
                <li className="leading-relaxed">
                  <strong>6.</strong> Dane osobowe będą przechowywane przez okres niezbędny do realizacji celu, dla którego zostały zebrane oraz przez okres archiwizacyjny zgodnie z obowiązującymi przepisami prawa.
                </li>
                
                <li className="leading-relaxed">
                  <strong>7.</strong> Dane osobowe mogą być przekazywane organom publicznym, które są uprawnione do otrzymywania danych osobowych w ramach konkretnego postępowania zgodnie z prawem unijnym lub krajowym. Ponadto mogą być przekazywane podmiotom świadczącym usługi księgowe na rzecz Stowarzyszenia oraz usługi wsparcia IT, jak również podmiotom współpracującym ze Stowarzyszeniem w zakresie jego działalności statutowej m.in. przy organizacji wydarzeń i innych działań Stowarzyszenia.
                </li>
                
                <li className="leading-relaxed">
                  <strong>8.</strong> Dane osobowe nie będą przekazywane do państwa trzeciego lub organizacji międzynarodowej oraz nie będą przetwarzane w sposób zautomatyzowany i nie będą poddawane profilowaniu, stosownie do art. 22 RODO.
                </li>
                
                <li className="leading-relaxed">
                  <strong>9.</strong> Przysługuje Pani/Panu prawo dostępu do swoich danych oraz ich sprostowania, usunięcia, ograniczenia przetwarzania, a także prawo do przenoszenia danych, wniesienia sprzeciwu wobec przetwarzania danych oraz cofnięcia zgody na przetwarzanie danych w dowolnym momencie. Wskazane powyżej uprawnienia można wykonać poprzez wysłanie wiadomości z treścią żądania na adres e-mail: <a href="mailto:office@araai.org" className="text-primary-600 hover:text-primary-700 underline">office@araai.org</a>.
                </li>
                
                <li className="leading-relaxed">
                  <strong>10.</strong> Niezależnie od powyższego, przysługuje także prawo wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych – w przypadku stwierdzenia, że dane osobowe są przetwarzane sprzecznie z prawem.
                </li>
              </ol>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Information Clause</h2>
              
              <p className="mb-4 text-gray-700 leading-relaxed">
                In accordance with Article 13(1) and (2) of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation) – hereinafter: "GDPR" – we hereby inform you that:
              </p>

              <ol className="space-y-4 text-gray-700">
                <li className="leading-relaxed">
                  <strong>1.</strong> The controller of personal data is the Association for Research and Applications of Artificial Intelligence (hereinafter: "Association") with its registered office at ul. Młyńska 14/3, 61-730 Poznań, email: <a href="mailto:office@araai.org" className="text-primary-600 hover:text-primary-700 underline">office@araai.org</a>.
                </li>
                
                <li className="leading-relaxed">
                  <strong>2.</strong> The data controller will process personal data obtained directly from persons filling out the application form to join the Association, in particular: name and surname, telephone number and email address.
                </li>
                
                <li className="leading-relaxed">
                  <strong>3.</strong> Personal data will be processed for the purpose of exercising rights and obligations arising from membership in the Association. Providing this data is necessary to realize the status of a member of the Association.
                </li>
                
                <li className="leading-relaxed">
                  <strong>4.</strong> The legal basis for processing personal data is:
                  <ul className="mt-2 ml-6 space-y-2">
                    <li>• Article 6(1)(c) of the GDPR, i.e., legal obligation incumbent on the Association in the form of the obligation to archive documentation based on applicable regulations for tax and accounting purposes;</li>
                    <li>• Article 6(1)(f) of the GDPR, i.e., legitimate interest of the Association consisting in carrying out its statutory activities.</li>
                  </ul>
                </li>
                
                <li className="leading-relaxed">
                  <strong>5.</strong> The administrator does not obtain personal data from third parties or from publicly available sources and processes only the data provided by you for the purpose described in point 3 above.
                </li>
                
                <li className="leading-relaxed">
                  <strong>6.</strong> Personal data will be stored for the period necessary to achieve the purpose for which it was collected and for the archival period in accordance with applicable law.
                </li>
                
                <li className="leading-relaxed">
                  <strong>7.</strong> Personal data may be transferred to public authorities that are authorized to receive personal data in specific proceedings in accordance with Union or national law. In addition, they may be transferred to entities providing accounting services for the Association and IT support services, as well as entities cooperating with the Association in the scope of its statutory activities, including in organizing events and other activities of the Association.
                </li>
                
                <li className="leading-relaxed">
                  <strong>8.</strong> Personal data will not be transferred to a third country or international organization and will not be processed in an automated manner and will not be subject to profiling, in accordance with Article 22 of the GDPR.
                </li>
                
                <li className="leading-relaxed">
                  <strong>9.</strong> You have the right to access your data and to rectify, delete, restrict processing, as well as the right to data portability, object to data processing and withdraw consent to data processing at any time. The above rights can be exercised by sending a message with the request to the email address: <a href="mailto:office@araai.org" className="text-primary-600 hover:text-primary-700 underline">office@araai.org</a>.
                </li>
                
                <li className="leading-relaxed">
                  <strong>10.</strong> Regardless of the above, you also have the right to lodge a complaint with the supervisory authority – the President of the Personal Data Protection Office – if you determine that personal data is being processed unlawfully.
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
