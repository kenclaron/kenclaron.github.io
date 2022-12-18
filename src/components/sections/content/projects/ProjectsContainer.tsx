import { useTranslation } from "react-i18next";

import { GridContent } from "../GridContent";
import { Project } from "./Project";
import styled from "@emotion/styled";
import RepositoriesSettings from "content/repositories.json";

import { Text } from "components/atoms/Text";

import { Repositories } from "utils/types/github.type";

type ProjectsContainerProps = {
  filter: string;
  repositories: Repositories;
};

export const ProjectsContainer = ({
  filter,
  repositories,
}: ProjectsContainerProps) => {
  const { t } = useTranslation();

  return (
    <GridContent>
      {repositories.map((repository, index) => (
        <Project
          id={`project-${index}`}
          key={repository.id}
          repository={repository}
          visible={!isFiltered(repository, filter)}
        />
      ))}
      {isNoneFiltered(repositories, filter) && (
        <CenteredText>{t("cards.projects.none")}</CenteredText>
      )}
    </GridContent>
  );
};

const CenteredText = styled(Text)`
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
  align-self: center;
  justify-self: center;
  text-align: center;
`;

const isNoneFiltered = (repositories: Repositories, filter?: string) => {
  return !repositories.some((repository) => isFiltered(repository, filter));
};

const isFiltered = (repository: Repositories[number], filter?: string) => {
  const obj = RepositoriesSettings.filters.find((item) => item.name === filter);

  if (!obj) return false;

  if (obj.filter)
    return obj.filter.params.some((param: string) => {
      const items = (repository as any)[param];

      if (!obj.filter.value.length) return items.includes(obj.name);
      else return obj.filter.value.some((value) => items.includes(value));
    });
  else return true;
};
