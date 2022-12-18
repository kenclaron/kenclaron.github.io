import styled from "@emotion/styled";

export const Text: any = styled.p`
  color: ${(props: any) => props.theme.colors.typography.primary};
  font-size: ${(props: any) => props.theme.typography.subtitle};

  ${(props: any) =>
    props.$variant === "inline" &&
    `display: inline;
     margin: 0
    `};
`;
