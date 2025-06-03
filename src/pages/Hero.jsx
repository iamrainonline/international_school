import { useTranslation } from "react-i18next";
import graduationImg from "../../src/assets/images/graduation.jpg";

const Hero = () => {
  const { t } = useTranslation();

  const heroContent = {
    title: t("Shaping Global Citizens"),
    subtitle: t("Excellence in International Education Since 1995"),
    description: t(
      "Discover a world-class education that prepares students for success in an interconnected world. Our innovative curriculum combines academic rigor with cultural understanding."
    ),
    stats: { students: "850+", countries: "45+", graduates: "2,500+" },
  };

  return (
    <section className="pt-10 relative h-[90vh] overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={graduationImg}
          alt="Graduation ceremony"
          className="w-full h-full object-cover"
        />
        {/* Dimmed overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <div className="text-white space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IS</span>
                </div>
                <div className="h-px bg-blue-400 flex-1 max-w-24"></div>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-white">{heroContent.title}</span>
              </h1>

              <h2 className="text-xl lg:text-2xl text-blue-200 font-medium">
                {heroContent.subtitle}
              </h2>

              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                {heroContent.description}
              </p>

              {/* Statistics */}
              <div className="flex flex-wrap gap-8 py-6">
                {Object.entries(heroContent.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-blue-400">
                      {value}
                    </div>
                    <div className="text-sm text-slate-300 capitalize">
                      {t(key)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  <svg
                    className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("Apply Now")}
                </button>

                <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center group">
                  <svg
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
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
                  {t("Download Brochure")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8  z-20">
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

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-30">
        <button className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group">
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
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
    </section>
  );
};

export default Hero;
