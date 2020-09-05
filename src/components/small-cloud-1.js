import React from 'react';
import { Image } from '@chakra-ui/core';
import { gsap } from 'gsap';

function SmallCloud1() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    const TL = gsap.timeline({ repeat: -1, yoyo: true, delay: 3.5 });
    if (typeof window !== 'undefined') {
      TL.from('#small-cloud-1', {
        y: -500, // or use window.innerWidth || window.innerHeight. They are the viewport after all :wink:
        ease: 'back(5)',
      }).to('#small-cloud-1', {
        x: window.innerWidth * 0.8, // window.innerWidth * 0.95
        repeat: -1,
        yoyo: true,
        duration: gsap.utils.random(60, 95),
      });
    }
    if (isLoaded) {
      TL.play();
    }
  }, []);

  return (
    <Image
      id="small-cloud-1"
      // boxSize={80}
      w={80}
      fit="cover"
      src="cloud-1-small.png"
      display={['none', 'block']}
      style={{
        position: 'absolute',
        top: '55px',
        // left: '60%',
        zIndex: 12,
      }}
      alt="A small cloud"
      onLoad={() => setIsLoaded(true)}
    />
  );
}

export default SmallCloud1;
