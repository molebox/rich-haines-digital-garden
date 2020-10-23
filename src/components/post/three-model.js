import React from 'react';
import { useGLTFLoader } from 'drei';

const ThreeModel = ({ gltfPath, position }) => {
  const gltf = useGLTFLoader(gltfPath, true);
  return (
    <mesh position={position}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default ThreeModel;
