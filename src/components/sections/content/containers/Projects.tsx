import React from "react";
import { useTranslation } from "react-i18next";

import { useRecoilState } from "recoil";
import { Theme } from "themes";

import { ProjectsContainer } from "../projects/ProjectsContainer";
import { useTheme } from "@emotion/react";

import { Stack } from "components/atoms/Stack";
import CollectionsIcon from "components/icons/CollectionsIcon";
import { CardHeader } from "components/sections/content/Cards";
import { GridContent } from "components/sections/content/GridContent";
import { FilterContainer } from "components/sections/content/filters/FilterContainer";
import { FilterSkeleton } from "components/sections/content/skeletons/FilterSkeleton";
import { ProjectSkeleton } from "components/sections/content/skeletons/ProjectSkeleton";

import RepositoriesContainer from "utils/containers/repositories.container";

export function Projects() {
  const { t } = useTranslation();
  const theme: Theme = useTheme();

  const [repositories] = useRecoilState(RepositoriesContainer.current);
  const [filter, setFilter] = React.useState<string>("All");

  return (
    <Stack
      $direction="column"
      $variant="outer"
      aria-label={t("cards.projects.title")}
      as="section"
      id="projects"
    >
      <CardHeader
        content={t("cards.projects.content")}
        title={t("cards.projects.title")}
        icon={
          <CollectionsIcon
            size="100%"
            color={theme.colors.typography.primary}
          />
        }
      />
      {repositories.length > 0 ? (
        <React.Fragment>
          <FilterContainer filter={filter} setFilter={setFilter} />
          <ProjectsContainer filter={filter} repositories={repositories} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <FilterSkeleton id="projects-tabs" />
          <GridContent>
            {[1, 2, 3, 4, 5, 6].map((value) => (
              <ProjectSkeleton key={value} />
            ))}
          </GridContent>
        </React.Fragment>
      )}
    </Stack>
  );
}

export default Projects;
