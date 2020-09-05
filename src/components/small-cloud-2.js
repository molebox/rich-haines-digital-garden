import React from 'react';
import { Image } from '@chakra-ui/core';
import { gsap } from 'gsap';
// import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
function SmallCloud2() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    const TL = gsap.timeline({ repeat: -1, yoyo: true, delay: 5 });
    if (typeof window !== 'undefined') {
      TL.from('#small-cloud-2', {
        y: -500, // or use window.innerWidth || window.innerHeight. They are the viewport after all :wink:
        ease: 'back(5)',
      }).to('#small-cloud-2', {
        x: window.innerWidth * 0.8, // window.innerWidth * 0.95
        repeat: -1,
        yoyo: true,
        duration: gsap.utils.random(30, 60),
      });
    }
    if (isLoaded) {
      TL.play();
    }
  }, []);

  return (
    <Image
      id="small-cloud-2"
      // boxSize={80}
      w={100}
      fit="cover"
      src="cloud-2-small.png"
      display={['none', 'block']}
      style={{
        position: 'absolute',
        top: '65px',
        // left: '40%',
        zIndex: 10,
      }}
      alt="A small cloud"
      onLoad={() => setIsLoaded(true)}
    />
  );
}

export default SmallCloud2;
