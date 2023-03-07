import { useEffect } from "react";
import gsap from "gsap";

const AnimatedLogo = ({ children, strokeColor, hoverId, fillColor, link }) => {
  useEffect(() => {
    gsap.to(`#${hoverId}`, {
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          height: "2rem",
          transform: "translate(-11%, -10%)",
        }}
      >
        <svg
          style={{
            position: "absolute",
            height: "2rem",
            width: "2rem",
            overflow: "visible",
          }}
        >
          <circle
            id={hoverId}
            cx="50%"
            cy="50%"
            r="17"
            stroke={strokeColor}
            strokeWidth="2"
            fill={fillColor}
          />
        </svg>
      </div>
      <div
        style={{ position: "absolute" }}
        onMouseEnter={() => {
          gsap.to(`#${hoverId}`, {
            // duration: 0.4,
            strokeDashoffset: 0,
          });
        }}
        onMouseLeave={() => {
          gsap.to(`#${hoverId}`, {
            strokeDashoffset: 1000,
          });
        }}
      >
        <a href={link} target="_blank">
          {children}
        </a>
      </div>
    </div>
  );
};

export default AnimatedLogo;
