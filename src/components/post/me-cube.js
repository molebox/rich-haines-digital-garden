import React from 'react';
import { useTexture } from '@react-three/drei';
import CanvasContainer from './canvas-container';

const MeCube = () => {
  // Load the texture. This is a single texture that will be placed on all 6 sides of the cube
  const [militaryTexture] = useTexture(['/me.jpg']);

  return (
    <CanvasContainer>
      <mesh visible position={[0, 0, 0]} rotation={[10, 20, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" map={militaryTexture} />
      </mesh>
    </CanvasContainer>
  );
};

export default MeCube;
