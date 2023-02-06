import { useTranslation } from "react-i18next";

import { Theme } from "themes";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import PERSON from "content/person.json";

import { Button } from "components/atoms/Button";
import { Stack } from "components/atoms/Stack";
import EmailIcon from "components/icons/EmailIcon";
import GitHubIcon from "components/icons/GitHubIcon";

import { Color } from "utils/color";

export function Footer() {
  const theme: Theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container>
      <Stack $direction="row" style={{ gap: 16 }}>
        <Button as="a" href={`mailto:${PERSON.email}`} style={{ gap: 12 }}>
          <EmailIcon color={theme.colors.typography.primary} />
          <p>{t("button.email")}</p>
        </Button>
        <Button as="a" href={PERSON.url} target="_blank">
          <GitHubIcon color={theme.colors.typography.primary} />
        </Button>
      </Stack>
    </Container>
  );
}

export const Container = styled.footer`
  &::before {
    content: "";
    background-color: ${(props: any) =>
      Color.mix(
        props.theme.colors.background?.paper,
        props.theme.colors.accent?.primary.inactive
      )};
    border-top-left-radius: 64px;
    border-top-right-radius: 64px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  background-color: ${(props: any) => props.theme.colors.background?.paper};
  display: grid;
  align-items: center;
  justify-items: center;
  height: 50vh;
  max-height: 392px;
  min-height: 196px;
  position: relative;

  & > * {
    position: relative;
  }
`;

export default Footer;
