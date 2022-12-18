import { useTranslation } from "react-i18next";

import { Theme } from "themes";

import { useTheme } from "@emotion/react";
import JOBS from "content/jobs.json";

import { Stack } from "components/atoms/Stack";
import JobHistoryIcon from "components/icons/JobHistoryIcon";
import { CardHeader } from "components/sections/content/Cards";
import { GridContent } from "components/sections/content/GridContent";
import { Job } from "components/sections/content/jobs/Job";

import JobType from "utils/types/job.type";

export function Jobs() {
  const { t } = useTranslation();
  const jobs: JobType[] = JOBS;
  const theme: Theme = useTheme();

  return (
    <Stack
      as="section"
      aria-label={t("cards.job.title")}
      id="jobs"
      $direction="column"
      style={{ gap: 32 }}
    >
      <CardHeader
        id="job"
        title={t("cards.job.title")}
        content={t("cards.job.content")}
        icon={
          <JobHistoryIcon size="100%" color={theme.colors.typography.primary} />
        }
      />
      <GridContent style={{ gridTemplateColumns: "1fr 1fr" }}>
        {jobs.map((job, index) => (
          <Job id={`job-${index}`} job={job} key={index} />
        ))}
      </GridContent>
    </Stack>
  );
}

export default Jobs;
