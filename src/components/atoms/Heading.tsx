import { DEVICE } from "themes";

import styled from "@emotion/styled";

export const Heading: any = styled.h1`
  color: ${(props: any) => props.theme.colors.typography.primary};
  font-size: ${(props: any) => props.theme.typography.h1};
  line-height: 90%;
  max-width: 1075px;
  overflow-wrap: anywhere;
  text-align: center;
  text-transform: uppercase;

  @media ${DEVICE.laptop} {
    font-size: 7.5em;
  }

  @media ${DEVICE.tablet} {
    font-size: ${(props: any) => props.theme.typography.h2};
    max-width: 550px;
  }

  @media ${DEVICE.mobile} {
    font-size: 12vw;
  }
`;
