import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ukFlag from "./flags/united-kingdom.png";
import romaniaFlag from "./flags/romania.png";

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [activeMenu, setActiveMenu] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef(null);

  // Array of languages
  const languages = [
    { code: "en", name: "English", flag: ukFlag },
    { code: "ro", name: "Română", flag: romaniaFlag },
  ];

  // Get current language or default to first one
  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  // Menu items array
  const menuItems = [
    { id: "Home", label: t("Home") },
    { id: "About", label: t("About") },
    { id: "Programs", label: t("Programs") },
    { id: "Admissions", label: t("Admissions") },
    { id: "Faculty", label: t("Faculty") },
    { id: "Contact", label: t("Contact") },
  ];

  // Handle language change
  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setLangMenuOpen(false);
  };

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full font-sans">
      {/* Main Navbar section with split design */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-teal-500 text-white overflow-hidden">
        {/* Abstract decorative elements */}
        <div className="absolute left-0 top-0 w-full h-full opacity-10 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-yellow-300"></div>
          <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-orange-500"></div>
          <div className="absolute -bottom-32 left-1/4 w-80 h-80 rounded-full bg-emerald-300"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-between items-center min-h-16 py-3">
            {/* Logo - with handwritten style accent */}
            <div className="flex items-center">
              <div className="relative">
                <span className="absolute -top-1 -right-1 transform rotate-12 text-yellow-300 text-xs font-bold">
                  est. 1995
                </span>
                <div className="bg-white rounded-tl-lg rounded-br-lg p-2 shadow-lg transform -rotate-3">
                  <span className="font-bold text-xl text-emerald-700">IS</span>
                </div>
              </div>
              <div className="ml-3 font-bold text-xl">
                <span className="tracking-tight text-white">International</span>
                <span className="tracking-tight text-yellow-300">School</span>
              </div>
            </div>

            {/* Desktop Navigation - Vertical line separator design */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <a
                    href="#"
                    className={`relative px-4 py-2 text-sm font-medium hover:bg-white hover:bg-opacity-10 rounded-md transition-colors ${
                      activeMenu === item.id ? "text-yellow-300" : "text-white"
                    }`}
                    onClick={() => setActiveMenu(item.id)}
                  >
                    {item.label}
                  </a>
                  {index < menuItems.length - 1 && (
                    <div className="h-5 w-px bg-white bg-opacity-30"></div>
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* Right side items */}
            <div className="flex items-center">
              {/* Language Selector */}
              <div className="relative mr-2" ref={langMenuRef}>
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md transition-colors"
                >
                  <img
                    src={currentLanguage.flag}
                    alt={`${currentLanguage.name} flag`}
                    className="w-5 h-3"
                  />
                  <span className="text-sm">{currentLanguage.name}</span>
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-2 flex items-center space-x-3 
                          ${
                            lang.code === i18n.language
                              ? "text-emerald-600 bg-emerald-50"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                      >
                        <img
                          src={lang.flag}
                          alt={`${lang.name} flag`}
                          className="w-5 h-3"
                        />
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Apply button */}
              <a
                href="#"
                className="ml-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-medium rounded-md shadow-md transition-colors"
              >
                {t("Apply Now")}
              </a>

              {/* Mobile menu button */}
              <button
                className="ml-4 lg:hidden p-1 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 bg-white transition-transform duration-300 ${
                      mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                    style={{ width: mobileMenuOpen ? "24px" : "16px" }}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                      mobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 ml-auto bg-white transition-transform duration-300 ${
                      mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                    style={{ width: mobileMenuOpen ? "24px" : "16px" }}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Contact info strip */}
        <div className="bg-emerald-700 text-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between">
            <div className="flex items-center space-x-4">
              <span>+40 123 456 789</span>
              <span>contact@international-school.edu</span>
            </div>
            <div className="hidden sm:block">
              <span>Str. Academiei 14, Alexandria, România</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu - slide in from side */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-emerald-800 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0 shadow-xl" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-8">
            <div className="text-white font-bold text-xl">
              <span>IS</span> <span className="text-yellow-300">Menu</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="mb-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`block px-4 py-3 mb-1 rounded-md text-base font-medium ${
                  activeMenu === item.id
                    ? "bg-emerald-900 text-yellow-300"
                    : "text-white hover:bg-emerald-700"
                }`}
                onClick={() => {
                  setActiveMenu(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile language selector */}
          <div className="mb-6 px-4">
            <p className="text-white opacity-80 mb-2">Language</p>
            <div className="flex space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`px-3 py-2 flex items-center space-x-2 rounded-md ${
                    lang.code === i18n.language
                      ? "bg-emerald-600 text-white"
                      : "bg-emerald-700 text-white opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={lang.flag}
                    alt={`${lang.name} flag`}
                    className="w-5 h-3"
                  />
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile apply button */}
          <div className="px-4">
            <a
              href="#"
              className="block w-full text-center px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-medium rounded-md shadow-md"
            >
              {t("Apply Now")}
            </a>
          </div>

          {/* Mobile contact info */}
          <div className="mt-8 px-4 text-white opacity-80 text-sm space-y-2">
            <p>+40 123 456 789</p>
            <p>contact@international-school.edu</p>
            <p>Str. Academiei 14, Alexandria, România</p>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
