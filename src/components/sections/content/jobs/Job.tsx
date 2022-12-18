import { useTranslation } from "react-i18next";

import { Theme } from "themes";
import useRipple from "use-ripple-hook";

import { Container, Content, LinkContainer, Title } from "../projects/Project";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { Address } from "components/atoms/Address";
import { Chip } from "components/atoms/Chips";
import { Grid } from "components/atoms/Grid";
import { Stack } from "components/atoms/Stack";
import { Text } from "components/atoms/Text";
import DescriptionIcon from "components/icons/DescriptionIcon";
import JobIcon from "components/icons/JobIcon";
import TimeIcon from "components/icons/TimeIcon";

import JobType from "utils/types/job.type";

interface JobProps {
  id: string;
  job: JobType;
}

export function Job({ id, job }: JobProps) {
  const { i18n } = useTranslation();
  const [ripple, event] = useRipple({ color: "rgba(255, 255, 255, 0.5)" });
  const theme: Theme = useTheme();

  function convert(raw: string) {
    const options = { year: "numeric", month: "short" };

    if (raw === "%current%")
      return new Date().toLocaleDateString(i18n.language, options as any);
    else return new Date(raw).toLocaleDateString(i18n.language, options as any);
  }

  const language = i18n.language.substring(0, 2);

  return (
    <LinkContainer
      href={job.url}
      onMouseDown={event}
      ref={ripple}
      target="_blank"
    >
      <ContainerJob id={id} min-height="384px" justifyContent="center">
        <StackName $color={job.image.color}>
          <TextName>{job.image.name}</TextName>
        </StackName>
        <Title>{job.profession[language]}</Title>
        <Stack $direction="column" style={{ gap: 8, padding: "8px 24px" }}>
          <StyledGrid>
            <JobIcon size={24} color={theme.colors.typography.primary} />
            <Stack $direction="column">
              <Content>{job.company[language]}</Content>
              <Address>{job.location[language]}</Address>
            </Stack>
          </StyledGrid>
          <StyledGrid>
            <TimeIcon size={24} color={theme.colors.typography.primary} />
            <Content>
              {convert(job.date.started_at)} — {convert(job.date.ended_at)}
            </Content>
          </StyledGrid>
          <StyledGrid>
            <DescriptionIcon
              size={24}
              color={theme.colors.typography.primary}
              style={{ display: "flex", alignSelf: "flex-start", marginTop: 8 }}
            />
            <Content style={{ textAlign: "justify" }}>
              {job.description[language]}
            </Content>
          </StyledGrid>
        </Stack>
        <ChipRow>
          {job.products?.map((product, index) => (
            <Chip key={index}>{product}</Chip>
          ))}
        </ChipRow>
      </ContainerJob>
    </LinkContainer>
  );
}

const ContainerJob = styled(Container)`
  grid-template-rows: auto auto 1fr auto;
  overflow: hidden;

  & > :first-of-type {
    overflow: hidden;
    border-radius: 24px;
  }

  &:hover > :first-of-type,
  &:focus > :first-of-type,
  &:focus-within > :first-of-type,
  &:focus-visible > :first-of-type {
    border-radius: 16px;
  }

  &:active > :first-of-type {
    border-radius: 8px;
  }
`;

const StyledGrid = styled(Grid)`
  align-items: center;
  grid-template-columns: 24px 1fr;
  gap: 8px;
`;

const ChipRow = styled(Stack)`
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 100%;
  margin-top: 8px;

  & > * {
    width: fit-content;
  }
`;

const StackName = styled(Stack)`
  background-color: ${(props: any) => props.$color};
  position: relative;
  padding-top: 25% !important;
`;

const TextName = styled(Text)`
  position: absolute;
  left: 50%;
  top: 50%;
  margin: 0;
  transform: translate(-50%, -50%);
  color: black;
  fontweight: bold;
  fontsize: 40px;
`;
