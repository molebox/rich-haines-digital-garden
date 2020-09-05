import React from 'react';
import { Image } from '@chakra-ui/core';
import { gsap } from 'gsap';

function BigCloud1() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    const TL = gsap.timeline({ repeat: -1, yoyo: true, delay: 2 });
    if (typeof window !== 'undefined') {
      TL.from('#big-cloud-1', {
        y: -500, // or use window.innerWidth || window.innerHeight. They are the viewport after all :wink:
        ease: 'back(5)',
      }).to('#big-cloud-1', {
        x: window.innerWidth * 0.8, // window.innerWidth * 0.95
        repeat: -1,
        yoyo: true,
        duration: gsap.utils.random(40, 75),
      });
    }
    if (isLoaded) {
      TL.play();
    }
  }, []);

  return (
    <Image
      id="big-cloud-1"
      // boxSize={80}
      w={150}
      fit="cover"
      src="cloud-1-big.png"
      display={['none', 'block']}
      style={{
        position: 'absolute',
        top: '25px',
        // left: '20%',
        zIndex: 10,
      }}
      alt="A big cloud"
      onLoad={() => setIsLoaded(true)}
    />
  );
}

export default BigCloud1;
