import { useTranslation } from "react-i18next";

const OurSchool = () => {
  const { t } = useTranslation();

  const gridItems = [
    {
      id: 1,
      title: t("Modern Learning Environments"),
      description: t(
        "State-of-the-art classrooms equipped with interactive whiteboards, flexible seating arrangements, and cutting-edge technology that adapts to every learning style."
      ),
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
      gridClass: "col-span-2 row-span-2",
      bgColor: "bg-white",
      textColor: "text-slate-900",
    },
    {
      id: 2,
      title: t("Science Laboratories"),
      description: t(
        "Fully equipped labs for chemistry, physics, and biology with professional-grade equipment."
      ),
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
      gridClass: "col-span-2 row-span-1",
      bgColor: "bg-slate-900",
      textColor: "text-white",
    },
    {
      id: 3,
      title: t("Digital Library"),
      description: t(
        "Extensive collection of books, digital resources, and quiet study spaces."
      ),
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      gridClass: "col-span-1 row-span-1",
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
    {
      id: 4,
      title: t("Athletic Complex"),
      description: t(
        "Professional sports facilities including gymnasium, swimming pool, and outdoor courts for comprehensive physical education."
      ),
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      gridClass: "col-span-1 row-span-2",
      bgColor: "bg-slate-800",
      textColor: "text-white",
    },
    {
      id: 5,
      title: t("Creative Arts Studio"),
      description: t(
        "Inspiring spaces for visual arts, music, drama, and multimedia production."
      ),
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      gridClass: "col-span-2 row-span-1",
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
    {
      id: 6,
      title: t("Dining Hall"),
      description: t(
        "Spacious cafeteria serving healthy international cuisine in a welcoming environment."
      ),
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      gridClass: "col-span-1 row-span-1",
      bgColor: "bg-white",
      textColor: "text-slate-900",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">OS</span>
            </div>
            <div className="h-px bg-blue-400 w-24"></div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              {t("Our School")}
            </h1>
            <div className="h-px bg-blue-400 w-24"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t(
              "Discover the spaces where innovation meets education, designed to inspire excellence in every student."
            )}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr mb-20">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className={`${item.gridClass} group relative overflow-hidden rounded-2xl cursor-pointer border border-slate-200`}
              style={{ minHeight: "280px" }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Color Overlay */}
              <div
                className={`absolute inset-0 ${item.bgColor} opacity-85`}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col justify-end">
                <h3
                  className={`text-xl lg:text-2xl font-bold ${item.textColor} mb-3 leading-tight`}
                >
                  {item.title}
                </h3>
                <p
                  className={`${item.textColor} opacity-90 text-sm lg:text-base leading-relaxed`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { number: "850+", label: t("Students Enrolled") },
            { number: "45", label: t("Countries Represented") },
            { number: "98%", label: t("University Acceptance") },
            { number: "30+", label: t("Years of Excellence") },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm lg:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {t("Experience Our Campus")}
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              {t(
                "Schedule a personalized tour to see how our facilities support exceptional learning outcomes."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8h1m4 0h1"
                  />
                </svg>
                {t("Schedule Tour")}
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                {t("View Virtual Tour")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSchool;
