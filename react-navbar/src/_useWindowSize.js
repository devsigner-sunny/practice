import { useState, useEffect } from "react";

export default function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  let size = getSize();

  const [windowSize, setWindowSize] = useState(size);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(size);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size, isClient]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
