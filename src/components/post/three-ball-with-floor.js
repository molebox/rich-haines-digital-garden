import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from '@chakra-ui/core';

const ThreeBallWithFloor = () => {
  return (
    <Box w={1000} h={500} m="0 auto">
      <Canvas>
        <mesh
          visible // object gets render if true
          userData={{ test: 'hello' }} // An object that can be used to store custom data about the Object3d
          position={[0, 0, 2]} // The position on the canvas of the object [x,y,x]
          rotation={[0, 0, 0]} // The rotation of the object
          castShadow // Sets whether or not the object cats a shadow
          // There are many more props.....
        >
          {/* A spherical shape*/}
          <sphereGeometry attach="geometry" args={[1, 16, 16]} />
          {/* A standard mesh material*/}
          <meshStandardMaterial
            attach="material" // How the element should attach itself to its parent
            color="white" // The color of the material
            transparent // Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects. When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
            roughness={0.1} // The roughness of the material - Defaults to 1
            metalness={0.1} // The metalness of the material - Defaults to 0
          />
        </mesh>
        <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
          <planeBufferGeometry attach="geometry" args={[500, 500]} />
          <meshStandardMaterial attach="material" color="white" />
        </mesh>
      </Canvas>
    </Box>
  );
};

export default ThreeBallWithFloor;
