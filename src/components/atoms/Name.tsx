import { DEVICE } from "themes";

import styled from "@emotion/styled";

export const Name = styled.span`
  background-color: ${(props: any) => props.theme.colors.lightBlue};
  font-size: 1.25em;
  margin: 0;

  @media ${DEVICE.mobile} {
    display: none;
  }
`;
