import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";

import { themes } from "themes";

import { ThemeProvider } from "@emotion/react";

import GlobalStyle from "components/GlobalStyles";
import Meta from "components/Meta";
import Content from "components/sections/Content";
import Footer from "components/sections/Footer";
import Header from "components/sections/Header";

import useThemeDetector from "utils/hooks/useThemeDetector";

import "i18n/config";

function App() {
  const { mode } = useThemeDetector();

  document.getElementsByClassName("skeleton-container")[0]?.remove();

  return (
    <ThemeProvider theme={themes[mode]}>
      <SkeletonTheme
        baseColor={themes[mode].colors.skeletons.secondary}
        highlightColor={themes[mode].colors.skeletons.primary}
      >
        <GlobalStyle theme={themes[mode]} />
        <Meta />
        <Header />
        <Content />
        <Footer />
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
