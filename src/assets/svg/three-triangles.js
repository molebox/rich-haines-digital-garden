import React from 'react';

function ThreeTriangles() {
  return (
    <svg
      width="47"
      height="143"
      viewBox="0 0 47 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        right: '15%',
        top: '20%',
      }}
    >
      <g id="3-triangles">
        <path id="triangle-top" d="M0 0H46.5174V47.4926L0 0Z" fill="#F15BB5" />
        <path
          id="triangle-bottom"
          d="M0 95.3125H46.5174V142.826L0 95.3125Z"
          fill="#9B5DE5"
        />
        <path
          id="triangle-middle"
          d="M0 47.7995H46.5174V95.3125L0 47.7995Z"
          fill="#121212"
        />
      </g>
    </svg>
  );
}

export default ThreeTriangles;
