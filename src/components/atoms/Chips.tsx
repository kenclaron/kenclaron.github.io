import { DEVICE } from "themes";

import styled from "@emotion/styled";

import { Color } from "utils/color";

export const Chip: any = styled.span`
  background-color: ${(props: any) => props.theme.colors.accent.primary.main};
  border-radius: 8px;
  font-size: ${(props: any) => props.theme.typography.chip};
  font-weight: bold;
  padding: 14.5px 22px;
  transition: ${(props: any) => props.theme.transitions.standard};
  white-space: nowrap;

  @media ${DEVICE.laptop} {
    padding: 10px 14px;
    font-size: ${(props: any) => props.theme.typography.body1};
  }

  @media ${DEVICE.mobile} {
    font-size: ${(props: any) => props.theme.typography.body2};
  }
`;

export const ChipButton: any = styled.li`
  & {
    cursor: pointer;
    border-radius: 48px;
  }

  & input[type="radio"] + label {
    background-color: ${(props: any) => props.theme.colors.background.paper};
    border-radius: 32px;
    border: 3px solid ${(props: any) => props.theme.colors.typography.primary};
    color: ${(props: any) => props.theme.colors.typography.primary};
    cursor: pointer;
    display: block;
    font-size: ${(props: any) => props.theme.typography.chip};
    font-weight: bold;
    margin: 0 4px;
    min-width: fit-content;
    padding: 14.5px 22px;
    transition: ${(props: any) => props.theme.transitions.standard};
    user-select: none;
    white-space: nowrap;

    @media ${DEVICE.laptop} {
      font-size: ${(props: any) => props.theme.typography.body1};
      padding: 10px 18px;
    }

    @media ${DEVICE.mobile} {
      border: 2px solid ${(props: any) => props.theme.colors.typography.primary};
      font-size: ${(props: any) => props.theme.typography.body2};
      padding: 6px 14px;
    }
  }

  &:hover input[type="radio"] + label,
  &:focus input[type="radio"] + label,
  &:focus-visible input[type="radio"] + label,
  &:focus-within input[type="radio"] + label {
    border-radius: 16px;

    @media ${DEVICE.mobile} {
      border-radius: 10px;
    }
  }

  & input[type="radio"]:checked + label {
    background-color: ${(props: any) => props.theme.colors.typography.primary};
    border-radius: 8px;
    color: ${(props: any) => props.theme.colors.background.paper};

    @media ${DEVICE.mobile} {
      border-radius: 4px;
    }
  }
`;

export const ChipStatus: any = styled.span`
  background-color: ${(props: any) => props.theme.colors.status[props.$status]};
  border-radius: 32px;
  font-size: ${(props: any) => props.theme.typography.body2};
  font-weight: bold;
  letter-spacing: 1px;
  max-width: 70vw;
  padding: 14.5px 24px;
  transition: ${(props: any) => props.theme.transitions.standard};

  &:hover {
    background-color: ${(props: any) =>
      Color.mix(
        props.theme.colors.status[props.$status],
        props.theme.colors.accent.primary.hovered
      )};
    border-radius: 16px;
    cursor: default;
  }

  &:active {
    background-color: ${(props: any) =>
      Color.mix(
        props.theme.colors.status[props.$status],
        props.theme.colors.accent.primary.pressed
      )};
    border-radius: 8px;
    cursor: default;
  }
`;

export const ChipStatusInformation: any = styled.span`
  background-color: ${(props: any) => props.theme.colors.status[props.$status]};
  border-radius: 32px;
  font-size: ${(props: any) => props.theme.typography.body2};
  font-weight: bold;
  letter-spacing: 1px;
  max-width: 85vw;
  opacity: ${(props: any) => (props["aria-hidden"] ? "initial" : "0")};
  padding: 14.5px 24px;
  pointer-events: none;
  position: absolute;
  top: 64px;
  transition: ${(props: any) => props.theme.transitions.standard};
  white-space: nowrap;
  box-sizing: border-box;

  @media ${DEVICE.tablet} {
    width: 80vw;
    white-space: pre-wrap;
    border-radius: 16px;
  }
`;
