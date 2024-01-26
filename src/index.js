import ReactDOM from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";
import Audio from "./Audio";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas>
      <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
        <Scene />
      </Physics>
    </Canvas>
    <Audio />
  </>
);
