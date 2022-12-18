import { useTranslation } from "react-i18next";

import { DEVICE } from "themes";

import styled from "@emotion/styled";
import PERSON from "content/person.json";

import { CardInformation } from "components/sections/content/Cards";

export function About() {
  const { t } = useTranslation();

  return (
    <GridCards as="section" id="about-me" aria-label={t("cards.whoami.title")}>
      <CardInformation
        content={t("cards.whoami.content")}
        title={t("cards.whoami.title")}
      />
      <CardInformation
        chips={PERSON.languages}
        title={t("cards.languages.title")}
      />
      <CardInformation
        chips={PERSON.frameworks}
        title={t("cards.frameworks.title")}
      />
      <CardInformation chips={PERSON.tools} title={t("cards.tools.title")} />
    </GridCards>
  );
}

export default About;

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  width: 100%;

  @media ${DEVICE.semilaptop} {
    grid-template-columns: 1fr;
  }
`;
