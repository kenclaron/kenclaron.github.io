import React from "react";

export default function useForceScroll(
  delay = 250,
  y: number = window.innerHeight + 2
) {
  const [previousY, setPreviousY] = React.useState<number>(0);
  const [isTouch, setIsTouch] = React.useState<boolean>(false);

  const scroll = React.useCallback(() => {
    debounce(() => {
      const toBottom = window.scrollY > previousY;
      const belowTopLimit = window.scrollY > 128;
      const belowBottomLimit = window.scrollY > y - 128;
      const aboveTargetPosition = window.scrollY < y;

      setPreviousY(window.scrollY);

      if (!aboveTargetPosition) return;

      if ((toBottom && belowTopLimit) || belowBottomLimit)
        window.scrollTo({ top: y });
      else window.scrollTo({ top: 0 });
    }, delay);
  }, [delay, previousY, y]);

  const handleScroll = React.useCallback(() => {
    if (isTouch) return;

    scroll();
  }, [isTouch, scroll]);

  const handlePointer = React.useCallback(
    (e: TouchEvent | MouseEvent) => {
      switch (e.type) {
        case "touchstart":
        case "mousedown":
          setIsTouch(true);
          break;
        case "touchend":
        case "mouseup":
          setIsTouch(false);
          scroll();
          break;
      }
    },
    [scroll]
  );

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handlePointer);
    window.addEventListener("mouseup", handlePointer);
    window.addEventListener("touchstart", handlePointer);
    window.addEventListener("touchmove", handlePointer);
    window.addEventListener("touchend", handlePointer);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handlePointer);
      window.removeEventListener("mouseup", handlePointer);
      window.removeEventListener("touchstart", handlePointer);
      window.removeEventListener("touchmove", handlePointer);
      window.removeEventListener("touchend", handlePointer);
    };
  }, [handlePointer, handleScroll]);

  return {};
}

const debounce = (function () {
  let timer = 0;

  return function (callback: () => any, delay = 0) {
    clearTimeout(timer);
    timer = Number(setTimeout(callback, delay));
  };
})();
