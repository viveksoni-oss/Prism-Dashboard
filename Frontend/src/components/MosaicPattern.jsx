import React from "react";

export default function MosaicPattern({
  className,
  position = "top-left",
  color = "text-blue-500/20",
}) {
  // Determine rotation/position based on the 'position' prop
  const positionStyles = {
    "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
    "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4 rotate-90",
    "bottom-left":
      "bottom-0 left-0 -translate-x-1/4 translate-y-1/4 -rotate-90",
    "bottom-right":
      "bottom-0 right-0 translate-x-1/4 translate-y-1/4 rotate-180",
  };

  return (
    <div
      className={`fixed z-50 pointer-events-none overflow-hidden ${
        positionStyles[position] || ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={color} // Controls the color of the squares
      >
        <defs>
          {/* 1. Define the small square pattern */}
          <pattern
            id="mosaic-grid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {/* The small square shape */}
            <rect
              x="2"
              y="2"
              width="36"
              height="36"
              fill="currentColor"
              rx="4"
            />
          </pattern>

          {/* 2. Define a radial mask to make it "fade out" */}
          <mask id="radial-fade">
            <radialGradient id="fade-grad" cx="0" cy="0" r="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="40%" stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <circle cx="0" cy="0" r="600" fill="url(#fade-grad)" />
          </mask>
        </defs>

        {/* 3. Render a large circle filled with the pattern, applied with the mask */}
        <circle
          cx="0"
          cy="0"
          r="600"
          fill="url(#mosaic-grid)"
          mask="url(#radial-fade)"
        />
      </svg>
    </div>
  );
}
