import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from '@chakra-ui/core';
import { MeshWobbleMaterial, Sphere } from 'drei';

const ThreeBallWobble = () => {
  return (
    <Box maxW={1000} minW={300} w="auto" h={500} m="0 auto">
      <Canvas>
        {/*An ambient light that creates a soft light against the object */}
        <ambientLight intensity={0.8} />
        {/*An directional light which aims form the given position */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/*An point light, basically the same as directional. This one points from under */}
        <pointLight position={[0, -10, 5]} intensity={1} />
        {/* We can use the drei Sphere which has a simple API. This sphere has a wobble material attached to it */}
        <Sphere visible position={[0, 0, 2]} args={[1, 16, 16]}>
          <MeshWobbleMaterial
            attach="material"
            color="#EB1E99"
            factor={2} // Strength, 0 disables the effect (default=1)
            speed={3} // Speed (default=1)
            roughness={0}
          />
        </Sphere>
      </Canvas>
    </Box>
  );
};

export default ThreeBallWobble;
