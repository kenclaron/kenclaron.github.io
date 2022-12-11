import { useTranslation } from "react-i18next";

import { DEVICE, Theme } from "themes";
import useRipple from "use-ripple-hook";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import OpenGraph from "api/opengraph";

import { Chip } from "components/atoms/Chips";
import { Image } from "components/atoms/Image";
import { Link } from "components/atoms/Link";
import { Stack } from "components/atoms/Stack";
import { Text } from "components/atoms/Text";
import OpenIcon from "components/icons/OpenIcon";
import StarIcon from "components/icons/StarIcon";
import TimeIcon from "components/icons/TimeIcon";

import { Color } from "utils/color";
import { Repositories } from "utils/types/github.type";

interface ProjectProps {
  id: string;
  repository: Repositories[number];
  visible: boolean;
}

export function Project({ id, repository, visible }: ProjectProps) {
  const theme: Theme = useTheme();
  const { t, i18n } = useTranslation();
  const [ripple, event] = useRipple({ color: "rgba(255, 255, 255, 0.5)" });

  const name = repository.name
    .replace(/(-)|(.js)/g, " ")
    .replace(/( |^)[а-яёa-z]/g, (char) => {
      return char.toUpperCase();
    });

  const description = repository.description;
  const stars = repository.stargazers_count;
  const homepage = repository.homepage;
  const time = (
    <time
      dateTime={repository.created_at?.slice(0, 10)}
      style={{ fontSize: 14 }}
    >
      {new Date(repository.created_at || "").toLocaleDateString(i18n.language)}
    </time>
  );

  return (
    <LinkContainer
      href={repository.html_url}
      target="_blank"
      ref={ripple}
      onMouseDown={event}
      hidden={visible}
    >
      <Container id={id} min-height={384} justifyContent="center">
        <Picture>
          <Image
            src={OpenGraph.getImageURL(repository.html_url)}
            alt={repository.name}
          />
        </Picture>
        <Title>{name}</Title>
        <Content style={{ textAlign: "justify" }}>{description}</Content>
        {repository.language && (
          <Stack style={{ padding: "16px 24px 0", flexWrap: "wrap", gap: 8 }}>
            <Chip style={{ padding: "8px 16px", width: "fit-content" }}>
              {repository.language}
            </Chip>
          </Stack>
        )}
        <Stack
          $direction="row"
          style={{
            padding: "16px 24px 0",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Stack $direction="row" style={{ gap: 16 }}>
            <IconItem>
              <TimeIcon color={theme.colors.typography.primary} size={24} />
              {time}
            </IconItem>
            {!!stars && (
              <IconItem>
                <StarIcon color={theme.colors.typography.primary} size={24} />
                <Text $variant="inline" style={{ fontSize: 14 }}>
                  {stars}
                </Text>
              </IconItem>
            )}
          </Stack>
          {homepage && (
            <LinkExternal
              as="button"
              onClick={(event) => {
                window.open(homepage, "_blank");
                event.preventDefault();
              }}
              type="button"
            >
              <IconItem>
                <Text $variant="inline" style={{ fontSize: 14 }}>
                  {t("cards.projects.homepage")}
                </Text>
                <OpenIcon color={theme.colors.typography.primary} size={24} />
              </IconItem>
            </LinkExternal>
          )}
        </Stack>
      </Container>
    </LinkContainer>
  );
}

const IconItem = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const LinkContainer = styled(Link)`
  border-radius: 24px;
  text-decoration: none;
  transition: ${(props: any) => props.theme.transitions.standard};

  @media ${DEVICE.tablet} {
    border-radius: 24px;
  }

  &:hover {
    border-radius: 16px;
    text-decoration: none;

    * {
      text-decoration: none;
    }
  }

  &:active {
    border-radius: 8px;
  }
`;

export const LinkExternal = styled(Link)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: transparent;
  border: transparent;
  cursor: pointer;

  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid
      ${(props: any) => props.theme.colors.typography.primary};
    text-decoration: none !important;
  }

  &:hover * {
    text-decoration: none !important;
  }
`;

export const Title = styled.h2`
  font-size: ${(props: any) => props.theme.typography.h6};
  margin: 24px 0 0;
  transition: ${(props: any) => props.theme.transitions.standard};

  @media ${DEVICE.tablet} {
    font-size: ${(props: any) => props.theme.typography.subtitle};
  }

  @media ${DEVICE.mobile} {
    transition: none;
    font-size: ${(props: any) => props.theme.typography.subtitle};
  }
`;

export const Content = styled.p`
  font-size: ${(props: any) => props.theme.typography.body1};
  margin: 0;
  transition: ${(props: any) => props.theme.transitions.standard};

  @media ${DEVICE.tablet} {
    font-size: ${(props: any) => props.theme.typography.body2};
  }

  @media ${DEVICE.mobile} {
    transition: none;
    font-size: ${(props: any) => props.theme.typography.body2};
  }
`;

export const Container: any = styled.article`
  background: ${(props: any) => props.theme.colors.accent.primary.inactive};
  border-radius: 24px;
  box-sizing: border-box;
  color: ${(props: any) => props.theme.colors.typography.primary};
  cursor: pointer;
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto 1fr;
  height: 100%;
  justify-content: flex-start;
  overflow-wrap: break-word;
  padding: 0 0 24px 0;
  position: relative;
  transition: ${(props: any) => props.theme.transitions.standard};
  width: 100%;

  @media ${DEVICE.tablet} {
    border-radius: 24px;
  }

  & > *:not(picture) {
    padding: 0 24px;
  }

  &:hover,
  &:hover > picture,
  &:focus,
  &:focus > picture,
  &:focus-within,
  &:focus-within > picture,
  &:focus-visible,
  &:focus-visible > picture {
    border-radius: 16px;
  }

  &:active,
  &:active > picture {
    border-radius: 8px;
  }

  &:hover,
  &:focus,
  &:focus-within,
  &:focus-visible {
    box-shadow: ${(props: any) => props.theme.shadow};
    background-color: ${(props: any) =>
      Color.mix(
        props.theme.colors.accent.primary.inactive,
        props.theme.colors.accent.primary.hovered
      )};
  }

  &:active {
    box-shadow: ${(props: any) => props.theme.shadow};
    background-color: ${(props: any) =>
      Color.mix(
        props.theme.colors.accent.primary.inactive,
        props.theme.colors.accent.primary.pressed
      )};
  }
`;

export const Picture = styled.picture`
  background-color: ${(props: any) => props.theme.colors.status.neutral};
  border-radius: 24px;
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 50%;
  position: relative;
  transition: ${(props: any) => props.theme.transitions.standard};
  width: 100%;

  @media ${DEVICE.tablet} {
    border-radius: 24px;
  }
`;
