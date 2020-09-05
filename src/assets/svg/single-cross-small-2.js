import React from 'react';
import { gsap } from 'gsap';
import { Box } from '@chakra-ui/core';

function SingleCrossSmall2() {
  React.useEffect(() => {
    gsap.to('#single-cross-small-2', {
      rotate: '360',
      repeat: -1,
      transformOrigin: '50% 50%',
    });
  }, []);

  return (
    <Box
      as="svg"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      display={['none', 'block']}
      position="absolute"
      left={['60%', '54.86%']}
      top={['25px', '120px']}
      zIndex={11}
    >
      <g id="single-cross-small-2">
        <path
          id="line-2"
          d="M18.7762 1L1 19.1571"
          stroke="#121212"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          id="line-1"
          d="M18.7762 19.1571L1 1"
          stroke="#121212"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
    </Box>
  );
}
export default SingleCrossSmall2;
