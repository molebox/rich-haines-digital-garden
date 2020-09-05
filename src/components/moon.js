import React from 'react';
import { Image } from '@chakra-ui/core';
import {gsap} from 'gsap';

function Moon() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== undefined) {
      if (isLoaded) {
        gsap.fromTo('#moon-with-clouds', {scale: 0.1},  {scale: 1.2, ease: 'elastic(1)'})
      }
      
    }
  }, []);

  return (
    <Image
      id="moon-with-clouds"
      w={[50, 100]}
      fit="cover"
      src="moon-with-clouds.png"
      // display={['none', 'block']}
      position="absolute"
      top={['20px', '40px']}
      right={['70%', '30%']}
      zIndex={10}
      alt="A moon covered with clouds"
      opacity={isLoaded ? 1 : 0}
      onLoad={() => setIsLoaded(true)}

    />
  );
}

export default Moon;
