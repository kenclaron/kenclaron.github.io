import React from "react";

export default function useScroll() {
  const [scrollScreen, setScrollScreen] = React.useState<number>(0);
  const [scrollX, setScrollX] = React.useState<number>(0);
  const [scrollY, setScrollY] = React.useState<number>(0);
  const [innerWidth, setInnerWidth] = React.useState<number>(0);
  const [innerHeight, setInnerHeight] = React.useState<number>(0);

  function handleScroll() {
    setScrollX(window.scrollX);
    setScrollY(window.scrollY);
    setScrollScreen(~~(window.scrollY / window.innerHeight));
  }

  function handleResize() {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    scrollScreen,
    scrollX,
    scrollY,
    innerWidth,
    innerHeight,
  };
}
