import React from 'react';
import { Box } from '@chakra-ui/core';

function Triangle() {
  return (
    <Box
      as="svg"
      width="85px"
      height="75px"
      viewBox="0 0 85 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      display={['none', 'block']}
      position="absolute"
      left="16%"
      top="150px"
      zIndex={11}
    >
      <g id="triangle">
        <path
          id="triangle-shape"
          d="M42.0104 75L0 0.701263H84.0209L42.0104 75Z"
          fill="#EB1E99"
        />
      </g>
    </Box>
  );
}

export default Triangle;
