import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export function Meta() {
  const { t, i18n } = useTranslation();

  const language = i18n.languages[1] ? i18n.languages[1] : i18n.languages[0];

  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang: language }}>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
      </Helmet>
    </HelmetProvider>
  );
}

export default Meta;
