import { useTranslation } from "react-i18next";

import { BREAKPOINTS, Theme } from "themes";
import useBreakpoint from "use-breakpoint";

import { useTheme } from "@emotion/react";
import PERSON from "content/person.json";

import { Button } from "components/atoms/Button";
import { Header as HeaderComponent } from "components/atoms/Header";
import { Heading } from "components/atoms/Heading";
import { Stack } from "components/atoms/Stack";
import ArrowIcon from "components/icons/ArrowIcon";
import EmailIcon from "components/icons/EmailIcon";
import Profile from "components/sections/header/Profile";
import Status from "components/sections/header/Status";

import useScroll from "utils/hooks/useScroll";
import useForceScroll from "utils/hooks/useForceScroll";

function Header() {
  const { t } = useTranslation();
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const { scrollY, innerHeight } = useScroll();
  const {} = useForceScroll();

  const translateY =
    scrollY / innerHeight < 0.6
      ? `translateY(${scrollY * 0.25}px)`
      : `translateY(${innerHeight * 0.15}px)`;

  const theme: Theme = useTheme();

  return (
    <HeaderComponent>
      <Profile />
      <Status />
      <Heading role="banner" style={{ transform: translateY }}>
        {t("person.profession")}
      </Heading>
      <Stack
        $direction="row"
        style={{ gap: 16, position: "absolute", bottom: 64 }}
      >
        <Button as="a" href="#projects-tabs" style={{ gap: 12 }}>
          <ArrowIcon color={theme.colors.typography.primary} />
          {breakpoint !== "xs" && t("button.seemore")}
        </Button>
        <Button as="a" href={`mailto:${PERSON.email}`}>
          <EmailIcon color={theme.colors.typography.primary} />
        </Button>
      </Stack>
    </HeaderComponent>
  );
}

export default Header;
