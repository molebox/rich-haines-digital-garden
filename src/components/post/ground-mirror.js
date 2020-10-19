import { Reflector } from 'drei';
import React from 'react';

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

const GroundMirror = () => (
  <Reflector
    clipBias={0.003}
    textureWidth={WIDTH * window.devicePixelRatio}
    textureHeight={HEIGHT * window.devicePixelRatio}
    color={0x777777}
    position={[0, 0.5, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
  >
    <circleBufferGeometry args={[40, 64]} attach="geometry" />
  </Reflector>
);

export default GroundMirror;
