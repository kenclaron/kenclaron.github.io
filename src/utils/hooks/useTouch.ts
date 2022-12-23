import React from "react";

export default function useTouchScreen() {
  const [hasTouchScreen, setHasTouchScreen] = React.useState<boolean>(false);

  React.useEffect(() => {
    let hasTouchScreen = false;

    if ("maxTouchPoints" in window.navigator)
      hasTouchScreen = window.navigator.maxTouchPoints > 0;
    else if (window.navigator["msMaxTouchPoints"])
      hasTouchScreen = window.navigator["msMaxTouchPoints"] > 0;
    else {
      const mQ = window.matchMedia && window.matchMedia("(pointer:coarse)");

      if (mQ && mQ.media === "(pointer:coarse)") hasTouchScreen = !!mQ.matches;
      else if ("orientation" in window) hasTouchScreen = true;
      else {
        hasTouchScreen =
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(navigator.userAgent) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(navigator.userAgent);
      }
    }

    setHasTouchScreen(hasTouchScreen);
  }, []);

  return {
    hasTouchScreen,
  };
}
