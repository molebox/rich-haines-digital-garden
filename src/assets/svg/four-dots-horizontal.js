import React from 'react';
import { gsap } from 'gsap';

function FourDotsHorizontal() {
  React.useEffect(() => {
    // let tl = gsap.timeline();
    // tl.fromTo(
    //   '#purple-dot-horizontal',
    //   { y: 5 },
    //   { y: -5, duration: 1, repeat: -1, yoyo: true, ease: 'back(3)' },
    // );
    // tl.fromTo(
    //   '#pink-dot-horizontal',
    //   { y: 6 },
    //   { y: -6, duration: 1, repeat: -1, yoyo: true, ease: 'back(3)' },
    // );
    // tl.fromTo(
    //   '#yellow-dot-horizontal',
    //   { y: 7 },
    //   { y: -7, duration: 1, repeat: -1, yoyo: true, ease: 'back(3)' },
    // );
    // tl.fromTo(
    //   '#blue-dot-horizontal',
    //   { y: 8 },
    //   { y: -8, duration: 1, repeat: -1, yoyo: true, ease: 'back(3)' },
    // );
  }, []);

  return (
    <svg
      width="178"
      height="178"
      viewBox="0 0 178 178"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        left: '16.18%',
        right: '75.21%',
        top: '20.54%',
        bottom: '57.09%',
        // transform: 'rotate(-45.04deg)'
      }}
    >
      <g id="4-dots-horizontal">
        <path
          id="purple-dot-horizontal"
          d="M23.4029 80.1738C27.7738 84.5384 27.8515 91.5524 23.5766 95.8335C19.3016 100.115 12.2876 100.047 7.91675 95.6822C3.54589 91.3176 3.46807 84.3037 7.74305 80.0226C12.018 75.7415 19.0321 75.8092 23.4029 80.1738Z"
          fill="#9B5DE5"
        />
        <path
          id="pink-dot-horizontal"
          d="M72.0428 80.6437C76.4137 85.0083 76.4914 92.0223 72.2164 96.3034C67.9415 100.585 60.9275 100.517 56.5566 96.1521C52.1858 91.7875 52.108 84.7736 56.3829 80.4925C60.6579 76.2114 67.672 76.2791 72.0428 80.6437Z"
          fill="#F15BB5"
        />
        <path
          id="yellow-dot-horizontal"
          d="M120.683 81.1135C125.054 85.4781 125.132 92.492 120.857 96.7731C116.582 101.054 109.568 100.986 105.197 96.6218C100.826 92.2572 100.748 85.2433 105.023 80.9622C109.312 76.6669 116.312 76.7489 120.683 81.1135Z"
          fill="#FEE440"
        />
        <path
          id="blue-dot-horizontal"
          d="M169.351 81.5835C173.722 85.9481 173.8 92.962 169.525 97.2431C165.25 101.524 158.236 101.456 153.865 97.0919C149.494 92.7273 149.417 85.7133 153.692 81.4322C157.967 77.1511 164.966 77.2045 169.351 81.5835Z"
          fill="#00F5D4"
        />
      </g>
    </svg>
  );
}

export default FourDotsHorizontal;
