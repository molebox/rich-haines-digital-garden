import React, { Suspense } from "react";
import { Spinner } from "@chakra-ui/core";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import Cube from "./cube";
import Plane from './plane';
import { Html } from "@react-three/drei";

/**
 * A set of 3D cubes which spell out "Digital Garden"
 */
const Cubes = () => {
  const pixelRatio = React.useRef();

  React.useEffect(() => {
    if (typeof window !== undefined) {
      pixelRatio.current = window.devicePixelRatio * 1.5;
    }
  }, []);

  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{
          position: [2, 6, 5], // x, y, z
          // fov: 75, // Field of view, the higher the number the further away the camera
          zoom: 1.5,
        }}
        pixelRatio={pixelRatio.current}
        concurrent
      >
        <Suspense
          fallback={
            <Html center>
              <Spinner />
            </Html>
          }
        >
          <directionalLight
            intensity={("#fff", 0.5)}
            position={[10, 20, 10]}
            castShadow
          />
          <ambientLight intensity={0.8} />
          <hemisphereLight intensity={1} />
          <Physics>
            <Plane />
            <Cube imagePath={['/letters/D.png']} position={[-5, 11, -3]} />
            <Cube imagePath={['/letters/I.png']} position={[-2, 11, -3]} />
            <Cube imagePath={['/letters/G.png']} position={[-1, 10, -3]} />
            <Cube imagePath={['/letters/I.png']} position={[0, 9, -3]} />
            <Cube imagePath={['/letters/T.png']} position={[1, 8, -3]} />
            <Cube imagePath={['/letters/A.png']} position={[2, 7, -3]} />
            <Cube imagePath={['/letters/L.png']} position={[3, 8, -3]} />

            <Cube imagePath={['/letters/G.png']} position={[-3, 8, 2]} />
            <Cube imagePath={['/letters/A.png']} position={[-2, 6, 2]} />
            <Cube imagePath={['/letters/R.png']} position={[0, 5, 2]} />
            <Cube imagePath={['/letters/D.png']} position={[1, 4, 2]} />
            <Cube imagePath={['/letters/E.png']} position={[3, 3, 2]} />
            <Cube imagePath={['/letters/N.png']} position={[4, 2, 2]} />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Cubes;
