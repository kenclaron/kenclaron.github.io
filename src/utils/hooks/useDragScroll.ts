import { useEffect, useRef, useState } from "react";

export default function useDragScroll(isSupportTouch: boolean = true) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState(null);
  const [isMoved, setIsMoved] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  function onMouseDown(e: any) {
    ref.current && (ref.current.style.scrollBehavior = "initial");

    document.body.style.userSelect = "none";

    setIsMoved(false);
    setIsMouseDown(true);
    if (e.type === "touchstart") {
      const touch = e.touches[0] || e.changedTouches[0];
      setLastMousePosition(touch.pageX);
    } else {
      setLastMousePosition(e.clientX);
    }
  }

  useEffect(() => {
    function onMouseUp(e: any) {
      setIsMoved(false);
      setIsMouseDown(false);

      document.body.style.userSelect = "initial";

      if (ref.current && lastMousePosition && e.clientX) {
        ref.current.style.scrollBehavior = "smooth";
        ref.current.scrollTo(
          ref.current.scrollLeft + (lastMousePosition - e.clientX),
          0
        );
      }

      setLastMousePosition(null);
    }

    function onMouseMove(e: any) {
      if (!isMouseDown) return;
      if (ref.current === null) return;
      if (lastMousePosition === null) return;

      setIsMoved(true);

      if (e.type === "touchmove") {
        const touch = e.touches[0] || e.changedTouches[0];
        ref.current.scrollLeft += lastMousePosition - touch.pageX;
        setLastMousePosition(touch.pageX);
      } else {
        ref.current.scrollLeft += lastMousePosition - e.clientX;
        setLastMousePosition(e.clientX);
      }
    }

    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    if (isSupportTouch) {
      window.addEventListener("touchend", onMouseUp);
      window.addEventListener("touchmove", onMouseMove);
    }

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);

      if (isSupportTouch) {
        window.removeEventListener("touchend", onMouseUp);
        window.removeEventListener("touchmove", onMouseMove);
      }
    };
  }, [isMouseDown, isSupportTouch, lastMousePosition]);

  return {
    events: {
      ref,
      onMouseDown,
      onTouchStart: onMouseDown,
    },
    isMoved,
  };
}
