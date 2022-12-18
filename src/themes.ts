export const themes: {
  light: Theme;
  dark: Theme;
} = {
  light: {
    colors: {
      accent: {
        primary: {
          main: "#BFDBFE",
          hovered: "#A5CFFB",
          pressed: "#95B5DE",
          inactive: "#E3EAF5",
        },
      },
      skeletons: {
        primary: "#DDDDDD",
        secondary: "#EEEEEE",
      },
      background: {
        default: "#ffffff",
        paper: "#F5F5F5",
      },
      divider: "#1F1F1F",
      typography: {
        primary: "#1F1F1F",
        secondary: "#2F2F2F",
        tertiary: "#8D9093",
        inverted: "#FEFCFD",
      },
      status: {
        success: "#7ABE83",
        cached: "#BAEEC9",
        error: "#C35F5F",
        neutral: "#BBBBBB",
      },
    },
    shadow: "0 8px 24px 0 #01244033",
    transitions: {
      standard: "all ease-in-out 225ms",
      fast: "all ease-in-out 125ms",
      slow: "all ease-in-out 350ms",
    },
    typography: {
      h1: "9em",
      h2: "4.5em",
      h3: "3.5em",
      h4: "3em",
      h5: "2.5em",
      h6: "2em",
      subtitle: "1.5em",
      button: "1.5em",
      chip: "1.5em",
      body1: "1.25em",
      body2: "1em",
      subtext: "0.85em",
      caption: "0.6em",
    },
  },
  dark: {
    colors: {
      accent: {
        primary: {
          main: "#022545",
          hovered: "#0C3353",
          pressed: "#214A6A",
          inactive: "#27292C",
        },
      },
      skeletons: {
        primary: "#222222",
        secondary: "#333333",
      },
      background: {
        default: "#111111",
        paper: "#1F1F1F",
      },
      divider: "#FEFCFD",
      typography: {
        primary: "#FEFCFD",
        secondary: "#DADDEF",
        tertiary: "#DADDFF",
        inverted: "#1F1F1F",
      },
      status: {
        success: "#7ABE83",
        cached: "#BAEEC9",
        error: "#C35F5F",
        neutral: "#555555",
      },
    },
    shadow: "0 8px 24px 0 #00000033",
    transitions: {
      standard: "all ease-in-out 225ms",
      fast: "all ease-in-out 125ms",
      slow: "all ease-in-out 350ms",
    },
    typography: {
      h1: "9em",
      h2: "4.5em",
      h3: "3.5em",
      h4: "3em",
      h5: "2.5em",
      h6: "2em",
      subtitle: "1.5em",
      button: "1.5em",
      chip: "1.5em",
      body1: "1.25em",
      body2: "1em",
      subtext: "0.85em",
      caption: "0.6em",
    },
  },
};

export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

function maxWidth(breakpoint: number) {
  return `(max-width: ${breakpoint}px)`;
}

export const DEVICE = {
  mobile: maxWidth(BREAKPOINTS.sm),
  tablet: maxWidth(BREAKPOINTS.md),
  semilaptop: maxWidth(BREAKPOINTS.md + (BREAKPOINTS.lg - BREAKPOINTS.md) / 2),
  laptop: maxWidth(BREAKPOINTS.lg),
  desktop: maxWidth(BREAKPOINTS.xl),
};

type HEXColor = string;

export type Theme = any & {
  colors: {
    accent: {
      primary: {
        main: HEXColor;
        hovered: HEXColor;
        pressed: HEXColor;
        inactive: HEXColor;
      };
    };
    skeletons: {
      primary: HEXColor;
      secondary: HEXColor;
    };
    background: {
      default: HEXColor;
      paper: HEXColor;
    };
    divider: HEXColor;
    typography: {
      primary: HEXColor;
      secondary: HEXColor;
      tertiary: HEXColor;
      inverted: HEXColor;
    };
    status: {
      success: HEXColor;
      cached: HEXColor;
      error: HEXColor;
      neutral: HEXColor;
    };
  };
  shadow: string;
  transitions: {
    standard: string;
    fast: string;
    slow: string;
  };
  typography: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    subtitle: string;
    button: string;
    chip: string;
    body1: string;
    body2: string;
    caption: string;
  };
};
