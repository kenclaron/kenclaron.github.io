import { useEffect, useState } from "react";

type ThemeDetector = { mode: "dark" | "light" };

export const useThemeDetector = (): ThemeDetector => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const listener = (e: any) => setIsDarkTheme(e.matches);

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", listener);
    return () => darkThemeMq.removeEventListener("change", listener);
  }, []);

  return { mode: isDarkTheme ? "dark" : "light" };
};

export default useThemeDetector;
