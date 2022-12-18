import { DEVICE } from "themes";

import styled from "@emotion/styled";

export const Main = styled.main`
  align-items: center;
  background-color: ${(props: any) => props.theme.colors.background.paper};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 100vh;
  padding: 64px 0 32px 0;
  transition: ${(props: any) => props.theme.transitions.standard};

  & > * {
    margin: 0 auto;
    max-width: calc(100% - 192px);
    width: calc(100% - 192px);

    @media ${DEVICE.desktop} {
      max-width: calc(100% - 128px);
      width: calc(100% - 128px);
    }

    @media ${DEVICE.mobile} {
      max-width: calc(100% - 64px);
      width: calc(100% - 64px);
    }
  }

  @media ${DEVICE.mobile} {
    border-top-left-radius: ${(props: any) =>
      props["data-expanded"] ? "0px" : "10vw"};
    border-top-right-radius: ${(props: any) =>
      props["data-expanded"] ? "0px" : "10vw"};
  }

  border-top-left-radius: ${(props: any) =>
    props["data-expanded"] ? "0px" : "64px"};
  border-top-right-radius: ${(props: any) =>
    props["data-expanded"] ? "0px" : "64px"};
`;

export default Main;
