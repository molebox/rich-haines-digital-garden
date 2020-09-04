import React from 'react';
import { Image } from '@chakra-ui/core';

function Moon() {
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
    />
  );
}

export default Moon;
