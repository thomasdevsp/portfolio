import { useEffect, useState } from "react";

const useNearPageEnd = (offset = 300) => {
  const [isNearEnd, setIsNearEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledHeight = window?.innerHeight + window?.scrollY;
      const totalHeight = document.documentElement.scrollHeight;

      if (totalHeight - scrolledHeight <= offset) {
        setIsNearEnd(true);
      } else {
        setIsNearEnd(false);
      }
    };

    window?.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return isNearEnd;
};

export default useNearPageEnd;
