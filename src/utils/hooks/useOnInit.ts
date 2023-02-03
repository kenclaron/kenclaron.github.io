import React from "react";

export default function useOnInit(
  callback: (...args: any[]) => any,
  ...args: any[]
) {
  const [mounted, setMounted] = React.useState(false);

  const resetInit = () => setMounted(false);

  React.useEffect(() => {
    if (!mounted) {
      setMounted(true);
      callback(...args);
    }
  }, [mounted, callback, args]);

  return [resetInit];
}
