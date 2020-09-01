import React from 'react';

function Triangle() {
  return (
    <svg
      width="85"
      height="75"
      viewBox="0 0 85 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        left: '16%',
        right: '80%',
        top: '15%',
        bottom: '74%',
        zIndex: 11,
      }}
    >
      <g id="triangle">
        <path
          id="triangle-shape"
          d="M42.0104 75L0 0.701263H84.0209L42.0104 75Z"
          fill="#EB1E99"
        />
      </g>
    </svg>
  );
}

export default Triangle;
