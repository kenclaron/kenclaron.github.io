import React from "react";
import { useTranslation } from "react-i18next";

import { useSnackbar } from "notistack";
import { SetterOrUpdater, useSetRecoilState } from "recoil";

import styled from "@emotion/styled";
import GitHub from "api/github";
import OpenGraph from "api/opengraph";
import REPOSITORIES from "content/repositories.json";

import { ChipStatus, ChipStatusInformation } from "components/atoms/Chips";
import { Stack } from "components/atoms/Stack";

import RepositoriesContainer from "utils/containers/repositories.container";
import useOnInit from "utils/hooks/useOnInit";
import { Repositories } from "utils/types/github.type";

enum ServiceStatus {
  ERROR = "error",
  CACHED = "cached",
  SUCCESS = "success",
  WAITING = "neutral",
}

const getStatus = () => {
  return OpenGraph.getStatus(true)
    .then((status) => status.code)
    .catch(() => 404);
};

const getRepositories = (recoil: SetterOrUpdater<Repositories>) => {
  return new Promise((resolve, reject) =>
    GitHub.getRepositories()
      .then((repositories) => {
        RepositoriesContainer.change(
          recoil,
          repositories.filter(
            (repository) => !REPOSITORIES.ignore.includes(repository.id)
          )
        );
        resolve(true);
      })
      .catch(() => {
        RepositoriesContainer.change(recoil, []);
        reject();
      })
  );
};

function Status() {
  const { t } = useTranslation();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const launchAPI = async () => {
    getRepositories(recoilRepos)
      .then(async () => {
        let status = ServiceStatus.WAITING;

        switch (await getStatus()) {
          case 200:
            status = ServiceStatus.SUCCESS;
            break;
          case 304:
            status = ServiceStatus.CACHED;
            break;
          default:
            status = ServiceStatus.ERROR;
            break;
        }

        closeSnackbar();

        setStatus(status);
      })
      .catch(() => showNotificationError());
  };

  useOnInit(launchAPI);

  const recoilRepos = useSetRecoilState(RepositoriesContainer.currentQuery);
  const [hover, setHover] = React.useState<boolean>(false);
  const [status, setStatus] = React.useState<ServiceStatus>(
    ServiceStatus.WAITING
  );

  const showNotificationError = () => {
    enqueueSnackbar(t("notifications.requests.timeout"), {
      variant: "error",
      preventDuplicate: true,
      persist: true,
    });
  };

  const [timer, setTimer] = React.useState<NodeJS.Timer>();

  React.useEffect(() => {
    if (timer) clearInterval(timer);
    else
      setTimer(
        setTimeout(() => {
          if (status === ServiceStatus.WAITING) showNotificationError();
          else if (timer) clearInterval(timer);

          return status;
        }, 5000)
      );
    launchAPI();
  }, []);

  React.useEffect(() => {
    if (status !== ServiceStatus.WAITING && timer) clearInterval(timer);
  }, [status, timer]);

  return (
    <StatusContainer role="status">
      <ChipStatus
        $status={status}
        onMouseEnter={() => setHover(true)}
        onTouchStart={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onTouchEnd={() => setHover(false)}
      >
        {t(`status.${status}.title`)}
      </ChipStatus>
      <ChipStatusInformation $status="neutral" aria-hidden={hover}>
        {t(`status.${status}.description`)}
      </ChipStatusInformation>
    </StatusContainer>
  );
}

const StatusContainer = styled(Stack)`
  position: absolute;
  right: 32px;
  top: 32px;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`;

export default Status;
