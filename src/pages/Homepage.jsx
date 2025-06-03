import { useTranslation } from "react-i18next";
import Hero from "./Hero.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
const Homepage = () => {
  const { t } = useTranslation("Home");

  return (
    <div>
      <Hero />
      <About />
      <Contact />
    </div>
  );
};

export default Homepage;
