import React, { Suspense, useContext } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ThemeContext } from "../ThemeContext";
import { LoadContext } from "../LoadContext";
import gsap from "gsap";
import "./showCar.css";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  const { loading, setLoading } = useContext(LoadContext);
  // console.log(progress);
  if (progress >= 100) {
    const timeline = gsap.timeline();
    timeline
      .to("#wrapper", {
        display: "none",
      })
      .to(".App", {
        visibility: "visible",
        overflowY: "scroll",
      })
      .set(".char", { y: "-100%" })
      .to(".char", {
        y: 0,
        stagger: 0.15,
        duration: 0.2,
      });
  }
  return <Html center>{progress} % loaded</Html>;
}

function Model() {
  const { scene } = useGLTF("porsche.glb");
  return <primitive object={scene} />;
}

export function ShowCar(props) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: "60%",
        width: "100%",
      }}
    >
      <div id="here">
        <div id="arrow">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="50px"
            height="50px"
            style={{ fill: theme === "dark" ? "white" : "black" }}
            viewBox="0 0 367.339 367.34"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M337.591,0.932c-13.464,6.12-26.315,12.852-39.168,20.196c-11.628,6.12-25.704,12.24-35.496,21.42
		c-5.508,4.896,0,15.3,7.344,12.852c0,0,0.612,0,0.612-0.612c1.836,1.224,3.061,2.448,4.896,4.284c0,0.612,0.611,1.836,0.611,2.448
		c0.612,1.224,1.836,2.448,3.061,3.672c-17.748,33.048-34.272,66.096-55.08,96.696c-6.12,9.18-12.853,17.748-20.808,25.704
		c-19.584-31.212-51.409-67.32-89.965-60.588c-50.796,9.18-23.256,63.647,3.06,82.008c31.212,22.644,58.14,21.42,85.068,0
		c12.24,20.808,20.809,44.063,19.584,66.708c-1.836,54.468-50.796,63.647-91.8,49.571c6.12-15.912,7.956-34.271,4.284-50.184
		c-6.12-28.764-50.184-54.468-75.888-34.272c-25.092,20.196,22.032,71.604,37.332,82.009c4.284,3.06,9.18,6.119,14.076,8.567
		c-0.612,0.612-0.612,1.225-1.224,1.836c-28.152,44.064-65.484,6.12-82.62-25.092c-2.448-4.896-9.18-0.612-7.344,4.284
		c14.076,32.436,42.84,70.38,81.396,48.348c9.18-5.508,17.136-13.464,22.644-23.256c33.66,13.464,72.829,13.464,97.308-17.136
		c29.376-36.72,11.017-84.456-8.567-119.952c0.611-0.612,0.611-0.612,1.224-1.224c34.884-33.66,56.304-81.396,78.336-124.236
		c4.284,3.06,9.181,6.12,13.464,9.18c3.061,1.836,7.345,1.224,9.792-1.224c17.748-20.808,31.212-45.9,35.496-73.44
		C351.055,2.768,344.324-2.128,337.591,0.932z M178.471,207.787c-23.256,13.464-46.512-3.06-63.648-18.972
		c-22.644-20.808-16.524-54.468,18.36-47.735c17.748,3.672,31.824,19.584,43.452,32.436c6.12,6.732,12.241,14.687,17.749,23.255
		C189.488,201.056,183.979,204.728,178.471,207.787z M116.047,319.171C116.047,319.171,115.435,319.171,116.047,319.171
		c-16.524-8.567-28.764-20.808-38.556-36.107c-4.284-6.732-7.956-14.076-9.792-22.032c-6.12-20.808,26.928-10.404,35.496-6.12
		C126.451,267.764,124.615,297.14,116.047,319.171z M306.379,67.028c-0.612,0-0.612-0.612-1.224-0.612
		c0-1.836-1.225-3.672-3.672-4.896c-4.284-1.836-8.568-4.284-12.853-6.732c-1.836-1.224-5.508-4.896-5.508-3.672
		c0-0.612-0.612-1.224-1.224-1.224c6.731-3.672,13.464-8.568,20.195-12.24c8.568-4.896,17.748-9.792,26.929-14.688
		C324.74,38.264,316.784,53.564,306.379,67.028z"
              />
            </g>
          </svg>
        </div>
        <div
          id="notMine"
          style={{ color: theme !== "dark" ? "black" : "white" }}
        >
          I Don't own this car in real life
        </div>
      </div>
      <Canvas
        camera={{
          position: [6.75, 4.75, 3.75],
          fov: 20,
        }}
      >
        <directionalLight
          color={"white"}
          intensity={5}
          position={[0, 1, 0]}
          castShadow={true}
        />
        <pointLight
          position={[0, 300, 500]}
          intensity={5}
          color="rgb(187, 187, 187)"
        />
        <pointLight
          position={[500, 100, 0]}
          intensity={5}
          color="rgb(187, 187, 187)"
        />
        <pointLight
          position={[0, 100, -500]}
          intensity={5}
          color="rgb(187, 187, 187)"
        />
        <pointLight
          position={[-500, 300, 500]}
          intensity={10}
          color="rgb(187, 187, 187)"
        />
        <Suspense fallback={<Loader />}>
          <mesh scale={0.7}>
            <Model />
          </mesh>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
