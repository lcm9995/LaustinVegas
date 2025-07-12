"use client";
import { useState, useEffect } from "react";

export default function useScrollPosition(offset = 0) {
  const [atBottom, setAtBottom] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;

      setAtBottom(windowHeight + scrollY >= docHeight - offset);
      setAtTop(scrollY <= offset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return { atBottom, atTop };
}
