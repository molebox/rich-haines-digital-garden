import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from '@chakra-ui/core';

const CanvasContainer = ({ children }) => {
  return (
    <Box maxW={1440} minW={300} w="auto" h={500} m="0 auto">
      <Canvas
        colorManagement
        camera={{
          position: [0, 0, 7],
          fov: 70,
        }}
      >
        {children}
      </Canvas>
    </Box>
  );
};

export default CanvasContainer;
