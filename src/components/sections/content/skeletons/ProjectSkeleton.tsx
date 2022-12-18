import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { DEVICE } from "themes";

import styled from "@emotion/styled";

export function ProjectSkeleton() {
  return (
    <Container min-height={384} justifyContent="center">
      <Skeleton width="100%" height={196} style={{ padding: 0 }} />
      <Skeleton
        style={{ margin: "4px 32px", width: "calc(100% - 64px)" }}
        height={32}
        width="50%"
      />
      <Skeleton
        style={{ margin: "0 32px", width: "calc(100% - 64px)" }}
        height={16}
        width="80%"
      />
      <Skeleton
        style={{ margin: "0 32px", width: "calc(100% - 64px)" }}
        height={16}
        width="30%"
      />
    </Container>
  );
}

const Container: any = styled.article`
  background: ${(props: any) => props.theme.colors.accent.primary.inactive};
  border-radius: 24px;
  box-sizing: border-box;
  color: ${(props: any) => props.theme.colors.typography.primary};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  overflow-wrap: break-word;
  overflow: hidden;
  padding: 0 0 32px 0;
  position: relative;
  transition: ${(props: any) => props.theme.transitions.standard};
  width: 100%;

  @media ${DEVICE.tablet} {
    border-radius: 24px;
  }

  & {
    position: relative;
  }

  & > span > span {
    position: relative;
    top: -2px;
    border-radius: 24px;
    overflow: hidden;
    transition: ${(props: any) => props.theme.transitions.standard};
  }

  &:hover,
  &:hover > span > span {
    border-radius: 16px;
  }

  &:active,
  &:active:first-of-type > span > span {
    border-radius: 8px;
  }
`;
