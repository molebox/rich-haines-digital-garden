import React from 'react';
import { Image } from '@chakra-ui/core';
import { gsap } from 'gsap';
// import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
function SmallCloud2() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const TL = gsap.timeline({ repeat: -1, yoyo: true, delay: 3.4 });
      TL.from('#small-cloud-2', {
        y: -500, // or use window.innerWidth || window.innerHeight. They are the viewport after all :wink:
        ease: 'back(5)',
      }).to('#small-cloud-2', {
        x: window.innerWidth * 0.9, // window.innerWidth * 0.95
        repeat: -1,
        yoyo: true,
        duration: gsap.utils.random(70, 90),
      });
    }
    // let tl = gsap.timeline();
    // tl.fromTo(
    //   '#small-cloud-2',
    //   { y: -500 },
    //   { y: 0, delay: 1, duration: 1, ease: 'back(1)' },
    // );
    // tl.to('#small-cloud-2', { x: 500, duration: 40, repeat: -1 });
  }, []);

  return (
    <Image
      id="small-cloud-2"
      // boxSize={80}
      w={100}
      fit="cover"
      src="cloud-2-small.png"
      style={{
        position: 'absolute',
        top: '15%',
        // left: '40%',
        zIndex: 10,
      }}
      alt="A small cloud"
    />
  );
}

export default SmallCloud2;
