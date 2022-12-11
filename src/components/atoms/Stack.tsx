import { DEVICE } from "themes";

import styled from "@emotion/styled";

export const Stack: any = styled.div`
  ${(props: any) => props.$direction && `flex-direction: ${props.$direction};`}
  ${(props: any) =>
    props.$variant === "outer" &&
    `
  margin: 0;
  max-width: 100%!important;
  width: 100%!important;

  & > * {
    margin: 0 auto;
    max-width: calc(100% - 192px);
    width: calc(100% - 192px);
  }

  @media ${DEVICE.desktop} {
    & > * {
      max-width: calc(100% - 128px);
      width: calc(100% - 128px);
    }
  }

  @media ${DEVICE.mobile} {
    & > * {
      max-width: calc(100% - 64px);
      width: calc(100% - 64px);
    }

    border-radius: 10vw;
  }`}

  transition: ${(props: any) => props.theme.transitions.standard};
  display: flex;
  text-decoration: none;
  box-sizing: border-box;
  color: ${(props: any) => props.theme.colors.typography.primary};
`;
