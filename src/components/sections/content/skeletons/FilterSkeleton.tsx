import Skeleton from "react-loading-skeleton";

import { DEVICE } from "themes";

import styled from "@emotion/styled";

export const FilterSkeleton = ({ id }: { id: string }) => {
  return (
    <Stack id={id}>
      {[...Array(10).keys()].map((skeleton) => (
        <Skeleton
          key={skeleton}
          style={{ borderRadius: 32 }}
          height="100%"
          width={((skeleton * 32) % 80) + 128}
        />
      ))}
    </Stack>
  );
};

const Stack = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  gap: 16px;
  overflow: hidden;
  margin: 0 !important;
  width: 100%;
  height: 64px;
  padding-left: 96px;
  max-width: calc(100% - 96px);
  transition: ${(props: any) => props.theme.transitions.standard};

  @media ${DEVICE.desktop} {
    padding-left: 64px;
    max-width: calc(100% - 64px);
    height: 64px;
  }

  @media ${DEVICE.laptop} {
    padding-left: 64px;
    max-width: calc(100% - 64px);
    height: 50px;
  }

  @media ${DEVICE.mobile} {
    padding-left: 32px;
    max-width: calc(100% - 32px);
    height: 36px;
  }
`;
