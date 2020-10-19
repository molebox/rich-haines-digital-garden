import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from '@chakra-ui/core';
import { MeshDistortMaterial, MeshWobbleMaterial, Plane, Sphere } from 'drei';

const ThreeBall = () => {
  return (
    <Box maxW={1000} minW={300} w="auto" h={500} m="0 auto">
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
            color="#7222D3" // The color of the material
            transparent // Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects. When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
            roughness={0.1} // The roughness of the material - Defaults to 1
            metalness={0.1} // The metalness of the material - Defaults to 0
          />
        </mesh>
        {/*An ambient light that creates a soft light against the object */}
        <ambientLight intensity={0.8} />
        {/*An directional light which aims form the given position */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/*An point light, basically the same as directional. This one points from under */}
        <pointLight position={[0, -10, 5]} intensity={1} />
      </Canvas>
    </Box>
  );
};

export default ThreeBall;
