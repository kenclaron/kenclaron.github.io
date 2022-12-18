import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { DEVICE } from "themes";
import useRipple from "use-ripple-hook";

import styled from "@emotion/styled";

export function Button(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement> & {
      as?: any;
      theme?: any;
      href?: any;
      target?: any;
    },
    HTMLButtonElement
  >
) {
  const [ripple, event] = useRipple({
    color: "rgba(255, 255, 255, 0.5)",
  });

  return <ButtonNative {...props} ref={ripple} onMouseDown={event} />;
}

const ButtonNative = styled.button`
  align-items: center;
  background-color: ${(props: any) => props.theme.colors.accent.primary.main};
  border-radius: 48px;
  border: none;
  box-sizing: border-box;
  color: ${(props: any) => props.theme.colors.typography.primary};
  display: flex;
  font-size: ${(props: any) => props.theme.typography.button};
  font-weight: bold;
  margin: 0;
  min-height: 96px;
  padding: 8px 24px;
  text-align: center;
  text-decoration: none;
  transition: ${(props: any) => props.theme.transitions.standard};

  @media ${DEVICE.mobile} {
    box-sizing: border-box;
    max-width: fit-content;
    width: 100%;

    & > svg + p {
      display: none;
    }
  }

  &:hover {
    background-color: ${(props: any) =>
      props.theme.colors.accent.primary.hovered};
    border-radius: 32px;
    cursor: pointer;
  }

  &:active {
    background-color: ${(props: any) =>
      props.theme.colors.accent.primary.pressed};
    border-radius: 16px;
    cursor: pointer;
  }

  ${(props: any) => {
    delete props.children;
    delete props.as;
    delete props.href;
    return props;
  }}
`;
