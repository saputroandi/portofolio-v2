import React, { useState } from "react";

const getWindowPosition = () => ({
  x: typeof window !== "undefined" ? window.pageXOffset : 0,
  y: typeof window !== "undefined" ? window.pageYOffset : 0,
});

export const useWindowPosition = () => {
  const [windowPosition, setWindowPosition] = useState(getWindowPosition());

  React.useEffect(() => {
    const handleScroll = () => {
      setWindowPosition(getWindowPosition());
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return windowPosition;
};
