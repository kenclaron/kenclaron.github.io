import styled from "@emotion/styled";

export const Link = styled.a`
  color: ${(props: any) => props.theme.colors.typography.primary};
  text-decoration: none;

  &:hover,
  &:hover * {
    text-decoration: underline;
  }
`;
