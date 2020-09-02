import React from 'react';
import { Box } from '@chakra-ui/core';

function SemiCircle() {
  return (
    <Box
      as="svg"
      width="99px"
      height="384px"
      viewBox="0 0 99 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      display={['none', 'block']}
      position="absolute"
      left="0"
      top="400px"
    >
      <g id="semi-circle">
        <g id="semi-circle-outer-2">
          <g id="Group">
            <path
              id="Vector"
              d="M-6.07453 207.133C27.5474 214.929 52.6299 245.631 52.6299 282.302C52.6299 321.956 23.3083 354.611 -14.3997 358.908"
              stroke="#121212"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </g>
        </g>
        <g id="semi-circle-outer-1">
          <g id="Group_2">
            <path
              id="Vector_2"
              d="M-2.50882 184.462C41.8256 194.039 75.0802 234.21 75.0802 282.317C75.0802 334.018 36.653 376.563 -12.6398 381.798"
              stroke="#121212"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </g>
        </g>
        <g id="semi-circle-inner-2">
          <g id="Group_3">
            <path
              id="Vector_3"
              d="M-9.0586 229.647C13.7284 235.866 30.5164 257.084 30.5164 282.317C30.5164 310.004 10.3004 332.878 -15.8993 336.362"
              stroke="#121212"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </g>
        </g>
        <g id="semi-circle-inner-1">
          <g id="Group_4">
            <path
              id="Vector_4"
              d="M-12.1347 252.193C-0.090808 256.677 8.50979 268.458 8.50979 282.317C8.50979 298.113 -2.69241 311.238 -17.4144 313.878"
              stroke="#121212"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </Box>
  );
}

export default SemiCircle;
