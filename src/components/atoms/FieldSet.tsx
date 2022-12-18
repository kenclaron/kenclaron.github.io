import { MouseEventHandler } from "react";

import { DEVICE } from "themes";

import styled from "@emotion/styled";

import useDragScroll from "utils/hooks/useDragScroll";

export const FieldSet = ({
  name,
  legend,
  children,
  className,
  onMouseLeave,
  hide = false,
}: {
  name: string;
  legend: string;
  children: JSX.Element[] | JSX.Element;
  className?: string;
  onMouseLeave?: MouseEventHandler<HTMLFieldSetElement>;
  hide?: boolean;
}) => {
  const dragProps = useDragScroll();

  return (
    <StyledFieldSet
      data-moved={dragProps.isMoved}
      name={name}
      onMouseLeave={onMouseLeave}
      role="tablist"
    >
      <legend hidden={hide}>{legend}</legend>
      <TabItem {...dragProps.events} className={className} role="tab">
        {children}
      </TabItem>
    </StyledFieldSet>
  );
};

const TabItem = styled.ul`
  box-sizing: border-box;
  display: flex;
  list-style-type: none;
  max-width: 100vw;
  scroll-behavior: smooth;
  width: 100%;
`;

const StyledFieldSet = styled.fieldset`
  border: none;
  display: flex;
  margin: 0 auto;
  max-width: 100%;
  padding: 0;
  width: 100%;

  & > ul {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;

    @media (pointer: coarse) {
      overflow: scroll;
    }
  }

  & > ul::-webkit-scrollbar {
    display: none;
  }

  & li:active > input[type="radio"] + label {
    border-radius: 8px;

    @media ${DEVICE.mobile} {
      border-radius: 4px;
    }
  }

  & > ul {
    margin: 0;
    padding-bottom: 24px;
    padding-left: 96px;
    padding-right: 108px;
    padding-top: 24px;
    pointer-events: ${(props: any) =>
      props["data-moved"] ? "none" : "initial"};
  }

  @media ${DEVICE.desktop} {
    & > ul {
      padding-left: 64px;
      padding-right: 76px;
    }
  }

  @media ${DEVICE.mobile} {
    & > ul {
      padding-left: 32px;
      padding-right: 32px;
    }
  }
`;
