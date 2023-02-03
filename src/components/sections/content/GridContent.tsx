import { DEVICE } from "themes";

import styled from "@emotion/styled";

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  width: 100%;
  min-height: 384px;
  transition: ${(props: any) => props.theme.transitions.standard};

  @media (min-width: 1921px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media ${DEVICE.laptop} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${DEVICE.tablet} {
    grid-template-columns: 1fr !important;
  }
`;
