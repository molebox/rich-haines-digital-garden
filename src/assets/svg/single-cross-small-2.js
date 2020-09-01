import React from 'react';
import { gsap } from 'gsap';

function SingleCrossSmall2() {
  React.useEffect(() => {
    gsap.to('#single-cross-small-2', {
      rotate: '360',
      repeat: -1,
      transformOrigin: '50% 50%',
    });
  }, []);

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        left: '54.86%',
        right: '43.9%',
        top: '12.6%',
        bottom: '85.63%',
        zIndex: 11,
      }}
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
    </svg>
  );
}
export default SingleCrossSmall2;
