import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = useCallback(() => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollPx / winHeightPx) * 100;
    setScrollProgress(scrolled);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, [updateScrollProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-tan-dark via-tan to-stone-200 origin-left z-[100] shadow-sm"
      style={{ scaleX: scrollProgress / 100, transformOrigin: "0%" }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    />
  );
}

export default ScrollProgress;
