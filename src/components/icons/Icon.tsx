import React from "react";

type IconWrapperType = IconType & {
  children?: JSX.Element;
  viewBox?: string;
};

export type IconType = {
  color?: string;
  size?: number | string;
  style?: React.CSSProperties;
};

export default class Icon extends React.Component<IconWrapperType, {}> {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={this.props.viewBox || "0 0 48 48"}
        preserveAspectRatio="xMaxYMid meet"
        height={this.props.size || 48}
        width={this.props.size || 48}
        fill={this.props.color || "#FFFFFF"}
        style={this.props.style}
      >
        {this.props.children}
      </svg>
    );
  }
}
