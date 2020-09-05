import React from 'react';
import { Image } from '@chakra-ui/core';
import { gsap } from 'gsap';

function BigCloud2() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    const TL = gsap.timeline({ repeat: -1, yoyo: true, delay: 3.5 });
    if (typeof window !== 'undefined') {
      TL.from('#big-cloud-2', {
        y: -500, // or use window.innerWidth || window.innerHeight. They are the viewport after all :wink:
        ease: 'back(5)',
      }).to('#big-cloud-2', {
        x: window.innerWidth * 0.8, // window.innerWidth * 0.95
        repeat: -1,
        yoyo: true,
        duration: gsap.utils.random(20, 40),
      });
    }
    if (isLoaded) {
      TL.play();
    }
  }, []);

  return (
    <Image
      id="big-cloud-2"
      // boxSize={80}
      w={160}
      fit="cover"
      src="cloud-2-big.png"
      display={['none', 'block']}
      style={{
        position: 'absolute',
        top: '60px',
        // left: '5%',
        zIndex: 10,
      }}
      alt="A big cloud"
      onLoad={() => setIsLoaded(true)}
    />
  );
}

export default BigCloud2;
