import React from 'react';

function ZigZags() {
  return (
    <svg
      width="62"
      height="118"
      viewBox="0 0 62 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        right: '30%',
        top: '-15%,',
        zIndex: 11,
        // transform: 'rotate(-89.76deg)',
      }}
    >
      <g id="zig-zags">
        <path
          id="zag"
          d="M34.8319 116.058L57.8094 97.1677L34.9878 78.0898L57.9652 59.1999L35.1436 40.1219L58.1212 21.2183L35.2996 2.12658"
          stroke="#121212"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path
          id="zig"
          d="M4 115.931L26.9775 97.0412L4.15587 77.9632L27.1334 59.0733L4.31174 39.9953L27.2893 21.0917L4.46773 2.00001"
          stroke="#121212"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
}

export default ZigZags;
