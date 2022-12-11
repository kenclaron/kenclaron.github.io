import { DEVICE } from "themes";

import { Chip } from "../../atoms/Chips";
import { Stack } from "../../atoms/Stack";
import styled from "@emotion/styled";

interface CardProps {
  title: string;
  content?: string;
}

type CardInformationProps = CardProps & { chips?: string[] };

export function CardInformation({
  title,
  content,
  chips,
}: CardInformationProps) {
  return (
    <Container justifyContent="flex-start">
      <Title>{title}</Title>
      <Content>{content}</Content>
      {chips && (
        <ChipRow>
          {chips?.map((chip, index) => (
            <Chip key={index}>{chip}</Chip>
          ))}
        </ChipRow>
      )}
    </Container>
  );
}

const ChipRow = styled(Stack)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 512px;
`;

const Container: any = styled.article`
  position: relative;
  background: ${(props: any) => props.theme.colors.accent.primary.inactive};
  ${(props: any) =>
    props["background-image"] &&
    "background-image: " + props["background-image"]};
  ${(props: any) =>
    props["min-height"] && "min-height: " + props["min-height"]};
  color: ${(props: any) => props.theme.colors.typography.primary};
  padding: 8px;
  border-radius: 48px;
  padding: 32px 40px 48px 64px;
  width: 100%;
  box-sizing: border-box;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${(props: any) =>
    props["justifyContent"] && "justify-content: " + props["justifyContent"]};
  transition: ${(props: any) => props.theme.transitions.standard};

  & > * {
    position: relative;
  }

  @media ${DEVICE.laptop} {
    min-height: fit-content;
    padding: 32px 26px 48px 36px;
  }

  @media ${DEVICE.tablet} {
    border-radius: 24px;
  }

  @media ${DEVICE.mobile} {
    padding: 20px 36px 36px;
  }
`;

const Title = styled.h2`
  font-size: ${(props: any) => props.theme.typography.h2};
  margin: 16px 0 24px;
  transition: ${(props: any) => props.theme.transitions.standard};

  @media ${DEVICE.desktop} {
    font-size: ${(props: any) => props.theme.typography.h3};
  }

  @media ${DEVICE.laptop} {
    font-size: ${(props: any) => props.theme.typography.h3};
  }

  @media ${DEVICE.mobile} {
    transition: none;
    font-size: ${(props: any) => props.theme.typography.subtitle};
  }
`;

const Content = styled.p`
  font-size: ${(props: any) => props.theme.typography.h6};
  margin: 0;
  max-width: ${(props: any) =>
    props["maxWidth"] ? props["maxWidth"] : "100%"};
  transition: ${(props: any) => props.theme.transitions.standard};

  @media ${DEVICE.laptop} {
    font-size: ${(props: any) => props.theme.typography.subtitle};
  }

  @media ${DEVICE.mobile} {
    transition: none;
    font-size: ${(props: any) => props.theme.typography.body1};
  }
`;

type CardHeaderProps = CardProps & { id?: string; icon?: JSX.Element };

export function CardHeader(props: CardHeaderProps) {
  return (
    <Container id={props.id} min-height={384} justifyContent="center">
      {props.icon && <IconWrapper>{props.icon}</IconWrapper>}
      <TitleHeader>{props.title}</TitleHeader>
      {props.content && <Content max-width="initial">{props.content}</Content>}
    </Container>
  );
}

const TitleHeader = styled.h2`
  font-size: 8em;
  margin: 16px 0 16px;
  transition: ${(props: any) => props.theme.transitions.standard};

  @media ${DEVICE.laptop} {
    font-size: 6em;
  }

  @media ${DEVICE.tablet} {
    font-size: ${(props: any) => props.theme.typography.h2};
  }

  @media ${DEVICE.mobile} {
    transition: none;
    font-size: ${(props: any) => props.theme.typography.h5};
  }
`;

const IconWrapper = styled.div`
  position: absolute !important;
  bottom: 0;
  right: 0;
  height: 100%;

  & svg > * {
    opacity: 0.15;
  }

  & > * {
    transform: rotate(-20deg) translate(-2.5%, 30%);
  }
`;
