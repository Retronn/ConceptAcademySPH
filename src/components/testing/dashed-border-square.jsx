import React from 'react';

function DashedBorderSquare({ size = 1000 }) {
  const originalSize = 25; // The original dimensions of the SVG
  const scaleFactor = size / originalSize;

  // Define the key properties using the scale factor
  const rectSize = originalSize * scaleFactor; // Scale the size of the rectangle
  const strokeDasharray = `${4 * scaleFactor} ${2 * scaleFactor}`; // Scale the dash and gap lengths
  const strokeWidth = 1 / scaleFactor; // Adjust stroke width for consistent appearance

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${originalSize} ${originalSize}`} // Keep the viewBox consistent
      width={size}
      height={size}
    >
      <rect
        x={0.5 / scaleFactor} // Adjust x position to account for scaling
        y={0.5 / scaleFactor} // Adjust y position to account for scaling
        width={24} // Original width of the rectangle
        height={24} // Original height of the rectangle
        fill="#fff"
        stroke="none"
      />
      <g fill="none" stroke="#1e1e1e" strokeMiterlimit="10" strokeWidth={strokeWidth}>
        <polyline points={`24.5 22.5 24.5 24.5 22.5 24.5`} />
        <line
          x1={20.5}
          y1={24.5}
          x2={3.5}
          y2={24.5}
          strokeDasharray={strokeDasharray}
        />
        <polyline points={`2.5 24.5 0.5 24.5 0.5 22.5`} />
        <line
          x1={0.5}
          y1={20.5}
          x2={0.5}
          y2={3.5}
          strokeDasharray={strokeDasharray}
        />
        <polyline points={`0.5 2.5 0.5 0.5 2.5 0.5`} />
        <line
          x1={4.5}
          y1={0.5}
          x2={21.5}
          y2={0.5}
          strokeDasharray={strokeDasharray}
        />
        <polyline points={`22.5 0.5 24.5 0.5 24.5 2.5`} />
        <line
          x1={24.5}
          y1={4.5}
          x2={24.5}
          y2={21.5}
          strokeDasharray={strokeDasharray}
        />
      </g>
    </svg>
  );
}

export default DashedBorderSquare;
