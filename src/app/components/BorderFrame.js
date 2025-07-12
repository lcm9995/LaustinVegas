"use client";
import useScrollPosition from "./useScrollPosition";

export default function BorderFrame() {
  const { atBottom, atTop } = useScrollPosition();

  return (
    <>
      {/* Left Border */}
     {/* <div className="fixed top-4 bottom-4 left-4 w-px bg-white pointer-events-none z-50" aria-hidden="true" />*/}
      
      {/* Right Border */}
     {/* <div className="fixed top-4 bottom-4 right-4 w-px bg-white pointer-events-none z-50" aria-hidden="true" />*/}

      {/* Top Border (only visible at top) */}
      <div
        className={`fixed top-4 left-10 right-10 h-px pointer-events-none z-70 transition-opacity duration-300 ${
          atTop ? "opacity-100 bg-white" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Bottom Border (only visible at bottom) */}
      <div
        className={`fixed bottom-12 left-10 right-10 h-px pointer-events-none z-50 transition-opacity duration-300 ${
          atBottom ? "opacity-100 bg-white" : "opacity-0"
        }`}
        aria-hidden="true"
      />
    </>
  );
}
