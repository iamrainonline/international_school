import { useTranslation } from "react-i18next";
import graduationImg from "../../src/assets/images/graduation.jpg";

const Hero = () => {
  const { t } = useTranslation();

  const heroContent = {
    title: t("main_title"),
    subtitle: t("sub_title"),
    description: t("sub_title2"),
    stats: { students: "850+", countries: "45+", graduates: "2,500+" },
  };

  return (
    <section className="pt-16 sm:pt-10 relative min-h-screen sm:h-[90vh] overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={graduationImg}
          alt="Graduation ceremony"
          className="w-full h-full object-cover object-center"
        />
        {/* Mobile-optimized overlay */}
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/85 sm:from-slate-900/90 sm:via-slate-900/80 sm:to-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-0">
          <div className="max-w-full sm:max-w-3xl">
            <div className="text-white space-y-4 sm:space-y-6">
              {/* Logo and divider - optimized for mobile */}
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg sm:text-xl">
                    IS
                  </span>
                </div>
                <div className="h-px bg-blue-400 flex-1 max-w-16 sm:max-w-24"></div>
              </div>

              {/* Main title - responsive typography */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-white">{heroContent.title}</span>
              </h1>

              {/* Subtitle - responsive */}
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-200 font-medium leading-relaxed">
                {heroContent.subtitle}
              </h2>

              {/* Description - mobile optimized */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-full sm:max-w-2xl">
                {heroContent.description}
              </p>

              {/* Statistics - mobile grid layout */}
              <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-8 py-4 sm:py-6">
                {Object.entries(heroContent.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400">
                      {value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 capitalize mt-1">
                      {t(key)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action Buttons - mobile stacked */}
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 pt-2 sm:pt-4">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-xl transition-all duration-300 transform  flex items-center justify-center group">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">{t("apply_now")}</span>
                </button>

                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white bg-white text-slate-900 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center group">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {t("download_brochure")}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile, visible on desktop */}
      <div className="hidden sm:block absolute bottom-8 left-8 z-20">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm font-medium rotate-90 transform origin-center">
            {t("Scroll")}
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Floating Action Button - repositioned for mobile */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-30">
        <button className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-2xl transition-all duration-300 transform  flex items-center justify-center group">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>

      {/* Mobile-specific bottom padding to ensure content is not cut off */}
      <div className="h-8 sm:h-0"></div>
    </section>
  );
};

export default Hero;
