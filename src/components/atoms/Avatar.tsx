import styled from "@emotion/styled";

export const Avatar = styled.img`
  background-color: ${(props: any) => props["data-color"]};
  border-radius: 50%;
  display: block;
  height: 48px;
  overflow: hidden;
  width: 48px;

  &:before {
    background-color: ${(props: any) => props.theme.colors.status.error};
    border-radius: 50%;
    content: " ";
    display: block;
    height: 48px;
    left: 0;
    position: absolute;
    width: 48px;
  }
`;
