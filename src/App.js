import React from "react";
import { Canvas } from "react-three-fiber";
import "./App.css";

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
    </Canvas>
  );
}

export default App;
