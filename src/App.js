import React from "react";
import { useThree, Canvas } from "react-three-fiber";
import "./App.css";
import { CubeTextureLoader } from "three";

function Skybox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ]);

  scene.background = texture;
  return null;
}

function Sphere() {
  return (
    <mesh visible positions={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        // envMap={cubeCamera.renderTarget.texture}
        color="white"
        roughness={0.1}
        metalness={1}
      />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <Sphere />
      <Skybox />
    </Canvas>
  );
}

export default App;
