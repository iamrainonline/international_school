import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { t } = useTranslation("Home");

  return (
    <div>
      <h1>Homepage</h1>
      <button>{t("homeButton")}</button>
    </div>
  );
};

export default Homepage;
