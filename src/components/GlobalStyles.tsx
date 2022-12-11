import { Theme } from "themes";

import { Global, css } from "@emotion/react";

import useScroll from "utils/hooks/useScroll";

export function GlobalStyle({ theme }: { theme: Theme }) {
  const { scrollScreen } = useScroll();

  return (
    <Global
      styles={css`
        ::-webkit-scrollbar {
          background-color: ${scrollScreen
            ? theme.colors.background.paper
            : "transparent"};
          border-radius: 8px;
        }
        ::selection {
          color: ${theme.colors.typography.secondary};
          background-color: ${theme.colors.accent.primary.main};
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: ${theme.colors.background.default};
          min-width: 320px;
        }
      `}
    />
  );
}

export default GlobalStyle;
