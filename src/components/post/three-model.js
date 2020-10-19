import React from 'react';
import { useGLTFLoader } from 'drei';
import { Canvas } from 'react-three-fiber';

const ThreeModel = ({ gltfPath, position }) => {
  const gltf = useGLTFLoader(gltfPath, true);
  return (
    <Canvas
      colorManagement
      camera={{
        position: [0, 0, 10],
        fov: 70,
      }}
    >
      <mesh position={position}>
        <primitive object={gltf.scene} dispose={null} />
      </mesh>
    </Canvas>
  );
};

export default ThreeModel;
